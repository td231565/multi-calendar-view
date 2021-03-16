<template>
  <section class="calendar-shadow" style="padding: 6px 10px 18px 10px;">
    <!-- header -->
    <div v-show="!isMonthView" class="fx fx-jsb fx-aic mb-1">
      <!-- datepicker -->
      <div v-if="isDayView" class="fx fx-jsb fx-aic calendar-datepicker">
        <button class="calendar-arrow-btn calendar-arrow-btn__prev" @click="changeDate('prev')"></button>
        <p>{{selectedDate}}</p>
        <button class="calendar-arrow-btn calendar-arrow-btn__next" @click="changeDate('next')"></button>
      </div>
      <h1 v-else-if="isWeekView" class="ml-2">預約行事曆</h1>
      <div class="fx">
        <!-- switch day/week -->
        <CustomSelector :current="activeView" :optionList="viewSelectOptions" @on-change="switchView" />
        <CustomSelector :current="currentUser" :optionList="userSetting" @on-change="handleUserLogState" class="ml-1" />
      </div>
    </div>
    <!-- week bar -->
    <div class="fx fx-jsb fx-aic">
      <button class="calendar-switch-btn bg-secondary circle mr-1" @click="showMonthCalendar(true)"></button>
      <div v-if="!isMonthView" class="calendar-weeks-bar fx fx-jsb">
        <div v-for="(date, idx) in weekDateNumber"
          :key="date"
          class="calendar-weeks-bar__item fx fx-jcc">
          <div class="calendar-weeks-bar__item__content"
            :class="{
              'calendar-weeks-bar__item--current': date === getLocalDateString(new Date()),
              'calendar-weeks-bar__item--selected': isDayView && date === getLocalDateString(selectedDate)
            }"
            @click="chooseDate(date)">
            <p class="mb-1">{{weekList[idx]}}</p>
            <p v-if="!isMonthView">{{new Date(date).getDate()}}</p>
          </div>
        </div>
      </div>
      <!-- switch month -->
      <button v-if="activeView.key === 'month'" class="calendar-close-btn" @click="callMonth">╳</button>
    </div>
  </section>
  <!-- calendar -->
  <div :style="!isMonthView ? 'height: 70vh;' : ''" ref="container">
    <VueCal ref="vuecal"
      hide-view-selector
      hide-title-bar
      xsmall
      twelveHour
      :timeFrom="6*60"
      :timeCellHeight="60"
      :activeView="activeView.key"
      :disableViews="['years', 'year']"
      class="vuecal--rounded-theme custom-theme"
      :selected-date="selectedDate"
      @cell-focus="chooseDate"
      @view-change="handleViewChange" />
  </div>
  <!-- button -->
  <div class="fx fx-jcc mt-4">
    <button class="btn btn-primary" @click="addNewEvent">{{submitBtn.text}}</button>
  </div>
  <!-- dialog -->
  <CalendarMonthSelect v-if="isShowMonthCalendar"
    :current="selectedDate"
    @select-date="selectDateFromMonth"
    @on-close="showMonthCalendar(false)" />
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import {ref, computed, toRefs, reactive} from 'vue'
import CustomSelector from '@/components/utils/CustomSelector'
import CalendarMonthSelect from '@/components/calendar/CalendarMonthSelect'

export default {
  name: 'Calendar',
  components: {
    VueCal,
    CustomSelector,
    CalendarMonthSelect
  },
  props: {
    username: {
      type: String
    }
  },
  emits: ['logout', 'login'],
  setup (props, {emit}) {
    const {username} = toRefs(props)
    const currentUser = reactive({key: 'user', title: username})
    // 目前 view
    const activeView = ref({})
    const isMonthView = computed(() => activeView.value.key === 'month')
    const isWeekView = computed(() => activeView.value.key === 'week')
    const isDayView = computed(() => activeView.value.key === 'day')
    const viewOptions = [
      {key: 'week', title: '周檢視'},
      {key: 'day', title: '日檢視'},
      {key: 'month', title: '月檢視'}
    ]
    activeView.value = viewOptions[0]
    const viewSelectOptions = viewOptions.filter(item => item.key !== 'month')
    const isSelectActive = ref(false) // 是否點擊日/周下拉選單
    // 切換日/周
    const switchView = (key) => {
      activeView.value = viewOptions.find(item => item.key === key)
    }
    // 呼叫月曆
    const callMonthView = (() => {
      let prevView = activeView.value
      const switchViewBetweenMonth = () => {
        if (activeView.value.key !== 'month') {
          prevView = activeView.value
          switchView('month')
        } else {
          switchView(prevView.key)
        }
      }
      return { switch: switchViewBetweenMonth }
    })()

    // Vue Calendar 實體
    const vuecal = ref(null)
    const bookingList = ref([]) // 預約列表

    // 選擇日期
    const selectedDate = ref('') // 目前日期
    const getLocalDateString = (date) => {
      let [yyyy, mm, dd] = new Date(date).toLocaleDateString().split('/')
      mm = mm.padStart(2, '0')
      dd = dd.padStart(2, '0')
      return `${yyyy}-${mm}-${dd}`
    }
    const chooseDate = (date = new Date()) => {
      selectedDate.value = getLocalDateString(date)
      switchView('day')
    }
    chooseDate()
    // 往前/後移動日期
    const changeDate = (action) => {
      action === 'prev'
        ? vuecal.value.previous()
        : vuecal.value.next()
    }

    // 顯示週日期
    const weekList = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const weekDateNumber = ref([])
    const showWeekDays = (startDate) => {
      const start = new Date(startDate)
      let startD = start.getDay() === 1
        ? start.getDate() // 星期一
        : start.getDay() === 0
          ? start.getDate() - (7 - 1) // 星期日
          : start.getDate() - (start.getDay() - 1) // 其他
      weekDateNumber.value = new Array(7).fill(0).map((num, idx) => {
        return getLocalDateString(new Date(new Date(startDate).setDate(startD + idx)))
      })
    }
    showWeekDays(selectedDate.value)

    // [listen] 監聽畫面變化
    const handleViewChange = (e) => {
      let {view, startDate} = e
      if (!view) { return }
      switchView(view)
      showWeekDays(startDate)
      switch (view) {
        case 'day':
          chooseDate(startDate)
          break
        default:
          break
      }
    }

    const submitBtn = computed(() => isMonthView.value
      ? {type: 'select', text: '選擇', func: chooseDate}
      : {type: 'add', text: '+ 新增預約', func: addNewEvent}
    )
    const addNewEvent = () => {
      vuecal.value.createEvent('2021-03-20 11:00', 60*1, {
        title: 'A new event',
        content: 'do something',
        class: 'blue-event'
      })
    }

    const isShowMonthCalendar = ref(false)
    const showMonthCalendar = (state) => {
      isShowMonthCalendar.value = state
    }
    const selectDateFromMonth = (date) => {
      chooseDate(date)
      showMonthCalendar(false)
    }

    const userSettingDefault = [{key: 'login', title: '登入'}, {key: 'logout', title: '登出'}]
    const userSetting = computed(() => userSettingDefault.filter(item => {
        const showOption = username.value === '訪客' ? 'login' : 'logout'
        return item.key === showOption
      })
    )
    const handleUserLogState = (key) => {
      emit(key)
    }

    return {
      currentUser,
      activeView,
      isMonthView,
      isWeekView,
      isDayView,
      weekList,
      weekDateNumber,
      viewSelectOptions,
      isSelectActive,
      switchView,
      callMonth: callMonthView.switch,
      vuecal,
      selectedDate,
      chooseDate,
      changeDate,
      getLocalDateString,
      // Event Listener
      bookingList,
      handleViewChange,
      addNewEvent,
      handleUserLogState,
      submitBtn,
      userSetting,
      // dialog
      selectDateFromMonth,
      showMonthCalendar,
      isShowMonthCalendar
    }
  }
}
</script>

<style scoped lang="scss">

</style>

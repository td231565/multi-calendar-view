<template>
  <section class="fx fx-aic mb-3">
    <!-- switch month -->
    <button class="calendar-switch-btn bg-secondary circle mr-1" @click="callMonth">
      <img src="@/assets/img/btn_calendar.jpg" alt="切換月曆">
    </button>
    <!-- switch day/week -->
    <div class="custom-select" @click="isSelectActive = !isSelectActive">
      <div class="fx fx-jsb fx-aic">
        <p>{{activeView.title}}</p>
        <p class="custom-select__arrow ml-1" :class="{active: isSelectActive}"></p>
      </div>
      <div v-if="isSelectActive" class="custom-select__list">
        <p v-for="item in viewSelectOptions"
          :key="item.key"
          class="custom-select__item"
          @click="switchView(item.key)"
          >{{item.title}}</p>
      </div>
    </div>
  </section>
  <div :style="activeView.key !== 'month' ? 'height: 70vh;' : ''">
    <VueCal
      xsmall
      hideViewSelector
      :activeView="activeView.key"
      :disableViews="['years', 'year']"
      class="vuecal--rounded-theme"
      :selectedDate="selectedDate"
      :min-date="minDate"
      @cell-focus="chooseDate" />
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import {ref, computed} from 'vue'

export default {
  name: 'Calendar',
  components: {
    VueCal
  },
  setup () {
    // 目前 view
    const activeView = ref({})
    const viewOptions = [
      {key: 'day', title: '日檢視'},
      {key: 'week', title: '周檢視'},
      {key: 'month', title: '月檢視'}
    ]
    activeView.value = viewOptions[0]
    const viewSelectOptions = viewOptions.filter(item => item.key !== 'month')
    // 是否點擊日/周下拉選單
    const isSelectActive = ref(false)
    // 切換日/周
    const switchView = (key) => {
      activeView.value = viewOptions.find(item => item.key === key)
    }
    // 呼叫月曆
    const callMonthView = (() => {
      let prevView = activeView.value
      const switchView = () => {
        if (activeView.value.key !== 'month') {
          prevView = activeView.value
          activeView.value = viewOptions.find(item => item.key === 'month')
        } else {
          activeView.value = prevView
        }
      }
      return { switch: switchView }
    })()

    const minDate = computed(() => new Date().subtractDays(1))
    const selectedDate = ref(null)
    const chooseDate = (date) => {
      selectedDate.value = date
    }

    return {
      activeView,
      viewSelectOptions,
      isSelectActive,
      switchView,
      callMonth: callMonthView.switch,
      selectedDate,
      minDate,
      chooseDate
    }
  }
}
</script>

<style scoped lang="scss">
.calendar-switch-btn {
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>

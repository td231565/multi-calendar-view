<template>
  <CustomDialog @on-close="closeDialog">
    <template #header>
      <h3>選擇日期</h3>
    </template>
    <template #content>
      <VueCal
        hide-view-selector
        xsmall
        activeView="month"
        :selected-date="selectDate"
        :disableViews="['years', 'year', 'week', 'day']"
        class="vuecal--rounded-theme custom-theme"
        @cell-focus="chooseDate" />
    </template>
    <template #footer>
      <div class="fx fx-jcc mt-3">
        <button class="btn btn-primary" @click="submit">選擇</button>
      </div>
    </template>
  </CustomDialog>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { ref, toRefs } from 'vue'
import CustomDialog from '../utils/CustomDialog'

export default {
  name: 'CalendarMonthSelect',
  components: {
    VueCal,
    CustomDialog
  },
  props: {
    current: {
      type: String
    }
  },
  emits: ['select-date', 'on-close'],
  setup (props, {emit}) {
    const {current} = toRefs(props)
    const selectDate = ref('')
    selectDate.value = current.value
    const chooseDate = (date) => {
      selectDate.value = date
    }
    const submit = () => {
      emit('select-date', selectDate.value)
    }
    const closeDialog = (state) => {
      emit('on-close', state)
    }

    return {
      selectDate,
      chooseDate,
      submit,
      closeDialog
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

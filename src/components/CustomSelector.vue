<template>
  <div class="custom-select" @click="isSelectActive = !isSelectActive">
    <div class="custom-select__current fx fx-jsb fx-aic">
      <p class="custom-select__current">{{selectedOption.title}}</p>
      <p class="custom-select__arrow ml-1" :class="{active: isSelectActive}"></p>
    </div>
    <div v-if="isSelectActive" class="custom-select__list">
      <p v-for="item in list"
        :key="item.key"
        class="custom-select__item"
        @click="selectAOption(item.key)"
        >{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import {ref, toRefs} from 'vue'

export default {
  name: 'CustomSelector',
  props: {
    // 已選擇的選項
    current: {
      type: Object
    },
    // 選項們
    optionList: {
      type: Array
    }
  },
  setup (props, {emit}) {
    const isSelectActive = ref(false)
    // 初始化
    let {current: selectedOption, optionList: list} = toRefs(props)
    // 選擇選項
    const selectAOption = (key) => {
      emit('on-change', key)
    }

    // onMounted(() => {
    //   window.addEventListener('click', (e) => {
    //     if (!e.target || !e.target.className.includes('custom-select')) {
    //       isSelectActive.value = false
    //     }
    //   }, false)
    // })

    return {
      isSelectActive,
      list,
      selectedOption,
      selectAOption
    }
  }
}
</script>

<style>

</style>
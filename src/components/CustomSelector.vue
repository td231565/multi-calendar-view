<template>
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
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'CustomSelector',
  setup (props, {emit}) {
    console.log(props)
    console.log(emit)
    const isSelectActive = ref(false)

    return {
      isSelectActive
    }
  }
}
</script>

<style>

</style>
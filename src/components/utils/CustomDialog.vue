<template>
  <div class="custom-dialog__cover">
    <div class="custom-dialog__main">
      <header class="custom-dialog__header fx fx-jsb fx-aic mb-3">
        <slot name="header"></slot>
        <button class="calendar-close-btn" @click="closeDialog()">╳</button>
      </header>
      <main class="custom-dialog__content">
        <slot name="content"></slot>
      </main>
      <footer class="custom-dialog__footer">
        <slot name="footer">
          <div class="fx fx-jcc fx-aic mt-3">
            <button class="btn btn-primary" @click="closeDialog('success')">送出</button>
            <button class="btn ml-1" @click="closeDialog()">取消</button>
          </div>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
// import { ref, reactive, toRefs } from 'vue'

export default {
  name: 'CustomDialog',
  props: {
  },
  emits: ['on-close'],
  setup (props, {emit}) {
    const closeDialog = (state = '') => {
      emit('on-close', state)
    }

    return {
      closeDialog
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

<template>
  <Calendar :username="userName" />
</template>

<script>
import liff from '@line/liff'
import Calendar from './components/Calendar.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    Calendar
  },
  setup () {
    const liffId = '1654944538-wRrGzXyX'
    const isLogin = ref(false)
    const userName = ref('')

    const switchUserLogin = () => {
      isLogin.value ? liff.logout() : liff.login()
    }
    const getUserProfile = () => {
      liff.getProfile().then(profile => {
        const {displayName} = profile
        userName.value = displayName
        console.log(userName.value)
      }).catch(e => {
        console.log('error', e)
      })
    }
    const initLiff = () => {
      liff.init({ liffId }).then(() => {
        isLogin.value = liff.isLoggedIn()
      }).then(() => {
        if (!isLogin.value) {
          switchUserLogin()
        } else {
          getUserProfile()
        }
      })
    }
    initLiff()

    return {
      isLogin
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index';
</style>

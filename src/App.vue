<template>
  <Calendar :username="userName" @logout="liffLogout" />
</template>

<script>
import liff from '@line/liff'
import Calendar from './components/Calendar.vue'
import {ref, reactive} from 'vue'

export default {
  name: 'App',
  components: {
    Calendar
  },
  setup () {
    const userName = reactive({key: 'user', title: '訪客'})
    const isLogin = ref(false)
    const liffId = '1654944538-wRrGzXyX'

    const liffLogin = () => {
      liff.login()
    }
    const liffLogout = () => {
      liff.logout()
    }
    const getUserProfile = () => {
      liff.getProfile().then(profile => {
        const {displayName} = profile
        userName.title = displayName
      }).catch(e => {
        console.log('error', e)
      })
    }
    const initLiff = () => {
      liff.init({ liffId }).then(() => {
        isLogin.value = liff.isLoggedIn()
      }).then(() => {
        isLogin.value ? getUserProfile() : liffLogin()
      })
    }
    initLiff()

    return {
      isLogin,
      userName,
      liffLogout
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index';
</style>

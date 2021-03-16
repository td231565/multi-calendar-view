<template>
  <Calendar :username="userName" @logout="liffLogout" @login="liffLogin" />
</template>

<script>
import liff from '@line/liff'
import Calendar from './pages/Calendar.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    Calendar
  },
  setup () {
    const userName = ref('訪客')
    const isLogin = ref(false)
    const liffId = '1654944538-wRrGzXyX'

    const liffLogin = () => {
      liff.login()
    }
    const liffLogout = () => {
      liff.logout()
      changeUserName()
    }
    const changeUserName = (name = '訪客') => {
      userName.value = name
    }
    const getUserProfile = () => {
      liff.getProfile().then(profile => {
        const {displayName} = profile
        changeUserName(displayName)
      }).catch(e => {
        console.log(e)
      })
    }
    const initLiff = () => {
      liff.init({ liffId }).then(() => {
        isLogin.value = liff.isLoggedIn()
      }).then(() => {
        if (isLogin.value) {
          getUserProfile()
        }
      })
    }
    initLiff()

    return {
      isLogin,
      userName,
      liffLogout,
      liffLogin
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index';
</style>

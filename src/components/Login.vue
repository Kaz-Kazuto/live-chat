<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" placeholder="Enter Email" v-model="email">
      <input type="password" placeholder="Enter Password" v-model="password">
      <div class="error" v-if="error">{{ error }}</div>
      <button>Login</button>
    </form>
  </template>
  
  <script>
  import SingUp from './SingUp'
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import useLogin from '../composable/useLogin.js'
  export default {
  components: { SingUp },
      setup(props,context){
          let email = ref("");
          let password = ref ("");
          let displayName = ref(auth.currentUser)          
          let {error,sigIn} = useLogin()
  
        let login=async()=>{
          let result = await sigIn(email.value,password.value)
          if(result){
            displayName = result.displayName
            context.emit("enterChatroom")
          }
        }
  
          return {email,password, login ,error}
      }
  }
  </script>
  
  <style>
  
  </style>
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
      setup(){
          let email = ref("");
          let password = ref ("");
          
          let {error,sigin} = useLogin()
  
       let login=async()=>{
            let res = await sigin(email.value,password.value)
            if(res){
              alert("Complete")
            }
          }
  
          return{email,password, login ,error}
      }
  }
  </script>
  
  <style>
  
  </style>
<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" placeholder="Enter Email" v-model="email">
      <input type="password" placeholder="Enter Password" v-model="password">
      <button>Login</button>
    </form>
  </template>
  
  <script>
  import SingUp from './SingUp'
import { ref } from 'vue'
  export default {
  components: { SingUp },
      setup(){
          let email = ref("");
          let password = ref ("");
  
       let login=()=>{
              console.log (email.value,password.value)
          }
  
          return{email,password, login}
      }
  }
  </script>
  
  <style>
  
  </style>
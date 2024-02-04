<template>
    <h1>Sign Up</h1>
  <form @submit.prevent="SignUp">
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="email" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter Password" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import UseSignUp from "../composable/UseSignup"
export default {
    setup(props,context){
        let displayName=ref("");
        let email = ref("");
        let password = ref ("");

        let {error,createAccount}=UseSignUp();

     let SignUp=async()=>{
          let result = await createAccount(email.value,password.value,displayName.value)
          if(result){
            context.emit("enterChatroom")
          }
          }
         
        

        return {displayName,email,password, SignUp,error}
    }
}
</script>

<style>

</style>
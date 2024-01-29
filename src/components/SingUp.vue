<template>
    <h1>Sign Up</h1>
  <form @submit.prevent="SignUp">
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="email" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter Password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword, signWithEmailAndPassword, signOut } from 'firebase/auth'
export default {
    setup(){
        let displayName=ref("");
        let email = ref("");
        let password = ref ("");
        let error = ref("");

     let SignUp=async()=>{
         try{
            const result = await createUserWithEmailAndPassword(auth, email.value,password.value)
            if(!result){
                throw new Error("Could not create User")
            }
            console.log(result.user)
        }catch(err){
            error.value=err.message
            console.log(error.value)
        }
         }
        

        return{displayName,email,password, SignUp}
    }
}
</script>

<style>

</style>
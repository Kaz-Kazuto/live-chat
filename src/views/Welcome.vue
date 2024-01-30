<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>Not a member? <span @click="showLogin=!showLogin">Create Account?</span></p>
    </div>
    <div v-else>
      <SingUp @enterChatroom="enterChatroom"></SingUp>
      <p>Already member?<span @click="showLogin=!showLogin">Login Account?</span></p>
    </div>
   
    
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SingUp from '../components/SingUp'
import { useRouter } from 'vue-router'

export default {
  components: {
    Login, SingUp },

    setup(){
      let showLogin=ref(true)
      let router=useRouter()

      let enterChatroom=()=>{
        router.push({name:'chatroom'})
      }

      return{showLogin,enterChatroom}
    }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}

.welcome form{
  width: 300px;
  margin: 20px auto;
}

.welcome input{
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
  display: block;
}

.welcome span{
  text-decoration: underline;
  color: #5ae4ca;
  cursor: pointer;
  padding: 0 0 0 5px;
}

.welcome button{
  margin: 20px auto;
}
 
</style>
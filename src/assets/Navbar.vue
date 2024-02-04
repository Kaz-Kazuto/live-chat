<template>
  <nav>
    <div v-if="person">
        <p>Hi {{ person.displayName }}</p>
        <p class="email">Login as an {{ person.email }}</p>
    </div>
    <button @click="signout">Logout</button>
  </nav>
</template>



<script>
import Logout from '../composable/Logout';
import GetUser from "../composable/GetUser";
import { onMounted } from 'vue';
export default {
  setup(){
   let {error,logOut}= Logout()

    let signout=async()=>{
        await logOut()
        }
       let {person}=GetUser();
       console.log(person)
    return{signout,person}
  },
}
</script>

<style>
 nav{
    padding: 20px;
    border-bottom: 1px #eee ;
    display: flex;
    justify-content: space-between;
    align-items: center;
 }

 nav p{
    font-size: 16px;
    margin: 2px auto;
    color: #444;
 }

 nav p.email{
    font-size: 14px;
    color: #999;
 }
</style>
import { ref } from "vue";
import { auth } from '../firebase/config';

let person=ref(auth.currentUser)
 auth.onAuthStateChanged((user)=>{
//    console.log(user)
   person.value=user
 })


let GetUser=()=>{
    return {person}
}

export default GetUser;
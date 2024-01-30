import { ref } from "vue"
import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

let error = ref(null)

let sigin=async(email,password)=>{
    try{
        let result = await signInWithEmailAndPassword(auth, email, password)
        if(!result){
          throw new Error("Wrong Username and Password")
        }
       }catch(err){
          error.value=err.message
          console.log(error.value)
       }
}


let useLogin=()=>{

    return {error,sigin}
}

export default useLogin
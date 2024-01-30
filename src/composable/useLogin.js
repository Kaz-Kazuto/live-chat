import { ref } from "vue"
import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

let error = ref(null)

let sigIn=async(email,password)=>{
    try{
        let result = await signInWithEmailAndPassword(auth, email, password)
        if(!result){
          throw new Error("Wrong Username and Password")
        }
        return result;
       }catch(err){
          error.value=err.message
          console.log(error.value)
       }
       
}


let useLogin=()=>{

    return {error,sigIn}
}

export default useLogin
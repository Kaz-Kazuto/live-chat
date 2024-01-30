import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword, signWithEmailAndPassword, signOut } from 'firebase/auth'
import { ref } from "vue"

let error =ref("");

let createAccount=async(email,password,displayname)=>{
    try{
            const result = await createUserWithEmailAndPassword(auth, email,password)
            if(!result){
                throw new Error("Could not create User")
            }
            result.user.displayName=displayname
            return result
        }catch(err){
            error.value=err.message
            console.log(error.value)
        }
}

let UseSignup=()=>{
    return {error,createAccount}
}
export default UseSignup
import { auth } from "@/firebase/config";
import router from "@/router";
import { signOut } from "firebase/auth";
import { ref } from "vue";

let error = ref(null);

let logOut = async () => {
  try {
    await auth.signOut();

    router.push("/");
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

let Logout = () => {
  return { error, logOut };
};

export default Logout;

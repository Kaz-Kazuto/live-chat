<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
</template>

<script>
import GetUser from "@/composable/GetUser";
import Navbar from "../components/Navbar";

import { useRouter } from "vue-router";
export default {
  components: { Navbar },

  setup() {
    let { person } = GetUser();
    let router = useRouter();
    if (!person.value) {
      router.push("/");
    }
  },
};
</script>

<style></style>

<template>
  <div>
    <HeaderLayout />
    <AboutLayout />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "./components/HeaderLayout.vue";
import AboutLayout from "./components/AboutLayout.vue";
import FooterLayout from "./components/FooterLayout.vue";
export default {
  components: { HeaderLayout, AboutLayout, FooterLayout },
};
</script>
<style></style>

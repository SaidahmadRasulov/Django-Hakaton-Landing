<template>
  <header
    class="header_layer"
    :class="{
      'bg-custom_dark': system_color,
      'bg-custom_light': !system_color,
    }"
  >
    <div class="header_custom_bg md:!h-[110vh] !h-[500px]">
      <div class="container mx-auto">
        <div
          class="header_navbar px-4 flex items-center justify-between py-4 relative z-20"
        >
          <div class="navbar_logo">
            <img src="../assets/logo.png" alt="Logo" />
          </div>
          <div class="navbar_control text-white">
            <i
              @click="handleSwitch"
              :class="{
                'bx bx-sun': system_color,
                'bx bx-moon text-black': !system_color,
              }"
              class="text-2xl cursor-pointer"
            ></i>
          </div>
        </div>
        <div class="header_content relative">
          <div class="header_title text-center uppercase">
            <h1
              class="md:text-[200px] text-[75px] font-moonhouse"
              :class="{
                'text-dark_yellow': system_color,
                'text-light_indigo': !system_color,
              }"
            >
              <span> hack </span>
              <br />
              <span> athon </span>
            </h1>
            <p
              class="md:text-2xl text-sm mx-auto font-unbounded"
              :class="{ 'text-white': system_color }"
            >
              Django Academy tomonidan o'tkaziladigan qiziqarli xakatonda
              ishtirok eting! Ajoyib narsalar yarating va o'z mahoratingizni
              namoyish eting.
            </p>
            <button
              class="text-xl py-2 px-4 regist_btn"
              :class="{
                'bg_yellow_gradient text-white': system_color,
                'bg_indigo_gradient text-dark_yellow': !system_color,
              }"
            >
              Royxatdan Otish
            </button>
          </div>
          <div
            class="header_image absolute top-5 md:top-[1rem] left-1/2 -translate-x-1/2 w-1/2 md:w-1/3"
          >
            <img :src="headerImage" alt="" class="w-full" />
          </div>
        </div>
      </div>
    </div>
    <LineHeader />
  </header>
</template>

<script>
import headDark from "../assets/head_dark.png";
import headLight from "../assets/head_light.png";
import LineHeader from "./LineHeader.vue";
import Lines from "./Lines.vue";

export default {
  data() {
    return {
      system_color: false,
    };
  },
  methods: {
    handleSwitch() {
      this.system_color = !this.system_color;

      window.location.reload();
      localStorage.setItem("switch", JSON.stringify(this.system_color));
    },
  },
  computed: {
    headerImage() {
      return this.system_color ? headDark : headLight;
    },
  },
  mounted() {
    const storedItem = JSON.parse(localStorage.getItem("switch"));
    if (storedItem !== null) {
      this.system_color = storedItem;
    }
    if (this.system_color) {
      document.body.style.backgroundColor = "#0d0d0d";
    }
  },
  components: { Lines, LineHeader },
};
</script>

<style></style>

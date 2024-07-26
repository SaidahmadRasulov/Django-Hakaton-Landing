<template>
  <section
    class="about_section"
    :class="{
      'bg-custom_dark_image': this.system_color,
      'bg-custom_light_image': !this.system_color,
    }"
  >
    <div class="about_content_layer">
      <div class="container mx-auto">
        <div class="about_content_title text-center mx-auto uppercase pt-10">
          <h1
            class="font-moonhouse md:text-[6rem] text-[2rem] leading-[5rem] md:mb-[3rem]"
            :class="{
              'text-dark_yellow': this.system_color,
              'text-light_indigo': !this.system_color,
            }"
          >
            “hackathon” <br />
            haqida batafsil
          </h1>
          <p
            class="w-[80%] font-unbounded text-[14px] md:text-xl mx-auto"
            :class="{
              'text-white': this.system_color,
              'text-black': !this.system_color,
            }"
          >
            Ishtirokchilar 6 kishilik jamoalarga bo'linadi. Har bir jamoaga
            berilgan g'oyani amalga oshirish uchun 0 dan sayt yaratish
            topshirig'i beriladi. O'z mahoratingizni namoyish eting va jamoa
            bilan ishlang, eng yaxshi natijalarga erishish uchun!
          </p>
        </div>
        <div class="about_content_price my-[4rem] relative">
          <div
            class="md:relative md:hidden md:w-auto md:text-left mx-auto w-[300px] text-center block top-0 right-0"
          >
            <div
              class="about_price inline-block py-4 px-10 relative rotate-[5deg]"
              :class="{
                'bg-dark_yellow': !this.system_color,
                'bg-light_indigo': this.system_color,
              }"
            >
              <img
                src="../assets/skotch.png"
                alt=""
                class="absolute -top-8 -right-5"
              />
              <h1
                class="uppercase font-bruno md:text-xl text-sm"
                :class="{
                  'text-white': this.system_color,
                  'text-black': !this.system_color,
                }"
              >
                “hackathon” da pul <br />
                mukofotlari mavjud:
              </h1>
              <img
                src="../assets/ikkinchi_skotch.png"
                alt=""
                class="absolute -bottom-5 -left-5"
              />
            </div>
          </div>
          <ul class="prices_group md:flex gap-4 my-10 px-5">
            <li
              class="prices_item uppercase font-normal"
              :class="{
                'self-center md:my-[13rem] my-[4rem]': index == 1,
                'self-end': index == 2,
              }"
              v-for="(item, index) in prices"
            >
              <span
                class="block font-unbounded"
                :class="{
                  'text-white': this.system_color,
                  'text-black': !this.system_color,
                }"
                >{{ item.title }}</span
              >
              <span
                class="md:text-[6rem] text-[4rem] font-chopsic underline"
                :class="{
                  'text-dark_yellow': this.system_color,
                  'text-light_indigo': !this.system_color,
                }"
                >{{ item.val }}</span
              >
            </li>
          </ul>
          <div class="about_markup text-center">
            <div class="md:absolute md:block hidden top-0 right-0">
              <div
                class="about_price inline-block py-4 px-10 relative rotate-12"
                :class="{
                  'bg-dark_yellow': !this.system_color,
                  'bg-light_indigo': this.system_color,
                }"
              >
                <img
                  src="../assets/skotch.png"
                  alt=""
                  class="absolute -top-8 -right-5"
                />
                <h1
                  class="uppercase font-bruno text-xl"
                  :class="{
                    'text-white': this.system_color,
                    'text-black': !this.system_color,
                  }"
                >
                  “hackathon” da pul <br />
                  mukofotlari mavjud:
                </h1>
                <img
                  src="../assets/ikkinchi_skotch.png"
                  alt=""
                  class="absolute -bottom-5 -left-5"
                />
              </div>
            </div>
            <div
              class="about_data w-[300px] mx-auto md:mx-0 md:w-2/4 bottom-10 md:bottom-[10rem] relative -rotate-3"
            >
              <img :src="imageSrc" alt="About Price" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Lines />
  </section>
</template>
<script>
import Lines from "./Lines.vue";
import aboutPrice from "../assets/about_price.png";
import aboutPriceDark from "../assets/about_price_dark.png";

export default {
  data() {
    return {
      system_color: false,
      prices: [
        {
          title: "BIRINCHI O’RIN UCHUN MUKOFOT",
          val: "1.200.000",
        },
        {
          title: "ikkinchi o’rin uchun mukofot:",
          val: "1.000.000",
        },
        {
          title: "uchinchi o’rin uchun mukofot:",
          val: "800.000",
        },
      ],
    };
  },
  components: { Lines },
  computed: {
    arrowImage() {
      return this.system_color ? "../assets/white.png" : "../assets/black.png";
    },
    imageSrc() {
      return this.system_color ? aboutPrice : aboutPriceDark;
    },
  },
  mounted() {
    const storedItem = JSON.parse(localStorage.getItem("switch"));
    if (storedItem !== null) {
      this.system_color = storedItem;
    }
  },
};
</script>
<style scoped>
.about_section {
  padding: 8rem 0 0 0;
}
</style>

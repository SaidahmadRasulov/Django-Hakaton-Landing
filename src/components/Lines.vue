<template>
  <div class="lines relative bottom-10 flex items-center h-[6rem]">
    <div
      :class="{
        'bg-light_indigo': this.system_color,
        'bg-dark_yellow': !this.system_color,
      }"
      class="left_line overflow-hidden md:overflow-visible flex flex-nowrap justify-between absolute right-0 w-full -rotate-3 py-5"
    >
      <div
        class="line_title font-bold text-2xl uppercase"
        :class="{
          'text-white': this.system_color,
          'text-light_indigo': !this.system_color,
        }"
        v-for="item in words"
      >
        <h1>{{ item }}</h1>
      </div>
    </div>
    <div
      :class="{
        'bg-light_indigo': this.system_color,
        'bg-dark_yellow': !this.system_color,
      }"
      class="right_line absolute flex-nowrap overflow-hidden md:overflow-visible w-full top-4 flex justify-between rotate-2 py-5"
    >
      <div
        class="line_title font-bold text-2xl uppercase"
        :class="{
          'text-white': this.system_color,
          'text-light_indigo': !this.system_color,
        }"
        v-for="item in words"
      >
        <h1 class="block !w-full">{{ item }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      system_color: false,
      words: [
        "django academy",
        "hackathon",
        "django academy",
        "hackathon",
        "django academy",
        "hackathon",
        "django academy",
        "hackathon",
      ],
    };
  },
  mounted() {
    const storedItem = JSON.parse(localStorage.getItem("switch"));
    if (storedItem !== null) {
      this.system_color = storedItem;
    }
  },
};
</script>
<style lang=""></style>

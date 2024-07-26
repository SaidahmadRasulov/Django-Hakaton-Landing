<template>
  <div class="relative top-0">
    <div class="ticker-wrapper z-[2] rotate-[3deg]">
      <div
        class="ticker"
        :class="{
          bg_line_indigo_gradient: this.system_color,
          bg_line_yellow_gradient: !this.system_color,
        }"
      >
        <div class="text font-unbounded">
          <span v-for="item in words">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="ticker-wrapper z-[3] rotate-[-3deg]">
      <div
        class="ticker"
        :class="{
          bg_line_indigo_gradient: this.system_color,
          bg_line_yellow_gradient: !this.system_color,
        }"
      >
        <div class="text font-unbounded">
          <span v-for="item in words">{{ item }}</span>
        </div>
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
        "django academy",
        "hackathon",
        "django academy",
        "hackathon",
        "django academy",
        "hackathon",
        "django academy",
        "hackathon",
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
<style scoped>
.ticker-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.ticker {
  transform: rotate(-0.53deg);
  padding: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 5px 0 0 20px #0000001a;
  overflow-x: hidden;
}

.text {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 100%;
  background: linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  animation: ticker-animation 30s linear infinite;
}

@keyframes ticker-animation {
  0% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-25%);
  }
}

.ticker-wrapper .text span {
  margin: 0 17px;
}
</style>

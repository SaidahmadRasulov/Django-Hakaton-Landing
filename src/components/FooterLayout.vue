<template>
  <section
    class="footer_section py-6"
    :class="{
      'bg-custom_dark': system_color,
      'bg-custom_light': !system_color,
    }"
  >
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="footer_title w-full md:w-1/2 mb-6 md:mb-0">
          <h1
            class="text-4xl md:text-[6rem] leading-[6rem] font-moonhouse"
            :class="{
              'text-dark_yellow': system_color,
              'text-light_indigo': !system_color,
            }"
          >
            Ro'yxatdan o'tish
          </h1>
          <p
            class="w-full md:w-11/12 text-lg md:text-xl font-unbounded mt-4 md:mt-0"
            :class="{
              'text-white': system_color,
              'text-black': !system_color,
            }"
          >
            Quyidagi shaklni to'ldirib, xakatonga ro'yxatdan o'ting. Ushbu
            tadbirda sizni sabrsizlik bilan kutib qolamiz va bu unutilmas
            tajriba bo'lishiga aminmiz!
          </p>
        </div>
        <div class="footer_contact w-full md:w-1/3">
          <form @submit="handleSubmit" class="footer_form">
            <div class="mb-6">
              <label
                for="fullname"
                :class="{
                  'text-white': system_color,
                  'text-black': !system_color,
                }"
                class="text-sm block uppercase font-unbounded mb-2"
                >Ism</label
              >
              <input
                type="text"
                placeholder="ABDULLA"
                class="outline-none py-2 px-4 w-full border-2 rounded-lg bg-transparent"
                :class="{
                  'border-dark_yellow text-white': this.system_color,
                  'border-light_indigo text-black': !this.system_color,
                }"
                id="fullname"
                v-model="fullname"
              />
            </div>
            <div class="mb-6">
              <label
                for="number"
                :class="{
                  'text-white': system_color,
                  'text-black': !system_color,
                }"
                class="text-sm block uppercase font-unbounded mb-2"
                >Telefon raqam</label
              >
              <input
                type="text"
                placeholder="+998 99 990 90 09"
                class="py-2 outline-none px-4 w-full border-2 rounded-lg bg-transparent"
                :class="{
                  'border-dark_yellow text-white': this.system_color,
                  'border-light_indigo text-black': !this.system_color,
                }"
                id="number"
                v-model="phone_number"
              />
            </div>
            <div class="mb-6">
              <label
                for="course"
                :class="{
                  'text-white': system_color,
                  'text-black': !system_color,
                }"
                class="text-sm block uppercase font-unbounded mb-2"
                >Yo'nalish (Frontend yoki Backend yoki Dizayner)</label
              >
              <select
                @change="console.log(this.user_course)"
                class="outline-none py-2 px-4 w-full border-2 rounded-lg bg-transparent"
                :class="{
                  'border-dark_yellow text-white': this.system_color,
                  'border-light_indigo text-black': !this.system_color,
                }"
                v-model="user_course"
              >
                <option
                  :value="item.val"
                  :key="item.id"
                  v-for="item in this.courses"
                  class="text-black"
                >
                  {{ item.title }}
                </option>
              </select>
            </div>
            <div class="form_submit text-end">
              <button
                @click="handleSubmit"
                class="text-lg md:text-xl py-2 px-4 regist_btn w-full"
                :class="{
                  'bg_yellow_gradient text-white': system_color,
                  'bg_indigo_gradient text-dark_yellow': !system_color,
                }"
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: "https://sunnat.pythonanywhere.com/api/v1/contact/create/",
      fullname: "",
      phone_number: "",
      send_status: "",
      user_course: "",
      system_color: false,
      courses: [
        { id: 1, val: "Frontend", title: "Front-End" },
        { id: 2, val: "Backend", title: "Back-End" },
        { id: 3, val: "Designer", title: "Grafik Dizayner" },
      ],
    };
  },
  mounted() {
    const storedItem = JSON.parse(localStorage.getItem("switch"));
    if (storedItem !== null) {
      this.system_color = storedItem;
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      let new_user = {
        fullname: this.fullname,
        phone: this.phone_number,
        dev_type: this.user_course,
      };
      try {
        if (
          new_user.fullname !== "" &&
          new_user.dev_type !== "" &&
          new_user.phone !== ""
        ) {
          const response = await fetch(this.apiUrl, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(new_user),
          });
          const data = await response.json();
          this.send_status = data.status;
          alert(this.send_status);
        }
      } catch (error) {
        console.log("Hatolik: ", error);
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles or adjustments for responsiveness if needed */
</style>

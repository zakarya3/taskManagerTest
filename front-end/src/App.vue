<template>
  <div id="app">
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn-icons-png.flaticon.com/256/906/906334.png"
            class="h-8"
            alt=""
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Zakarya Task App</span
          >
        </a>
        <div
          class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
              alt="user photo"
            />

            <div v-if="isLoggedIn">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="logout"
              >
                logout
              </button>
            </div>
          </button>
        </div>
      </div>
    </nav>

    <main class="container mx-auto mt-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: !!localStorage.getItem("access_token"),
    };
  },
  methods: {
    // isLoggedIn() {
    //   return !!localStorage.getItem("access_token");
    // },
    logout() {
      console.log("hjkl");
      // Clear access token from local storage
      localStorage.removeItem("access_token");

      // Redirect to login page
      this.$router.push("/login");
      window.location.reload();
    },
  },
};
</script>

<style>
/* Global styles */
</style>

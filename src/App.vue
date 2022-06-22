<template>
  <nav>
    <template v-if="this.$store.state.currentUser">
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/login" v-on:click="this.logout()" replace>Log out</router-link>
    </template>
    <template v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>
    </template>
  </nav>
  <router-link to="/home">
    <img alt="logo-image" src="./assets/logo.png" class="rounded mb-3" />
  </router-link>
  <router-view />
  <footer class="page-footer font-small blue">
    <div class="footer-copyright text-center py-3">
      <p></p>
      <p></p>
      <router-link to="/about">About</router-link>
    </div>
  </footer>
</template>

<script>
import { getConfiguredWS } from "@/websocket";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
      this.$router.push("/logout");
    },
  },
  beforeMount() {
    this.$store.state.ws = getConfiguredWS(this.$store);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

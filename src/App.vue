<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><img :src="logoURL" style="height: 2rem" /> &nbsp;{{ name }}
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    name: "",
    logoURL: "",
  }),
  created() {
    fetch(
      "https://mocha-pos-default-rtdb.asia-southeast1.firebasedatabase.app/vendors.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.name = data["0123"].name;
        this.logoURL = data["0123"]["thumbnail-url"];
      });
  },
};
</script>
<template>
  <v-app id="inspire">
    <Header v-model="expandOnHover"></Header>
    <Sidebar :expand-on-hover.sync="expandOnHover"></Sidebar>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>


<script>
import Header from "./vuetify/header/Header";
import Sidebar from "./vuetify/sidebar/Sidebar";
import Footer from "./vuetify/footer/Footer";

export default {
  name: "Layout",

  components: {
    Header,
    Sidebar,
    Footer
  },

  props: {
    source: String
  },
  data: () => ({
    expandOnHover: false
  }),
  
};
</script>

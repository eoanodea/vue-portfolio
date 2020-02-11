/*
 * File: App.vue
 * Project: vue-portfolio
 * Version: 0.1.0
 * File Created: Tuesday, 11th February 2020 1:32:54 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Main Entrypoint for app
 * Last Modified: Tuesday, 11th February 2020 2:08:42 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */



<template>
  <div class="page-container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/layout/Header'
  import Footer from './components/layout/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

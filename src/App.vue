<template>
  <div id="app">
    <router-view/>
    <div id="totop">
      <a title="返回頂部"><img src="./assets/img/scrollup.png"/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'assets/lib/bootstrap/css/bootstrap.min.css';
@import 'assets/style.css';
</style>

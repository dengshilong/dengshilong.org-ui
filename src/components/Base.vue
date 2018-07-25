<template>
  <div>
    <!-- built files will be auto injected -->
    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
            <a class="blog-nav-item" href="/sitemap/">本站目录</a>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="blog-header">
        <h1 class="blog-title"><a href="/">邓世龙的自留地</a></h1>
        <p class="lead blog-description">兼济天下则达 独善其身则穷</p>
      </div>
      <header class="archive-header">
      </header>
      <div class="row">
        <div class="col-sm-8 blog-main">
          <router-view></router-view>
        </div><!-- /.blog-main -->
        <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
          <sidebar></sidebar>
        </div><!-- /.blog-sidebar -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
const axios = require('axios');
export default {
  components: {
    'sidebar': SideBar
  },
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

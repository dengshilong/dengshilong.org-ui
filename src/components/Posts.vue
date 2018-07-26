<template>
  <div>
    <div v-if="posts.length">
      <blog-post v-for="post in posts" :key="post.id" :post="post"></blog-post>
    </div>
    <div v-else><h2>No Posts</h2></div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost'
import SideBar from '@/components/SideBar'
const lodash = require('lodash')
const axios = require('axios');
export default {
  components: {
    'blog-post': BlogPost,
    'sidebar': SideBar
  },
  data () {
    return {
      posts: [],
      params: {},
    }
  },
  created() {
      this.fetchPost();
  },
  methods: {
    fetchPost() {
      let params = this.$route.params
      lodash.extend(params, this.$route.query)
      axios.get('http://127.0.0.1:7001/api/posts/', {params: params})
        .then(response => {
          this.posts = response.data.results
        })
        .catch(error => {
          if (err.response.status == 404) {

          }
          // handle error
          console.log(error);
        })
    },
    
  }
}
</script>

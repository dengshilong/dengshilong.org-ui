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
    extract_params(params) {
      if (params['category']) {
        this.params['category'] = params['category']
      }
      if (params['tag']) {
        this.params['tag'] = params['tag']
      }
    },
    fetchPost() {
      this.extract_params(this.$route.params)
      console.log(this.params)
      axios.get('http://127.0.0.1:7001/api/posts/', {params: this.params})
        .then(response => {
          console.log(response)
          console.log(this)
          this.posts = response.data.results
          console.log(this.posts)
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

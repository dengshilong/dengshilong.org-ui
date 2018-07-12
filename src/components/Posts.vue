<template>
  <div>
    <blog-post v-for="post in posts" :key="post.id" :post="post"></blog-post>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost'
const axios = require('axios');
export default {
  components: {
    BlogPost
  },
  data () {
    return {
      posts: [],
    }
  },
  created() {
      this.fetchPost();
  },
  methods: {
    fetchPost() {
      axios.get('http://127.0.0.1:7001/api/blog/posts/')
        .then(response => {
          console.log(response)
          console.log(this)
          this.posts = response.data.results
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
    }
  }
}
</script>

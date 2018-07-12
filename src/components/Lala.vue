<template>
  <div>
    <h3 v-for="post in posts" :key="post.id">{{post.title}}</h3>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data () {
    return {
      posts: ["sfdsdf"],
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

<template>
  <div>
    <div class="sidebar-module">
      <h4>链接</h4>
      <ol class="list-unstyled">
      <!-- {% for link in links %}
      <li><a href="{{link.url}}" title="{{link.description}}">{{link.name}}</a></li>
      {% endfor %} -->
      </ol>
    </div><!-- /.blog-sidebar -->
    <div class="sidebar-module">
      <h4>标签</h4>
      <div class="tagcloud">
      <!-- {% for tag in tags %} -->
      <!-- <a href="{% url 'blog.tag' tag.name %}">{{tag}}</a> -->
      <!-- {% endfor %} -->
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
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

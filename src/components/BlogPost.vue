<template>
  <div class="blog-post">
    <h2 class="blog-post-title"><a href="">{{ post.title }}</a></h2>
    <hr>
    <p>
     <vue-markdown :source="post.content"></vue-markdown>
    </p>
  </div>
</template>

<script type="text/javascript">
import VueMarkdown from 'vue-markdown'

export default{
  components: {
    VueMarkdown
  },
  props: {
    post: Object
  },
  data(){
    return {
    }
  },
  created(){
  },
  methods: {
  },
}
</script>
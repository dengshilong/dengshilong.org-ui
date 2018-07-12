<template>
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
  </div>
</template>

<script type="text/javascript">

export default{
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
<template>
  <div class="blog-post">
    <h2 class="blog-post-title"><a :href="get_post_url(post)">{{ post.title }}</a></h2>
      <p class="blog-post-meta">{{post.publish_time.split("T")[0]}} 
        <span v-if="post.category">
          category: <a v-for="category in post.category" :key="category.id" :href="'/category/' + category.name">{{category.name}} </a>
        </span>
        <span v-if="post.tag">
          tag: <a v-for="tag in post.tag" :key="tag" :href="'/tag/' + tag">{{tag}} </a>
        </span>
      </p>
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
    get_post_url(post) {
      let d = post.publish_time.split("T")[0]
      let [year, month, day] = d.split("-")
      let url = "/" + year + "/" + month + "/" + day + "/" + post.slug
      return url
    }
  },
}
</script>
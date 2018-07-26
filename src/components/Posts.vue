<template>
  <div>
    <div v-if="posts.length">
      <blog-post v-for="post in posts" :key="post.id" :post="post"></blog-post>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 5, 10, 20, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
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
      total: 0,
      currentPage: 1,
      pageSize: 10,
    }
  },
  created() {
      this.fetchPost();
  },
  methods: {
    fetchPost() {
      let params = this.$route.params
      lodash.extend(params, this.$route.query)
      if (this.$route.query['page']) {
        this.currentPage = this.$route.query['page']
        this.$route.query['page'] = null
      }
      params['page'] = this.currentPage
      params['page_size'] = this.pageSize
      axios.get('http://127.0.0.1:7001/api/posts/', {params: params})
        .then(response => {
          this.posts = response.data.results
          this.total = response.data.count
        })
        .catch(error => {
          if (err.response.status == 404) {

          }
          // handle error
          console.log(error);
        })
    },
    handleCurrentChange(page) {
      this.currentPage = page
      this.fetchPost()
    },
    handleSizeChange(size) {
      this.pageSize = size
      this.fetchPost()
    }
  },
}
</script>

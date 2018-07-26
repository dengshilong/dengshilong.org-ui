<template>
  <div>
    <div class="sidebar-module">
      <h4>链接</h4>
      <ol class="list-unstyled">
        <li v-for="link in links" :key="link.id"><a :href="link.url" :title="link.description">{{link.name}}</a></li>
      </ol>
    </div>
    <div class="sidebar-module">
      <h4>标签</h4>
      <div class="tagcloud">
        <a v-for="tag in tags" :key="tag.id" :href="'/tag/' + tag.name">{{tag.name}} </a>
      </div>
    </div>
    <div class="sidebar-module">
      <h4>分类</h4>
      <ol class="list-unstyled">
        <li v-for="category in categories" :key="category.id"><a :href="'/category/' + category.name">{{category.name}}</a></li>
      </ol>
    </div>
    <div class="sidebar-module">
      <h4>文章归档</h4>
      <ol class="list-unstyled">
        <li v-for="month in months" :key="month"><a :href="get_month_url(month)">{{get_month_desc(month)}}</a></li>
      </ol>
    </div>
    <div class="sidebar-module">
      <h4>其它</h4>
      <ol class="list-unstyled">
        <li><a href="https://github.com/dengshilong">GitHub</a></li>
      </ol>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data () {
    return {
      links: [],
      categories: [],
      tags: [],
      months: []
    }
  },
  created() {
      this.fetchLink()
      this.fetchCategory()
      this.fetchTag()
      this.fetchMonth()
  },
  methods: {
    fetchLink() {
      axios.get('http://127.0.0.1:7001/api/links/')
        .then(response => {
          this.links = response.data
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
    },
    fetchCategory() {
      axios.get('http://127.0.0.1:7001/api/categories/')
        .then(response => {
          this.categories = response.data
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
    },
    shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    },
    fetchTag() {
      axios.get('http://127.0.0.1:7001/api/tags/')
        .then(response => {
          let tags = response.data
          this.shuffleArray(tags)
          this.tags = tags.slice(0, 50)
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
    },
    fetchMonth() {
      axios.get('http://127.0.0.1:7001/api/months/')
        .then(response => {
          this.months = response.data
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
    },
    get_month_url(archive) {
      let d = archive.split("T")[0]
      let [year, month] = d.split("-")
      month = parseInt(month)
      return "/" + year + "/" + month + "/"
    },
    get_month_desc(archive) {
      let d = archive.split("T")[0]
      let [year, month] = d.split("-")
      month = parseInt(month)
      return year + "年" + month + "月"
    }
  }
}
</script>

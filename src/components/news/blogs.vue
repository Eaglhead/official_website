<template>
  <div class="blogs" v-cloak>
    <header>Blogs</header>
    <article>
      <div class="blogs-block" v-for="(item, index) in blogs_data" :key="index">
        <img :src="item.img" alt="image sources" />
        <div class="right">
          <div class="blogs-time">{{item.time}}</div>
          <div class="title">{{item.title}}</div>
          <div class="blogs-message">{{item.message}}</div>
        </div>
      </div>
    </article>
    <footer>
      <el-pagination
        :hide-on-single-page="true"
        layout="prev, pager, next"
        :page-size="3"
        :current-page.sync="now_page"
        :total="data_total"
        @current-change="change_page"
      ></el-pagination>
    </footer>
  </div>
</template>

<style scoped>
.blogs {
  box-sizing: border-box;
  width: 100%;
}
header {
  font-size: 1.125em;
  font-weight: 600;
  color: #000000;
  text-align: left;
}
article {
  width: 100%;
  margin-top: 3.125em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.blogs-block {
  box-sizing: border-box;
  width: 100%;
  max-height: 21.25em;
  text-align: left;
  background-color: #ffffff;
  box-shadow: 1px 1px 2px #000000;
  margin-bottom: 2em;
  display: flex;
}
img {
  max-width: 31.875em;
  max-height: 21em;
  height: 100%;
  width: 100%;
  margin: 1px 0 1px 1px;
}
.right {
  box-sizing: border-box;
  padding: 3.75em 8.125em 0 3.4375em;
}
.title,
.blogs-time {
  box-sizing: border-box;
}
.blogs-time {
  font-size: 1.125em;
  color: #029cf6;
  margin-bottom: 2.5em;
}
.title {
  font-size: 1.125em;
  margin-bottom: 1.875em;
  color: #333333;
}
.blogs-message {
  color: #838383;
}
</style>

<script>
export default {
  name: "blogs",
  props: {
    blogs_data: [Object, Array],
    data_total: Number,
    current_page: Number
  },
  data() {
    return {
      now_page: this.current_page
    };
  },
  created() {
    window.console.log("blogs:" + this.blogs_data);
    window.console.log("blogs:" + this.data_total);
    window.console.log("blogs:" + this.current_page);
  },
  methods: {
    change_page() {
      window.console.log("blogs:" + this.now_page);
      this.$emit("update:current_page", this.now_page);
      this.$emit("change-change", "blogs");
    }
  }
};
</script>

<template>
  <div class="news_view" v-cloak>
    <header>News</header>
    <article>
      <div class="news-block" v-for="(item, index) in news_data" :key="index">
        <img :src="item.img" alt="image sources" />
        <div class="title">{{item.title}}</div>
        <div class="news-time">{{item.time}}</div>
      </div>
    </article>
    <footer>
      <el-pagination
        :hide-on-single-page="true"
        layout="prev, pager, next"
        :page-size="6"
        :current-page.sync="now_page"
        :total="data_total"
        @current-change="change_page"
      ></el-pagination>
    </footer>
  </div>
</template>

<style scoped>
.news_view {
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
.news-block {
  box-sizing: border-box;
  max-width: 32%;
  max-height: 22em;
  text-align: left;
  background-color: #ffffff;
  box-shadow: 1px 1px 2px #000000;
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-bottom: 2em;
  display: flex;
  flex-flow: column;
}
img {
  max-width: 26.25em;
  max-height: 15em;
  height: 100%;
  width: 100%;
}
.title,
.news-time {
  box-sizing: border-box;
}
.title {
  font-size: 1.125em;
  padding: 0.58em 1em;
}
.news-time {
  color: #d1d1d1;
  padding: 0 1em;
  margin-bottom: 0.5em;
}
</style>

<script>
export default {
  name: "news_view",
  props: {
    news_data: [Object, Array],
    data_total: Number,
    current_page: Number
  },
  data() {
    return {
      now_page: this.current_page
    };
  },
  created() {
    window.console.log("news:" + this.news_data);
    window.console.log("news:" + this.data_total);
    window.console.log("news:" + this.current_page);
  },
  methods: {
    change_page() {
      window.console.log("news:" + this.now_page);
      this.$emit("update:current_page", this.now_page);
      this.$emit("change-change", "news");
    }
  }
};
</script>

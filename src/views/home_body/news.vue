<template>
  <div class="news" v-cloak>
    <news-view
      :current_page.sync="news_data.current_page"
      :data_total="news_data.data_total"
      :news_data="news_data.data"
      @change-change="change_page"
    />
    <hr>
    <blogs-view
      :current_page.sync="blogs_data.current_page"
      :data_total="blogs_data.data_total"
      :blogs_data="blogs_data.data"
      @change-change="change_page"
    />
    <br>
  </div>
</template>

<style scoped>
.news {
  box-sizing: border-box;
  padding: 1.25em 17.5em;
  width: 100%;
  background-color: #ffffff;
}
hr {
  border: 0;
  border-bottom: 1px solid #cdcdcd;
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>

<script>
import news_view from '../../components/news/news_view.vue'
import blogs_view from '../../components/news/blogs.vue'
export default {
  name: "news",
  data() {
    return {
      news_data: {
        current_page:1,
        data_total: 12,
        data: [
          {
            img: require('@/assets/images/news.jpg'),
            time: '2020.01.05',
            title: 'Neuvition & CES 2020',
          },
          {
            img: require('@/assets/images/news.jpg'),
            time: '2020.01.05',
            title: 'Neuvition & CES 2020',
          },
          {
            img: require('@/assets/images/news.jpg'),
            time: '2020.01.05',
            title: 'Neuvition & CES 2020',
          },
          {
            img: require('@/assets/images/news.jpg'),
            time: '2020.01.05',
            title: 'Neuvition & CES 2020',
          },
          {
            img: require('@/assets/images/news.jpg'),
            time: '2020.01.05',
            title: 'Neuvition & CES 2020',
          },
          {
            img: require('@/assets/images/news.jpg'),
            time: '2020.01.05',
            title: 'Neuvition & CES 2020',
          },
        ]
      },
      blogs_data: {
        current_page:1,
        data_total: 6,
        data: [
          {
            img: require('@/assets/images/blogs.jpg'),
            time: '2020.01.05',
            title: 'Titan M1 Test abcdefgh',
            message: `Neuvition Titan Solid State LiDAR is built for applications such as
              autonomous driving, robotics vision, surveillance, 3D mapping and
              other industrial and commercial scenarios.`
          },
          {
            img: require('@/assets/images/blogs.jpg'),
            time: '2020.01.05',
            title: 'Titan M1 Test abcdefgh',
            message: `Neuvition Titan Solid State LiDAR is built for applications such as
              autonomous driving, robotics vision, surveillance, 3D mapping and
              other industrial and commercial scenarios.`
          },
          {
            img: require('@/assets/images/blogs.jpg'),
            time: '2020.01.05',
            title: 'Titan M1 Test abcdefgh',
            message: `Neuvition Titan Solid State LiDAR is built for applications such as
              autonomous driving, robotics vision, surveillance, 3D mapping and
              other industrial and commercial scenarios.`
          },
        ]
      }
    };
  },
  components: {
    'news-view': news_view,
    'blogs-view': blogs_view,
  },
  created() {
    this.get_data();
  },
  methods: {
    get_data() {
      window.console.log(this.$route.params.id);
    },
    change_page(flag) {
      if(flag == 'news'){
        window.console.log('news:'+this.news_data.current_page);
      } else {
        window.console.log('blogs:'+this.blogs_data.current_page);
      }
    }
  }
};
</script>

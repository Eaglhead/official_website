<template>
  <div class="download" v-cloak>
    <header @click="jump_point">
      <span v-for="(item, index) in nav_title" :key="index">{{item}}</span>
    </header>
    <article>
      <section v-for="(item, index1) in download_data" :key="index1" :id="item.title">
        <div class="title">{{item.title}}</div>
        <ul>
          <li
            v-for="(list, index2) in item.message"
            :key="index2"
            :class="{'none-border-bottom': index2 == (item.page_data_total-1)}"
          >
            <span class="file-name">{{list.name}}</span>
            <span class="file-size">{{list.size}}</span>
            <i class="el-icon-download" @click="click_download(list.url)"></i>
          </li>
          <li v-if="item.data_total/4 >= 1" class="none-border-bottom">
            <el-pagination
              :hide-on-single-page="true"
              layout="prev, pager, next"
              :page-size="4"
              :current-page.sync="item.current_page"
              :total="item.data_total"
              @current-change="change_page(index1)"
            ></el-pagination>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<style scoped>
.download {
  box-sizing: border-box;
  padding: 1.25em 6em;
  width: 100%;
  background-color: #ffffff;
}
header {
  width: 60%;
  margin: 1.125em auto;
  display: flex;
  justify-content: space-around;
}
a {
  text-decoration: none;
}
header span {
  color: #00a7fd;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 1.125em;
}
article {
  width: 60%;
  margin: auto;
}
section {
  margin-bottom: 3em;
}
.title {
  text-align: left;
  color: #000000;
  font-weight: 600;
  text-transform: capitalize;
}
ul,
li {
  box-sizing: border-box;
}
ul {
  border: 0.0625em solid #ededed;
  padding: 0.625em 1.25em;
}
li {
  list-style: none;
  border-bottom: 0.0625em solid #ededed;
  display: flex;
  justify-content: space-around;
  padding: 1em 1em;
}
.none-border-bottom {
  border-bottom: 0;
}
.file-name {
  flex: 1 1 75%;
  text-align: left;
  color: #6c6c6c;
}
.file-size {
  flex: 1 1 20%;
  color: #dddddd;
}
i {
  cursor: pointer;
  color: #dddddd;
}
</style>

<script>
export default {
  name: "download",
  data() {
    return {
      nav_title: ["manuals", "datasheets", "software", "PCD&PCZ"],
      num: 0,
      download_data: [
        {
          title: "manueals",
          current_page:1,//当前页
          data_total: 5,//总数据
          page_data_total: 4,//当前页数据
          message: [
            {
              name: "Titan M1 Manuals ver20200101",
              size: "2M",
              url: "下载"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  created() {
    this.get_data();
  },
  methods: {
    get_data() {
      window.console.log(this.$route.params.id);
      this.download_data = [];
      for (let i = 0; i < this.nav_title.length; i++) {
        let random1 = Math.floor(Math.random() * 40) != 0 ? Math.floor(Math.random() * 40): Math.floor(Math.random() * 40)+1;
        let random2 = 0;
        if (random1 > 4) {
          random2 = 4;
        } else {
          random2 = random1;
        }
        this.download_data.push({
          title: this.nav_title[i],
          data_total: random1,
          page_data_total: random2,
          message: []
        });
        for(let j = 0 ; j < random2 ; j++) {
          this.download_data[i].message.push({
            name: "Titan M1 Manuals ver20200101",
            size: "2M",
            url: "下载"
          })
        }
      }
    },
    jump_point(e) {
      document.getElementById(e.target.textContent).scrollIntoView({
        behavior: "smooth",//过渡动画，smooth平滑，auto自动
        block: "center",//跳转显示的位置，start, center, end, or nearest. Defaults to start
        inline: "nearest"
      });
    },
    change_page(index1) {
      window.console.log('data-index:'+index1);
      this.download_data.forEach((item, index2) => {
        if (index1 === index2) {
          window.console.log("item.current_page:"+item.current_page);
          let count = item.data_total-(item.current_page * 4)+4;
          window.console.log('count:'+count);
          if(count >4) {
            item.page_data_total = 4;
          } else {
            item.page_data_total = count;
          }
          window.console.log('page_data_total:'+item.page_data_total);
          item.message = [];
          for(let j = 0 ; j < item.page_data_total ; j++) {
            item.message.push({
              name: "Titan M1 Manuals ver20200101",
              size: "2M",
              url: "下载"
            })
          }
        }
      });
    },
    click_download(url) {
      window.console.log(url);
    }
  }
};
</script>

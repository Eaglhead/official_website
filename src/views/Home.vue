<template>
  <div class="home" v-cloak>
    <header>
      <div class="header-select">
        <el-dropdown
          v-for="(item, index) in select_data"
          :key="index"
          @click.native="click"
          :show-timeout=150
        >
          <span class="el-dropdown-link">{{item.name}}</span>
          <el-dropdown-menu slot="dropdown" @click.native="click">
            <el-dropdown-item 
              v-for="(list, index) in item.dropdown_list"
              :key="index"
            >
              {{list}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="title">{{title}}</div>
    </header>
    <router-view class="view_body"></router-view>
    <footer>
      <div class="footer_header">
        <el-dropdown
          v-for="(item, index) in select_data"
          :key="index"
          @click.native="click"
          :show-timeout=150
        >
          <span class="el-dropdown-link">{{item.name}}</span>
          <el-dropdown-menu slot="dropdown" @click.native="click">
            <el-dropdown-item 
              v-for="(list, index) in item.dropdown_list"
              :key="index"
            >
              {{list}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        电话：1565798613546
        <br />邮箱：132465@333.com
        <br />
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
}
header {
  min-height: 15%;
  width: 100%;
}
header .header-select {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
header .title {
  display: inline-block;
  padding: 0.625em 1.25em;
  border-bottom: 0.125em solid #cccccc;
  margin-top: 3.125em;
  text-transform: capitalize;
  font-size: 1.125em;
}
.view_body {
  flex: 1;
  background-color: #eeeeee;
}
footer {
  min-height: 15%;
}
footer .footer_header {
  height: 1.5625em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  text-transform: capitalize;
}
.el-dropdown-menu {
  text-transform: capitalize;
}
.el-icon-arrow-down {
  font-size: 0.75em;
  text-transform: capitalize;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "啊啊", //用作点击其他导航时显示标题
      select_data: [
        {
          name: "home",
          dropdown_list: ["黄金糕", "狮子头", "螺蛳粉"]
        },
        {
          name: "products",
          dropdown_list: ["黄金糕", "狮子头", "螺蛳粉"]
        },
        {
          name: "news",
          dropdown_list: ["黄金糕", "狮子头", "螺蛳粉"]
        },
        {
          name: "download",
          dropdown_list: ["黄金糕", "狮子头", "螺蛳粉"]
        },
        {
          name: "about",
          dropdown_list: ["Company", "Partners", "Careers"]
        },
        {
          name: "contact",
          dropdown_list: ["company", "Partners", "Careers"]
        }
      ]
    };
  },
  mounted() {
    this.get_route_name();
  },
  methods: {
    get_route_name() {
      this.title = this.$route.name;
    },
    click(e) {
      window.console.log(e);
      this.title = e.target.textContent;
      window.console.log(this.title);
      if(this.title == 'home'){
        this.$router.push(
          {
            name: 'home_body',
          }
        ).catch(data => { window.console.log(data) });
      } else {
        this.$router.push(
          {
            name: this.title,
            params: {
              id: this.title
            }
          }
        );
      }
      
    }
  }
};
</script>

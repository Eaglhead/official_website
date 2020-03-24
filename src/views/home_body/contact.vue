<template>
  <div class="contact" v-cloak>
    <article>
      <section class="left">
        <h2>contact us</h2>
        <div class="address">
          <h4>address</h4>
          <address>5026 Royal Pines Way,Dublin,CA 94568,USA</address>
        </div>
        <div class="E-mail">
          <h4>E-mali</h4>
          <div>Info@neuvition.com(General Inquiries)</div>
          <div>Info@neuvition.com(General Inquiries)</div>
          <div>Info@neuvition.com(General Inquiries)</div>
        </div>
        <div class="phone">
          <h4>Tel:</h4>
          <div>+1 650 862 7596</div>
          <div>+1 650 862 7596</div>
        </div>
        <baidu-map
          class="map"
          :center="center"
          @ready="handler"
          @click="getClickInfo"
          :scroll-wheel-zoom="true"
          :double-click-zoom="false"
        ></baidu-map>
      </section>
      <section class="right">
        <h2>product pre-order</h2>
        <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
        <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
        <el-select class="input" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select class="input" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input
          class="textarea"
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <div class="button">
          <el-button type="primary" round>Submit</el-button>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.contact {
  width: 100%;
}
article {
  text-align: left;
  padding: 20px 150px;
}
.left,
.right {
  box-sizing: border-box;
  float: left;
  margin-bottom: auto;
}
.left {
  width: 40%;
  margin-left: 10%;
}
.right {
  width: 50%;
}
.h2 {
  text-transform: capitalize;
}
.title {
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
}
.map {
  height: 200px;
  width: 400px;
  border: 1px solid #000000;
  margin: 1.33em 0;
}
.input {
  box-sizing: border-box;
  width: 34%;
  margin-right: 3%;
  margin-bottom: 3%;
}
.textarea{
  width: 71%;
  margin-bottom: 3%;
}
.button{
  margin-bottom: auto;
}
</style>

<script>
export default {
  name: "contact",
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 12,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input:'',
        textarea:''
    };
  },
  created() {
    this.get_data();
  },
  methods: {
    get_data() {
      window.console.log(this.$route.params.id);
    },
    handler({ BMap, map }) {
      this.center.lng = 119.21647;
      this.center.lat = 26.044704;
      this.zoom = 18;
      var point = new BMap.Point(this.center.lng, this.center.lat);
      map.centerAndZoom(point, this.zoom);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, {
        strokeColor: "Black",
        strokeWeight: 2,
        strokeOpacity: 0.8,
        Color: "Black",
        fillColor: "#f03"
      });
      map.addOverlay(circle);
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }
  }
};
</script>

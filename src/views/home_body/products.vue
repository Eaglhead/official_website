<template>
  <div class="products" v-cloak>
    <aside>
      <ul>
        <li>Titan M1</li>
        <li>Titan M1 Mini</li>
        <li>Titan M1-Plus</li>
        <li>Titan M1-R</li>
      </ul>
    </aside>
    <article>
      <section class="product-img">
        <img src="../../assets/images/Titan.jpg" alt="product image" />
      </section>
      <section class="introduction">
        <h3>Titan M1 Mini Specifcations</h3>
        <span>Distance: Up to 200m, 1m Min</span>
        <span>Precision: +2cm Typical</span>
        <span>Angular Resolution: Up to 0.01°</span>
        <span>Resolution: Up to H1750 x V480</span>
        <span>Field of View: H45°，V25°</span>
        <span>Frame Rate: 1fps ~ 30fps</span>
        <span>Sampling Rate: 1,000,000 Points/s (Max)</span>
        <span>Laser Source: Wavelength 1550nm, Class 1 Eye- Safe</span>
      </section>
      <section class="image">
        <h3>Image</h3>
        <div class="show-img">
          <div class="img-block">
            <transition name="el-zoom-in-center">
              <div class="img-block" v-show="show2">
                <img
                  src="../../assets/images/Titan.jpg"
                  alt="product image"
                  class="transition-box"
                />
                <img
                  src="../../assets/images/Titan.jpg"
                  alt="product image"
                  class="transition-box"
                />
              </div>
            </transition>
          </div>
          <!-- <transition name="el-zoom-in-center">
            <img
              src="../../assets/images/Titan.jpg"
              alt="product image"
              v-show="show2"
              class="transition-box"
            />
          </transition> -->
          <i class="el-icon-arrow-right" @click="chang_card"></i>
        </div>
      </section>
      <section class="show-video">
        <h3>Video</h3>
        <video controls>
          <source src="../../assets/video/movie.mp4" type="video/mp4">
          您的浏览器不支持 HTML5 video 标签。
        </video>
      </section>
    </article>
  </div>
</template>

<style scoped>
.products {
  box-sizing: border-box;
  padding: 1.25em 20.5em;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  text-align: left;
}
article{
  margin-bottom: 4em;
}
ul {
  list-style: none;
  text-align: left;
  margin-right: 1em;
}
li {
  cursor: pointer;
  margin: 2em 0;
  background-color: #eeeeee;
  font-size: 1.5em;
}
li:hover {
  opacity: 0.4;
}
.product-img {
  border: 1px solid #cbcbcb;
}
.product-img img {
  width: 100%;
  height: 100%;
}
.introduction {
  display: flex;
  flex-flow: column;
  text-align: left;
}
.introduction span {
  color: #646464;
  padding: 0.25em 0;
}
.image {
  width: 100%;
}
.show-img {
  height: 23em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image .show-img .img-block{
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.image .show-img .img-block img {
  height: 20em;
  width: 20em;
  margin-right: 1em;
}
.image .show-img i {
  font-size: 2em;
  cursor: pointer;
}
video {
  height: 20em;
  width: 100%;
}
</style>

<script>
import "element-ui/lib/theme-chalk/base.css";
export default {
  name: "products",
  data() {
    return {
      show2: true
    };
  },
  created() {
    this.get_data();
  },
  methods: {
    get_data() {
      window.console.log(this.$route.params.id);
    },
    chang_card() {
      this.show2 = false;
      setTimeout(() => {
        this.show2 = true;
      }, 1000);
    }
  }
};
</script>

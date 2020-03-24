<template>
  <div class="home_body" v-cloak>
    {{time}}<br>
  </div>
</template>

<style scoped>
.home_body {
  width: 100%;
}
</style>

<script>
export default {
  name: "home_body",
  data() {
    return {
      time: ''
    }
  },
  created() {
    this.get_time();
  },
  methods:{
    get_time () {
      setInterval(()=>{
        let d = new Date();
        let month = (d.getMonth()+1) <10 ? ('0'+(d.getMonth()+1)):(d.getMonth()+1);
        let day = d.getDate() < 10 ? ('0'+d.getDate()) : d.getDate();
        let hour = d.getHours() < 10 ? ('0'+d.getHours()) : d.getHours();
        let minutes = d.getMinutes() < 10 ? ('0'+d.getMinutes()) : d.getMinutes();
        let secondes = d.getSeconds() < 10 ? ('0'+d.getSeconds()) : d.getSeconds();
        this.time = `${d.getFullYear()}-${month}-${day} ${hour}:${minutes}:${secondes}`;
      },1000);
    }
  }
};
</script>

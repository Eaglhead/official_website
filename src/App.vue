<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html,body,#app{
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  font-family: 'Times New Roman',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1em;
}
[v-cloak] {
  display: none;
}
</style>

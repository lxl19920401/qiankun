<!--app.vue-->
<template>
  <!--主应用的id和微应用不能一样-->
  <div id="main">
    <el-menu  mode="horizontal" :router="true">
      <el-menu-item index="/">主应用</el-menu-item>
      <el-menu-item index="/vueApp">vue应用</el-menu-item>
      <el-menu-item index="/jqApp">jq应用</el-menu-item>
    </el-menu>
    <router-view/>
    <div id="vueApp"></div>
    <div id="jqApp"></div>
  </div>
</template>

<style>

</style>

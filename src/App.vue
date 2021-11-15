<script setup lang="ts">
import { ref } from 'vue'
const data = ref([{
  label: '一级 1', level: 1,
  children: [{
    label: '二级 1-1', level: 2,
    children: [{
      label: '三级 1-1-1', level: 3,
    }]
  }]
}, {
  label: '一级 2', level: 1,
  open: true, // 新增
  children: [{
    label: '二级 2-1', level: 2,
    children: [{
      label: '三级 2-1-1', level: 3,
    }]
  }, {
    label: '二级 2-2', level: 2,
    children: [{
      label: '三级 2-2-1', level: 3,
    }]
  }]
}, {
  label: '一级 3', level: 1,
  open: true, // 新增
  children: [{
    label: '二级 3-1', level: 2,
    children: [{
      label: '三级 3-1-1', level: 3,
    }]
  }, {
    label: '二级 3-2', level: 2,
    open: true, // 新增
    children: [{
      label: '三级 3-2-1', level: 3,
    }]
  }]
}, {
  label: '一级 4', level: 1,
}])
</script>
<template>
  <Tree :data="data"></Tree>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

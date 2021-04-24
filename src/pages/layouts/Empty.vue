<script>
export default {
  name: 'layoutEmpty',
  metaInfo: {
    title: 'layoutEmpty'
  }
}
</script>
<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <router-view :key="$route.path" />
  </transition>
</template>

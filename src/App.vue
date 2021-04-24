<script>
export default {
  name: 'App',
}
</script>
<template>
  <router-view :key="$route.path" />
</template>
<script>
export default {
  name: "layoutIndex",
}
</script>
<template>
  <div class="page-wrapper">
    <router-view :key="$route.path" />
  </div>
</template>

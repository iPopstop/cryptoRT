<script>
export default {
  name: 'layoutError',
  metaInfo: {
    title: 'layoutError'
  }
}
</script>
<template>
  <div class="main-wrapper">
    <div class="page-wrapper full-page">
      <div class="page-content d-flex align-items-center justify-content-center">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view :key="$route.path" />
        </transition>
      </div>
    </div>
  </div>
</template>

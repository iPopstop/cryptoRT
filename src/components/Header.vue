<script>
export default {
  name: "AppHeader",
  data: () => ({
    mobile: false
  }),
  computed: {
    title() {
      return process.env.VUE_APP_TITLE
    }
  }
}
</script>
<template>
  <div class="topbar">
    <div class="brand">
      <a
        class="logo"
        href="/"
      >
        {{ title }}
      </a>
    </div>
  </div>
</template>

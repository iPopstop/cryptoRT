<script>
import _has from "lodash/has"

export default {
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    prop: {
      type: String,
      default: ""
    }
  },
  computed: {
    withErrors() {
      return this.form ? _has(this.form, "errors") : false
    },
    has() {
      return this.withErrors ? (_has(this.form.errors, `errors.${this.prop}`) || _has(this.form.errors.errors, this.prop)) : false
    },
    get() {
      if (this.withErrors) {
        const errs = this.form.errors
        const property = this.prop
        if (_has(errs, `errors.${this.prop}`) || _has(errs, property)) {
          // return this.errors[field][0];
          return process.env.VUE_APP_FORM_ERRORS_MULTIPLE ? errs.errors[property].join("<br>") : errs.errors[property][0]
        }
      }
      return ""
    }
  }
}
</script>
<template>
  <label
    v-if="has"
    :for="prop"
    class="error mt-2 text-danger"
    v-text="get"
  />
</template>
<style lang="scss" src="@/assets/styles/components/showError.scss"></style>

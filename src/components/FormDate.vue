<script>
import DatePicker from "vue2-datepicker"
import _find from "lodash/find"
import "vue2-datepicker/locale/ru"
import "vue2-datepicker/index.css"
import "moment"

export default {
  name: "FormDate",
  components: { DatePicker },
  props: {
    date: {
      type: [Array, String],
      default: () => ([])
    },
    type: {
      type: String,
      default: "date"
    },
    label: {
      type: String,
      default: ""
    },
    blocked: {
      type: String,
      default: ""
    },
    mb: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: ""
    },
    clearable: Boolean,
    highlighted: {
      type: Array,
      default: () => ([])
    },
    format: {
      type: String,
      default: ""
    },
    hideYear: Boolean,
    range: Boolean,
    showTimePanel: Boolean,
    shortcuts: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    lang: {
      formatLocale: {
        firstDayOfWeek: 1
      },
      monthBeforeYear: false
    }
  }),
  methods: {
    handleDisabled(date) {
      const today = new Date()
      switch (this.$props.blocked) {
      case "beforeToday":
        today.setHours(0, 0, 0, 0)
        return date < today
      case "afterToday":
        today.setHours(0, 0, 0, 0)
        return date > today
      case "beforeTodayAndWeek":
        today.setHours(0, 0, 0, 0)
        return date < today || date > new Date(today.getTime() + 7 * 24 * 3600 * 1000)
      case "afterAWeek":
        today.setHours(0, 0, 0, 0)
        return date < today || date > new Date(today.getTime() + 7 * 24 * 3600 * 1000)
      default:
        return ""
      }
    },
    getClasses(date) {
      return _find(this.highlighted, v => moment(v).isSame(date)) ? "text-success" : ""
    },
    updateDate(val) {
      this.$emit("update:date", val)
    },
    clearDate() {
      this.$emit("update:date", "")
    }
  }
}
</script>
<template>
  <div :class="[{ 'mb-0': !mb }, 'form-group', 'form-date', classes]">
    <label
      v-if="label !== 'no'"
      class="col-form-label"
    >{{ label || "Укажите дату" }}</label>
    <date-picker
      :clearable="clearable"
      :disabled-date="handleDisabled"
      :format="format || 'DD-MM-YYYY'"
      :get-classes="getClasses"
      :lang="lang"
      :range="range"
      :shortcuts="shortcuts"
      :type="type"
      :value="date"
      :value-type="format || 'DD-MM-YYYY'"
      @change="updateDate"
      @click="updateDate"
      @input="updateDate"
    />
  </div>
</template>
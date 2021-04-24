<script>
import pagination from "laravel-vue-pagination"
import { mapState } from "vuex"

export default {
  components: { pagination },
  props: {
    records: {
      type: Object,
      default: () => ({
        total: 0
      })
    },
    page: {
      type: Number,
      default: 1
    }
  },
  methods: {
    updateValue(e) {
      this.$emit("update:records", e.target.value)
    },
    getRecords(page) {
      this.$emit("update:page", page)
    }
  },
  computed: {
    ...mapState("config", [
      "auth"
    ])
  }
}
</script>
<template>
  <div class="row">
    <div class="col-md-8">
      <pagination
        :data="records"
        :limit="1"
        class="pagination-separated m-l-10"
        @pagination-change-page="getRecords"
      />
    </div>
    <div
      v-if="records.total"
      class="col-md-4"
    >
      <div class="pull-right m-r-10">
        <!--suppress HtmlFormInputWithoutLabel -->
        <select
          :value="15"
          class="form-control"
          name="page_length"
          @change="updateValue"
        >
          <option
            v-for="option in $cfg('pagination')"
            :key="option+8978"
            :value="option"
          >
            {{ option }} на стр.
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

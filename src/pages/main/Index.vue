<script>
import axios from "axios"

export default {
  name: "Main",
  metaInfo: {
    title: "Main"
  },
  data: () => ({
    info: {},
    connection: null,
    symbols: [],
    selected: []
  }),
  computed: {
    appURL() {
      return process.env.VUE_APP_URL
    }
  },
  methods: {
    start() {
      if (this.selected.length > 0) {
        this.selected.forEach(value => {
          this.connection.send(JSON.stringify({
            "method": "subscribeTicker",
            "params": {
              "symbol": value
            }
          }))
        })
      } else {
        this.symbols.forEach(value => {
          this.connection.send(JSON.stringify({
            "method": "subscribeTicker",
            "params": {
              "symbol": value
            }
          }))
        })
      }
    },
    stopAll() {
      this.symbols.forEach(value => {
        this.connection.send(JSON.stringify({
          "method": "unsubscribeTicker",
          "params": {
            "symbol": value
          }
        }))
      })
    },
    loadData(event) {
      let val = JSON.parse(event.data)
      if (Object.prototype.hasOwnProperty.call(val, "params")) {
        this.$set(this.info, val.params.symbol, val.params)
      }
    },
    loadSymbols() {
      axios.get(this.appURL + "/symbols.json").then(({ data }) => {
        this.symbols = data.symbols
      })
    }
  },
  created() {
    this.loadSymbols()
    this.connection = new WebSocket("wss://api.exchange.bitcoin.com/api/2/ws")
    this.connection.onmessage = (event) => {
      this.loadData(event)
    }
    this.connection.onopen = (event) => {
      console.log("Connected")
    }
  },
  watch: {
    selected: {
      handler() {
        this.stopAll()
        this.start()
      },
    }
  }
}
</script>
<template>
  <div class="container pt-3">
    <div class="d-flex flex-wrap align-items-center">
      <h3 class="mb-0">Криптовалюты</h3>
      <div class="btn btn-group ml-3">
        <button @click="start" class="btn btn-primary">Запустить</button>
        <button @click="stopAll" class="btn btn-danger">Остановить</button>
      </div>
    </div>
    <v-select :options="symbols" :multiple="true" :clearable="true" v-model="selected" />
    <div class="table-responsive my-2">
      <table class="table">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>ASK</th>
            <th>BID</th>
            <th>LAST</th>
            <th>OPEN</th>
            <th>HIGH</th>
            <th>LOW</th>
            <th>VOLUME</th>
            <th>VOLUME QUOTE</th>
            <th>Обновление</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="Object.keys(info).length > 0">
            <tr :key="row.symbol" v-for="row in info">
              <td>{{ row.symbol }}</td>
              <td>{{ row.ask }}</td>
              <td>{{ row.bid }}</td>
              <td>{{ row.last }}</td>
              <td>{{ row.open }}</td>
              <td>{{ row.high }}</td>
              <td>{{ row.low }}</td>
              <td>{{ row.volume }}</td>
              <td>{{ row.volumeQuote }}</td>
              <td>{{ row.timestamp }}</td>
            </tr>
          </template>
          <template v-else>
              <tr>
                <td colspan="10" class="text-center">Валюты не выбраны. <span class="text-primary cursor-pointer" @click="selected = symbols">Выбрать все</span></td>
              </tr>
          </template>
        </tbody>
      </table>
    </div>
    <p>Информация с сайта: <a href="https://exchange.bitcoin.com/" target="_blank" rel="noopener">https://exchange.bitcoin.com/</a></p>
  </div>
</template>
<style src="@/assets/styles/pages/main/index.scss" lang="scss"></style>

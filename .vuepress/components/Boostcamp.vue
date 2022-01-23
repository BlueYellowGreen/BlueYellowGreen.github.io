<template>
  <div>

    <br>

    <table>
      <thead>
        <tr><td>Date</td><td>Tags</td></tr>
      </thead>
      <tbody>
        <tr
          v-for="(day, idx) in til"
          :key="idx+'summary'"
          @click="go(day[0])">
          <td>{{ day[0] }}</td>
          <td>
            <span
              v-for="(tag, i) in day[1]"
              :key="day[0]+i+'tag'">
              {{ tag }}&nbsp; &nbsp;
            </span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      til: [
        [ "0121", [] ],
        [ "0120", ["vector", "norm", "matrix", "gradient_descent", "SGD"] ],
        [ "0119", ["numpy", "empty", "pandas", "groupby"] ],
        [ "0118", ["python", "tuple", "dictionary", "%timeit", "reduce", "generator", "decorator", "pathlib", "pickle", "argparser"] ],
        [ "0117", ["python", "call_by_object_reference", "object_memory"] ],
      ]
    }
  },
  methods: {
    go(day) {
      this.$router.push(`/AI/Boostcamp-AI-Tech/${day}.html`)
    }
  }
}
</script>

<style scoped>
table { display: table; width: 100%; }
thead tr { background-color: #3eaf7c; font-weight: bold; text-align: center; }
tbody tr { background-color: #f0f0f0; }
tbody tr td:first-child { text-align: center; }
tr { border: 0; }
td { border: 0; }
tbody tr:hover { 
  cursor: pointer;
  background-color: rgba(62, 175, 124, .4);
  transition-duration: .25s;
}
</style>
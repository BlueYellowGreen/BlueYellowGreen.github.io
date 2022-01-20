<template>
  <div>
    <p>2022/01/17 ~ 01/21</p>
    <hr>
    <span
      class="badge"
      v-for="(day, idx) in firstWeek" :key="idx+'first'"
      @click="go(day)"
    >
      {{ day }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstWeek: ["0117", "0118", "0119", "0120"]
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
hr { margin-bottom: 20px; }

.badge {
  text-decoration: none !important;
  border: none;
  border-radius: 5px;
  background-color: #3eaf7c;
  color: white;
  padding: 2px 10px 4px;
  margin: 0 7px 0 0;
}
.badge:hover {
  cursor: pointer;
  box-shadow: 0 0 3px 2px rgba(62, 175, 124, .25);
  transition-duration: .2s;
}
</style>
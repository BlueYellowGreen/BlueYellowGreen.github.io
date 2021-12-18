<template>
  <div class="mt-4">

		<!-- Header - Breadcrumb -->
    <div class="d-flex justify-content-end">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
						<router-link to="/"
							class="text-decoration-none custom-breadcrumb-color"
						>
							Main
						</router-link>
					</li>
          <li class="breadcrumb-item custom-breadcrumb-color">CS</li>
          <li class="breadcrumb-item current ">알고리즘</li>
        </ol>
      </nav>
    </div>

    <!-- Body -->
    <div class="mt-3 container">
      <h4>알고리즘</h4>

      <div class="mt-5 row">
        <!-- DFS -->
        <div class="col-md-2 col-6">
          <div class="small-box">
            <svg class="mb-1" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="15" height="15" fill="#20C997"/>
              <rect x="16" width="15" height="15" fill="#DCD9D8"/>
              <rect x="32" width="15" height="15" fill="#DCD9D8"/>
              <rect x="48" width="15" height="15" fill="#DCD9D8"/>
              <rect y="32" width="15" height="15" fill="#DCD9D8"/>
              <rect x="16" y="32" width="15" height="15" fill="#20C997"/>
              <rect x="32" y="32" width="15" height="15" fill="#DCD9D8"/>
              <rect x="48" y="32" width="15" height="15" fill="#DCD9D8"/>
              <rect y="48" width="15" height="15" fill="#DCD9D8"/>
              <rect x="16" y="48" width="15" height="15" fill="#20C997"/>
              <rect x="32" y="48" width="15" height="15" fill="#20C997"/>
              <rect x="48" y="48" width="15" height="15" fill="#20C997"/>
              <rect y="16" width="15" height="15" fill="#20C997"/>
              <rect x="16" y="16" width="15" height="15" fill="#20C997"/>
              <rect x="32" y="16" width="15" height="15" fill="#DCD9D8"/>
              <rect x="48" y="16" width="15" height="15" fill="#DCD9D8"/>
            </svg>
            <p class="pb-1">DFS</p>
          </div>
        </div>

        <!-- BFS -->
        <div class="col-md-2 col-6">
          <div class="small-box">
            <svg class="mb-1" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="15" height="15" fill="#20C997"/>
              <rect x="16" width="15" height="15" fill="#188A68"/>
              <rect x="32" width="15" height="15" fill="#20C997"/>
              <rect x="48" width="15" height="15" fill="#DCD9D8"/>
              <rect y="32" width="15" height="15" fill="#20C997"/>
              <rect x="16" y="32" width="15" height="15" fill="#188A68"/>
              <rect x="32" y="32" width="15" height="15" fill="#20C997"/>
              <rect x="48" y="32" width="15" height="15" fill="#DCD9D8"/>
              <rect y="48" width="15" height="15" fill="#DCD9D8"/>
              <rect x="16" y="48" width="15" height="15" fill="#20C997"/>
              <rect x="32" y="48" width="15" height="15" fill="#DCD9D8"/>
              <rect x="48" y="48" width="15" height="15" fill="#DCD9D8"/>
              <rect y="16" width="15" height="15" fill="#188A68"/>
              <rect x="16" y="16" width="15" height="15" fill="#13654D"/>
              <rect x="32" y="16" width="15" height="15" fill="#188A68"/>
              <rect x="48" y="16" width="15" height="15" fill="#20C997"/>
            </svg>
            <p class="pb-1">BFS</p>
          </div>
        </div>
      </div>

      <!-- APS List --> 
      <h4 class="mt-5 col-12">APS</h4>
      <table class="mt-4">
        <tbody>
          <tr class="table-title">
            <td class="table-a">태그</td>
            <td class="table-b">난이도</td>
            <td class="table-c">내용</td>
          </tr>
          <tr v-for="(item, idx) in aps" :key="idx">
            <td v-for="(val, i) in item.tag" :key="i">
              <span>{{ val }}</span>
            </td>
            <td>{{ item.hardness }}</td>
            <td style="text-align: start; padding-left: 20px;">{{ item.description }}</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
	name: 'Algo',
  setup() {
    useMeta({
      title: 'Algorithm',
      description: 'Algorithm and Code Examples',
      base: { href: '/algo/' },
      og: {
        title: "Algorithm | Dooho's Blog",
        description: 'Algorithm and Code Examples',
        image: [
          'https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/public/images/DFS_PNG.png',
        ],
        url: 'https://leedooho.com/algo/'
      },
      twitter: {
        title: "Algorithm | Dooho's Blog"
      },
    })

    const aps = [
      { tag: ['문자열',], hardness: '⭐', description: '공통 단어 찾기' },
    ]
    return {
      aps,
    }
  }
}
</script>

<style scoped>
.custom-breadcrumb-color { color: #6C757D; }
.current                 { color: #20C997; }

a:hover {	color: #20C997; }

.small-box {
  padding-top: 10%;
  box-sizing: border-box;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, .25);
  border-radius: 5px;
  background-color: #F8F9FA;
  text-align: center;
}
.small-box:hover {
  transform: scale(110%);
  transition-duration: .3s;
  transition-timing-function: ease-out;
  cursor: pointer;
}

table { border-radius: 5px; background-color: #F8F9FA; width: 100%; text-align: center; }
td    { padding-top: 3px; padding-bottom: 3px; }

.table-title { font-weight: bold; background-color: #bec3c5; }
.table-a     { width: 15%; border-top-left-radius: 5px 5px; }
.table-b     { width: 15%; }
.table-c     { border-top-right-radius: 5px 5px; }
</style>
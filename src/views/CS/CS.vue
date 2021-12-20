<template>
  <div class="mt-4">

		<!-- Header - Breadcrumb -->
    <div class="container p-0">
			<div class="row">
				<div class="col-md-4 col-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<router-link to="/"	class="text-decoration-none custom-breadcrumb-color">
									Main
								</router-link>
							</li>
							<li class="breadcrumb-item custom-breadcrumb-color current">CS</li>
						</ol>
					</nav>
				</div>
				<div class="offset-md-2 col-md-6 col-12 d-flex justify-content-end p-0">
					<span>
						<router-link to="/cs/algo" class="me-3 text-decoration-none text-dark head-link">
							<i class="bi bi-file-earmark me-1" />
						<span>알고리즘</span>
						</router-link>
					</span>
				</div>
			</div>
    </div>

    <!-- Body -->
    <div class="mt-3 container p-0">
			<h4>CS 학습 기록 공간</h4>

			<hr>

			<ul>
				<li>
					<router-link to="/cs/algo" class="algo-link">
						알고리즘
					</router-link>
					<ul>
						<li class="mt-2 aps algo-description">APS</li>
						<li class="mt-2 dfs algo-description">DFS</li>
						<li class="mt-2 bfs algo-description">BFS</li>
					</ul>
				</li>
			</ul>
    </div>
  
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
name: 'CS',
  setup() {
    useMeta({
      title: 'CS',
      description: 'Computer Science',
      base: { href: '/cs/' },
      og: {
        title: "CS | Dooho's Blog",
        description: 'Computer Science',
        image: [
          '',
        ],
        url: 'https://leedooho.com/cs/'
      },
      twitter: {
        title: "CS | Dooho's Blog"
      },
    })
  }
}
</script>

<style scoped>
.custom-breadcrumb-color { color: #6C757D; }
.current                 { color: #20C997; }

a:hover {	color: #20C997; }

.head-link:hover i, .head-link:hover span { color: #20C997; transition-duration: .2s; }

.algo-link { text-decoration: none; color: #20C997; }

.algo-description:hover::after { opacity: 1; transition-duration: .3s; }
.aps::after { content: 'Algorithm Problem Solving';  position: absolute; opacity: 0; margin-left: 10px;}
.dfs::after { content: '깊이우선탐색; Depth First Search'; position: absolute; opacity: 0; margin-left: 10px;}
.bfs::after { content: '너비우선탐색; Breadth First Search'; position: absolute; opacity: 0; margin-left: 10px;}
</style>
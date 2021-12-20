<template>
  <div class="mt-4">

		<!-- Header - Breadcrumb -->
    <div class="d-flex justify-content-between">
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
			<span>
        <router-link to="/cs/algo" class="me-3 text-decoration-none text-dark head-link">
					<i class="bi bi-file-earmark me-1" />
         <span>알고리즘</span>
        </router-link>
      </span>
    </div>

    <!-- Body -->
    <div class="mt-3 container">
			<!-- {{ mdFile }} -->
    </div>
  
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
// import md from './test.md'

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

		// const mdFile = md
    // return {
		// 	mdFile
    // }
  }
}
</script>

<style scoped>
.custom-breadcrumb-color { color: #6C757D; }
.current                 { color: #20C997; }

a:hover {	color: #20C997; }

.head-link:hover i, .head-link:hover span { color: #20C997; transition-duration: .2s; }
</style>
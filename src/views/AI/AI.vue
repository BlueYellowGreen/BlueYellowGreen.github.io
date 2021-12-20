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
          <li class="breadcrumb-item custom-breadcrumb-color current">AI</li>
        </ol>
      </nav>
			<span>
        <router-link to="/ai/common" class="me-3 text-decoration-none text-dark head-link">
					<i class="bi bi-file-earmark me-1" />
         <span>공통</span>
        </router-link>
      </span>
    </div>

    <!-- Body -->
    <div class="mt-3 container">
    </div>
  
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
name: 'AI',
  setup() {
    useMeta({
      title: 'AI',
      description: 'AI Note',
      base: { href: '/ai/' },
      og: {
        title: "AI | Dooho's Blog",
        description: 'AI Note',
        image: [
          '',
        ],
        url: 'https://leedooho.com/ai/'
      },
      twitter: {
        title: "AI | Dooho's Blog"
      },
    })

    return {
    }
  }
}
</script>

<style>
.custom-breadcrumb-color { color: #6C757D; }
.current                 { color: #20C997; }

a:hover {	color: #20C997; }

.head-link:hover i, .head-link:hover span { color: #20C997; transition-duration: .2s; }
</style>
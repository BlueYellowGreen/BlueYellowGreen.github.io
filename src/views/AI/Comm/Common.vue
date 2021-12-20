<template>
  <div class="mt-4">

		<!-- Header - Breadcrumb -->
    <div class="d-flex justify-content-start">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
						<router-link to="/"	class="text-decoration-none custom-breadcrumb-color">
							Main
						</router-link>
					</li>
          <li class="breadcrumb-item">
            <router-link to="/ai" class="text-decoration-none custom-breadcrumb-color">
              AI
            </router-link>
          </li>
          <li class="breadcrumb-item current ">공통</li>
        </ol>
      </nav>
    </div>

    <!-- Body -->
    <div class="mt-3 container">
    </div>
  
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
name: 'Common',
  setup() {
    useMeta({
      title: 'Common AI',
      description: 'Common things of AI',
      base: { href: '/common/' },
      og: {
        title: "Common | Dooho's Blog",
        description: 'Common things of AI',
        image: [
          '',
        ],
        url: 'https://leedooho.com/common/'
      },
      twitter: {
        title: "Common AI | Dooho's Blog"
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
</style>
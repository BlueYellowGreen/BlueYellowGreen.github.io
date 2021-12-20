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
              <li class="breadcrumb-item custom-breadcrumb-color current">BlockChain</li>
            </ol>
          </nav>
        </div>
        <div class="offset-md-2 col-md-6 col-12 d-flex justify-content-end p-0">

        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="mt-3 container p-0">
    </div>
  
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
name: 'BlockChain',
  setup() {
    useMeta({
      title: 'BlockChain',
      description: 'BlockChain Note',
      base: { href: '/blockchain/' },
      og: {
        title: "BlockChain | Dooho's Blog",
        description: 'BlockChain Note',
        image: [
          '',
        ],
        url: 'https://leedooho.com/blockchain/'
      },
      twitter: {
        title: "BlockChain | Dooho's Blog"
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
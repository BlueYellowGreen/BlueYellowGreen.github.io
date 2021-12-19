<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Dooho's Blog` : `Dooho's Blog` }}</template>
  </metainfo>
  <SideNavBar />

  <div id="APP" class="container">
    <div class="row">

      <div class="offset-2 col-8">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/SideNavBar.vue'

import { useMeta } from 'vue-meta'

export default {
  components: {
    SideNavBar
  },
  setup() {
    useMeta({
      // title === '' in App.vue -> override at components
      // override bellow
      title: '',
      description: 'CS, AI, BlockChain 등 학습 내용을 기록한 블로그입니다.',
      base: { href: '/' },
      og: {
        title: "Dooho's Blog",
        description: 'CS, AI, BlockChain 등 학습 내용을 기록한 블로그입니다.',
        image: [
          'https://avatars.githubusercontent.com/u/41604595?v=4',
        ],
        url: 'https://leedooho.com/'
      },
      twitter: {
        title: "Dooho's Blog"
      },

      // don't need to override this
      htmlAttrs: { lang: 'ko', amp: true }
    })
  }
}
</script>

<style>
@font-face {
  font-family: 'S-CoreDream-3Light';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: S-CoreDream-3Light;
}

::selection { background-color: #20c9968f; }

/* 스크롤이 움직이는 범위 */
::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	background-color: #F8F9FA;
}
/* 전체 스크롤 */
::-webkit-scrollbar {
	width: 5px;
	/* background-color: #F5F5F5; */
}
/* 스크롤 바 */
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #47f1be;
}
</style>

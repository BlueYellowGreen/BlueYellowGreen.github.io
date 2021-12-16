<template>
	<div>

		<!-- Side Bar 활성화 버튼 -->
		<a
			class="mt-2 ms-3 text-dark"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasScrolling"
			aria-controls="offcanvasScrolling"
		>
			<!-- <i class="bi-chevron-double-right" style="font-size: 2rem;"/> -->
			<i class="bi-justify" style="font-size: 2rem;"/>
		</a>

		<!-- Side Bar -->
		<div
			class="offcanvas offcanvas-start show"
			data-bs-scroll="true"
			data-bs-backdrop="false"
			tabindex="-1"
			id="offcanvasScrolling"
			aria-labelledby="offcanvasScrollingLabel"
		>
			<!-- Header Title -->
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasScrollingLabel">Dooho's Blog</h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>

			<!-- Body -->
			<div class="offcanvas-body">
				<div class="d-flex justify-content-center mt-4">
					<img src="https://avatars.githubusercontent.com/u/41604595?v=4" alt="profile">
				</div>

				<!-- 인사말 -->
				<div class="ms-3 me-3 mt-5">
					<p class="mb-1 ms-3">안녕하세요,</p>
					<p class="mb-1 ms-3">인공지능과 블록체인에</p>
					<p class="ms-3">관심있는 개발자입니다. 😀</p>
				</div>

				<!-- Folder -->
				<div class="mt-5 ms-3 me-3">
					<Hierarchy />	
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import Hierarchy from '@/components/Hierarchy.vue'

export default {
	components: {
		Hierarchy
	}
}
</script>

<style scoped>
a         {	position: fixed; }
a:hover   { transform: scale(1.1, 1.1); transition-duration: .2s; }
a:hover i {	color: #20C997; transition-duration: .2s; }

#offcanvasScrolling {
	width: 18rem;
	box-sizing: border-box;
	box-shadow: 0 0 3px 1px rgba(0, 0, 0, .25);
	transition-timing-function: ease-out;
}

img { width: 12rem;	border-radius: 50%; }
</style>
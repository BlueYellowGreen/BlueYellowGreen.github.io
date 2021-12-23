<template>
  <div id="global-layout">
		<component :is="$page.path ? 'Layout' : 'NotFound'" />

		<Comment />

		<br>

		<br>

		<footer class="siteFooter">
			<p>&copy; 2021 이두호. ALL RIGHTS RESERVED.</p>
			<p>
				<span>dhdev5ba@gmail.com</span>
				<span>&nbsp;</span>
				<a target="_blank" href="https://github.com/BlueYellowGreen/">GITHUB</a>
				<span>&nbsp;</span>
				<a target="_blank" href="https://www.linkedin.com/in/dooho-lee-56b295219/">LINKEDIN</a>
			</p>
		</footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
  height: 5px;
	/* background-color: #F5F5F5; */
}
/* 스크롤 바 */
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #47f1be;
}
</style>
<template>
  <div id="global-layout">
		<component :is="$page.path ? 'Layout' : 'NotFound'" />
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

</style>
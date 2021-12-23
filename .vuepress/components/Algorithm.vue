<template>
	<div>
		<div class="container">
			<div @click="go('DFS')" class="col algo-box">
				<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="23.365" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="46.7302" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="70.0952" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect y="46.7302" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="23.365" y="46.7302" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="46.7302" y="46.7302" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="70.0952" y="46.7302" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect y="70.0952" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="23.365" y="70.0952" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="46.7302" y="70.0952" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="70.0952" y="70.0952" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect y="23.3651" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="23.365" y="23.3651" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="46.7302" y="23.3651" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="70.0952" y="23.3651" width="21.9048" height="21.9048" fill="#DCD9D8"/>
				</svg>
				<p>DFS</p>
			</div>
			<div @click="go('BFS')" class="col algo-box">
				<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="23.365" width="21.9048" height="21.9048" fill="#188A68"/>
					<rect x="46.7302" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="70.0952" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect y="46.7302" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="23.365" y="46.7302" width="21.9048" height="21.9048" fill="#188A68"/>
					<rect x="46.7302" y="46.7302" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="70.0952" y="46.7302" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect y="70.0952" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="23.365" y="70.0952" width="21.9048" height="21.9048" fill="#20C997"/>
					<rect x="46.7302" y="70.0952" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect x="70.0952" y="70.0952" width="21.9048" height="21.9048" fill="#DCD9D8"/>
					<rect y="23.3651" width="21.9048" height="21.9048" fill="#188A68"/>
					<rect x="23.365" y="23.3651" width="21.9048" height="21.9048" fill="#13654D"/>
					<rect x="46.7302" y="23.3651" width="21.9048" height="21.9048" fill="#188A68"/>
					<rect x="70.0952" y="23.3651" width="21.9048" height="21.9048" fill="#20C997"/>
				</svg>
				<p>BFS</p>
			</div>
			<div class="col algo-box">&nbsp;</div>
			<div class="col algo-box">&nbsp;</div>
		</div>

		<div class="container">
			<!-- <div class="col algo-box">&nbsp;</div>
			<div class="col algo-box">&nbsp;</div>
			<div class="col algo-box">&nbsp;</div>
			<div class="col algo-box">&nbsp;</div> -->
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		go(path) {
			this.$router.push(`/CS/Algorithm/${path}.html`)
		}
	}
}
</script>

<style coped>
.container { display: flex; justify-content: space-between; margin-bottom: 40px;}
.col { width: 20%; }
@media all and (max-width: 600px) {
	.container { display: block; }
	.col { position: relative; width: 45%; left: 27.5%; margin-bottom: 20px;}
}

.algo-box {
	background-color: #f8f9fa;
	box-sizing: border-box;
	box-shadow: 0 0 3px 1px rgba(0, 0, 0, .25);
	border-radius: 5px;
	text-align: center;
	padding: 20px 0 10px 0;
}
.algo-box > p { margin: 5px 0 0 0; }
.algo-box:hover {
	transform: scale(105%);
	transition-duration: .3s;
}
</style>
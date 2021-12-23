<template>
	<div>
		<div v-for="(algo, i) in algos" :key="algo.title+'-'+i">
			<h3>{{ algo.title }}</h3>
			<hr>
			<div>
				<span
					v-for="(item, j) in algo.items" :key="algo.title+'-'+i+'-'+j"
					:class="['badge', algo.color, { 'badge-hover': hovered }]"
					@mouseover="hovered = true"
					@mouseleave="hovered = false"
				>
					{{ item.hardness }} &nbsp; {{ item.description }}
				</span>
			</div>

			<br>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			algos: [
				{
					title: '구현 (Implementation)',	color: 'badge-a',
					items: [
						{hardness: '⭐', description: '공통 단어 찾기'},
						{hardness: '⭐⭐', description: '미로 찾기' },
					]
				},
				{
					title: '동적 프로그래밍 (Dynamic Programming)', color: 'badge-b',
					items: [
						{hardness: '⭐', description: '공통 단어 찾기'},
						{hardness: '⭐⭐', description: '미로 찾기' },
					]
				}
			],
			hovered: false,
		}
	}
}
</script>

<style scoped>
h3 { margin-top: 50px; }
hr { margin-bottom: 20px; }

.badge {
	box-sizing: border-box;
	box-shadow: 0 0 3px 1px rgba(0, 0, 0, .25);
	border-radius: 5px;
	color: white;
	padding: 2px 4px;
	margin-right: 10px;
	margin-bottom: 10px;
	text-align: center;
	font-size: 13px;
}
.badge-hover {
	background-color: black;
	transition-duration: .3s;
	cursor: pointer;
}

.badge-a { background-color: violet; }
.badge-b { background-color: tomato; }
</style>
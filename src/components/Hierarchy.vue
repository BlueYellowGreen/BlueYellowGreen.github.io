<template>
  <div>
		<!-- CS/ DEPTH: 0 -->
		<div class="hierarchy" data-bs-toggle="collapse" href="#cs-folder" role="button"	aria-expanded="false" aria-controls="cs-folder">
			<a class="text-decoration-none">
				<i class="bi-chevron-right text-dark" />
				<span class="text-dark">CS</span>
			</a>
		</div>


		<!-- CS/알고리즘/ DEPTHL: 1 -->
		<div class="collapse" id="cs-folder">
			<div class="card card-body hierarchy border-0 p-0 ps-3 m-0" data-bs-toggle="collapse"	href="#cs-algo-folder" role="button" aria-expanded="false" aria-controls="cs-algo-folder">
				<router-link to="/algo" class="text-decoration-none">
					<i class="bi-chevron-right text-dark" />
					<span class="text-dark">알고리즘</span>
				</router-link>
			</div>
		</div>

		<!-- AI/ DEPTH: 0 -->
		<div class="hierarchy" data-bs-toggle="collapse" href="#ai-folder" role="button"	aria-expanded="false" aria-controls="ai-folder">
			<a class="text-decoration-none">
				<i class="bi-chevron-right text-dark" />
				<span class="text-dark">AI</span>
			</a>
		</div>

		<!-- AI/공통/ DEPTH: 1 -->
		<div class="collapse" id="ai-folder">
			<div class="card card-body hierarchy border-0 p-0 ps-3 m-0" data-bs-toggle="collapse"	href="#ai-common-folder" role="button" aria-expanded="false" aria-controls="ai-common-folder">
				<a class="text-decoration-none">
					<i class="bi-chevron-right text-dark" />
					<span class="text-dark">공통</span>
				</a>
			</div>
		</div>

		<!-- BlockChain/ DEPTH: 0 -->
		<div class="hierarchy" data-bs-toggle="collapse" href="#blockchain-folder" role="button"	aria-expanded="false" aria-controls="blockchain-folder">
			<a class="text-decoration-none">
				<i class="bi-chevron-right text-dark" />
				<span class="text-dark">BlockChain</span>
			</a>
		</div>
	</div>
</template>

<script scoped>
export default {
	name: 'Hierarchy',
}
</script>

<style>
.hierarchy { border-radius: 5px; }
.hierarchy:hover {
	background-color: #20c9966e;
	transition: .5s;
}
</style>
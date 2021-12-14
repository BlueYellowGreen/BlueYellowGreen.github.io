<template>
  <div>
		<!-- CS/ DEPTH: 0 -->
		<div class="hierarchy">
			<a class="text-decoration-none"	data-bs-toggle="collapse" href="#cs-folder" role="button"	aria-expanded="false" aria-controls="cs-folder">
				<i class="bi-chevron-right text-dark" />
				<span class="text-dark">CS</span>
			</a>
		</div>


		<!-- CS/알고리즘/ DEPTHL: 1 -->
		<div class="collapse" id="cs-folder">
			<div class="card card-body hierarchy border-0 p-0 ps-3 m-0">
				<a class="text-decoration-none"	data-bs-toggle="collapse"	href="#cs-algo-folder" role="button" aria-expanded="false" aria-controls="cs-algo-folder">
					<i class="bi-chevron-right text-dark">알고리즘</i>
				</a>
			</div>
		</div>

		<!-- AI/ DEPTH: 0 -->
		<div class="hierarchy">
			<a class="text-decoration-none"	data-bs-toggle="collapse" href="#ai-folder" role="button"	aria-expanded="false" aria-controls="ai-folder">
				<i class="bi-chevron-right text-dark">AI</i>
			</a>
		</div>

		<!-- AI/공통/ DEPTH: 1 -->
		<div class="collapse" id="ai-folder">
			<div class="card card-body hierarchy border-0 p-0 ps-3 m-0">
				<a class="text-decoration-none"	data-bs-toggle="collapse"	href="#ai-common-folder" role="button" aria-expanded="false" aria-controls="ai-common-folder">
					<i class="bi-chevron-right text-dark">공통</i>
				</a>
			</div>
		</div>

		<!-- BlockChain/ DEPTH: 0 -->
		<div class="hierarchy">
			<a class="text-decoration-none"	data-bs-toggle="collapse" href="#blockchain-folder" role="button"	aria-expanded="false" aria-controls="blockchain-folder">
				<i class="bi-chevron-right text-dark">BlockChain</i>
			</a>
		</div>
	</div>
</template>

<script>
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
<template>
  <div class="mt-4">

		<!-- Header - Breadcrumb -->
    <div class="d-flex justify-content-end">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
						<router-link to="/"
							class="text-decoration-none custom-breadcrumb-color"
						>
							Main
						</router-link>
					</li>
          <li class="breadcrumb-item custom-breadcrumb-color">CS</li>
          <li class="breadcrumb-item current ">알고리즘</li>
        </ol>
      </nav>
    </div>

		<h4>알고리즘</h4>
  </div>
</template>

<script>
export default {
	name: 'Algo',
}
</script>

<style>
.custom-breadcrumb-color { color: #6C757D; }
.current { color: #20C997; }

a:hover {
	color: #20C997;
}
</style>
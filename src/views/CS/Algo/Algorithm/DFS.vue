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
              <li class="breadcrumb-item">
                <router-link to="/cs" class="text-decoration-none custom-breadcrumb-color">
                  CS
                </router-link>
              </li>
              <li class="breadcrumb-item current ">
								<router-link to="/cs/algo" class="text-decoration-none custom-breadcrumb-color">
									알고리즘
								</router-link>
								</li>
              <li class="breadcrumb-item current ">DFS</li>
            </ol>
          </nav>
        </div>
        <div class="offset-md-2 col-md-6 col-12 d-flex justify-content-end p-o">

        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="mt-3 container p-0">
      <h4>DFS</h4>

			<hr>
			
			<pre><code>def dfs(G, v):               # G: 연결관계 그래프, v: 해당 노드 혹은 좌표
    visited[v] = 1           # 우선 방문 처리를 한다.
    for w in G[v]:           # 연결된 노드(좌표)에 대해
        if visited[w] == 0:  # 방문하지 않았다면
            dfs(G, w)        # 바로 가본다 -> DFS
    visited[v] = 0           # 다른 곳도 가보기 위해 방문 초기화

visited = [0] * len(G)       # 노드(좌표) 개수 만큼 선언

dfs(G, 0)                    # 지정한 노드(좌표)에서 탐색 시작</code></pre>
    </div>

  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
	name: 'DFS',
  setup() {
    useMeta({
      title: 'DFS',
      description: 'DFS - Depth First Search',
      base: { href: '/cs/algo/dfs' },
      og: {
        title: "DFS | Dooho's Blog",
        description: 'DFS - Depth First Search',
        image: [
          '',
        ],
        url: 'https://leedooho.com/cs/algo/dfs/'
      },
      twitter: {
        title: "DFS | Dooho's Blog"
      },
    })
  }
}
</script>

<style scoped>

.custom-breadcrumb-color { color: #6C757D; }
.current                 { color: #20C997; }

a:hover {	color: #20C997; }
</style>
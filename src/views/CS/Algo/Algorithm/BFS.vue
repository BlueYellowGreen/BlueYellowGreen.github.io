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
              <li class="breadcrumb-item current ">BFS</li>
            </ol>
          </nav>
        </div>
        <div class="offset-md-2 col-md-6 col-12 d-flex justify-content-end p-o">

        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="mt-3 container p-0">
      <h4>BFS</h4>

			<hr>
			
			<pre><code>from collections import deque                # FIFO 성질을 이용하기 위해 필요

def bfs(G, v):                 	             # G: 연결관계 그래프, v: 해당 노드 혹은 좌표
    q = deque([v])                           # v를 원소로 가지는 deque 선언
    visited = [0] * len(G)                   # 노드(좌표) 수 만큼 선언
    visited[v] = 1                           # 시작 노드(좌표) 방문 처리
    while q:                                 # 갈 곳이 있는 동안 계속
        v = q.popleft()                      # deque 성질에 의해 O(1)
        # 하고자 하는 작업 처리
        for w in range(G):                   # 연결된 노드(좌표)에 대해
            if G[v][w] and visited[w] == 0:  # 연결되어 있고 방문하지 않았다면
                q.append(w)                  # 갈 곳이라고 입력
                visited[w] = 1               # 갈 곳이니깐 방문했다고도 입력

bfs(G, 0)                                    # 지정한 노드 혹은 좌표에서 탐색 시작</code></pre>
    </div>

  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
	name: 'BFS',
  setup() {
    useMeta({
      title: 'BFS',
      description: 'BFS - Breadth First Search',
      base: { href: '/cs/algo/dfs' },
      og: {
        title: "BFS | Dooho's Blog",
        description: 'BFS - Breadth First Search',
        image: [
          '',
        ],
        url: 'https://leedooho.com/cs/algo/bfs/'
      },
      twitter: {
        title: "BFS | Dooho's Blog"
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
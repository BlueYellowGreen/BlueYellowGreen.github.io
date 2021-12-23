---
title: BFS
lang: ko-KR
sidebarDepth: 3

meta:
  - name: description
    content: BFS (Breadth First Search)
  - property: og:title
    content: BFS
  - property: og:description
    content: BFS (Breadth First Search)
  - property: og:image
    content: https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/blob/main/.vuepress/public/assets/img/BFS-png.png?raw=true
  - property: og:url
    content: https://leedooho.com/CS/Algorithm/BFS.html
---

# BFS

BFS (너비우선탐색; Breadth First Search)

깊이를 우선적으로 확인하는 DFS와는 달리,

연결 거리가 동일한 노드(좌표)를 우선적으로 확인하는 탐색 방식이다.

주로 연결 상태 확인, 최단 거리 탐색 등에 사용되는 것 같다.

<br>

BFS 는 동일 거리 노드(좌표)를 확인한다는 특징때문에 FIFO 자료구조(Queue)가 필요하다.

먼저 연결된, 동일 거리 노드(좌표)를 모두 넣고,

해당 노드(좌표)들에 대해서 동일하게 실행하기 때문에

먼저 넣은 노드(좌표)를 먼저 꺼내야 한다(FIFO).

그래서 Queue를 구현해서 사용할 수도 있지만, 주로 내장된 deque를 사용한다.

(그냥 파이썬의 리스트를 사용하게 되면 pop(0)의 시간복잡도가 O(1)가 아니기 때문에 시간 초과가 나타날 가능성이 높다.)

<br>

```python
# While
from collections import deque

def bfs(v):
    q = deque([v])
    visited = [0] * len(v)        # 그래프 혹은 좌표 크기와 동일하게 선언
    visited[v] = 1
    while q:
        v = q.popleft()
        # 작업 처리 구간
        for w in G[v]:
            if visited[w] == 0:   # 방문하지 않은, 연결된 노드(좌표)에 대해
                q.append(w)       # 가야 할 곳이라고 저장
                visited[w] = 1    # 그리고 나중에 갈 것이기 때문에 미리 방문처리
```

<br>
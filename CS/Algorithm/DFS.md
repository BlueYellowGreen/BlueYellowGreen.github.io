---
title: DFS
lang: ko-KR
sidebarDepth: 3

meta:
  - name: description
    content: DFS (Depth First Search)
  - property: og:title
    content: DFS
  - property: og:description
    content: DFS (Depth First Search)
  - property: og:img
    content: /assets/img/DFS-png.png
  - property: og:url
    content: https://leedooho.com/CS/Algorithm/DFS.html
---

# DFS

<br>

DFS (깊이우선탐색; Depth First Search)

이름에서 유추할 수 있듯이, 깊이를 우선적으로 확인하는 방법이다.

그래프에서는 탐색하던 방향 그대로 연결된 노드를 계속 찾을 것이고,

좌표평면에서는 4방향 혹은 8방향 중 탐색하던 방향 그대로 인접 좌표를 찾을 것이다.

<br>

주로 재귀 버전을 사용한다.

하지만 파이썬에서는  최대 재귀 깊이가 제한(1000, 코딩테스트 시험 플랫폼마다 차이 존재)되어 있어, 탐색 경로가 1000 이상일 것 같다면 반복문으로 구현해야 할 것이다.

그러한 상황이 아니라면, 각 탐색 상황마다 변수를 관리하기 위해서는 재귀가 편하므로, 재귀 방식을 주로 사용한다.

<br>

```python
# Recursion
def dfs(v):
    global visited[v]
    visited[v] = 1               # 재귀에서 나와 다시 가는 무한 루프 방지
    # 작업 처리 구간
    for w in G[v]:
        if visited[w] == 0:      # 방문하지 않은, 연결된 다른 곳 탐색
            dfs(w)
    visited[v] = 0               # 다른 구간을 보기 위해 초기화

visited = [0] * len(v)           # 그래프 혹은 좌표 크기와 동일하게 선언
dfs(0)
```

<br>

```python
# while
def dfs(v):
    stack = [v]
    visited = [0] * len(v)       # 그래프 혹은 좌표 크기와 동일하게 선언
    vidited[v] = 1
    while stack:                 # 갈 곳이 있다면 계속해서 탐색
        v = stack.pop()          # 갈 곳을 꺼내어 탐색
        # 작업 처리 구간
        for w in G[v]:
            if visited[w] == 0:  # 방문하지 않은, 연결된 구간에 대해서
                stack.append(w)  # 갈 곳이라고 기록해두기
```

<br>
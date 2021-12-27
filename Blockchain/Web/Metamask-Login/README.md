---
title: Metamask Login
lang: ko-KR

meta:
  - name: description
    content: Metamask로 Login 구현
  - property: og:title
    content: Metamask Login
  - property: og:description
    content: Metamask로 Login 구현
  - property: og:image
    content: ''
  - property: og:url
    content: https://leedooho.com/Blockchain/Web/Metamask-Login/
---

# Metamask 로 로그인하기

<br>

::: tip Metamask 로그인 테스트 

<br>

<Metamask />

<br>

※ 연결 해제의 경우, 기본 JavaScript로 API 요청 보내는 방식을 이해하지 못해 구현하지 못했다. 따라서 연결 해제를 원할 경우, Metamask에서 '**연결됨**' 부분을 클릭하여 '**이 계정 연결 해제**'를 클릭하면 된다.

<br>

:::

<br>

WEB 3.0 기반에서 블록체인 관련 활동을 하기 위해서 'Connect Wallet' 같은 말들이 있다.

이런 버튼 이벤트는 지갑(MetaMask, Trust, etc.)을 연결하여 해당 네트워크에서 이용하겠다는 의미이다.

그래서 그러한 부분을 구현해보려고 한다.

<br>

우선, 대표적인 지갑인 [**Metamask**](https://docs.metamask.io/guide/getting-started.html#connecting-to-metamask)를 이용할 것이다.

그리고 개발 과정 중에, 단순히 **.html** 파일을 실행시켜서는 지갑에 연결을 할 수 없기 때문에 port를 열어 실행시킨 뒤 테스트 해야 한다.

다행히도 파이썬만 설치되어 있다면 쉽게 환경을 만들 수 있다.

우선 테스트 용으로 생성할 html 파일의 이름은 '**index.html**'로 한다.

파이썬에서 포트를 열어줄 때 해당 이름을 기준으로 열어주기 때문이다.

그런 다음, **index.html이 있는 경로**에서 다음의 코드를 실행시키면 끝이다.

```bash
# Window 기준
python -m http.server
```

<br>

그러면 8000번 포트로 열리게 되어, http://localhost:8000/ 에서 확인하면 된다.

hot-reloading 은 지원하지 않아, 새로고침해야 한다.
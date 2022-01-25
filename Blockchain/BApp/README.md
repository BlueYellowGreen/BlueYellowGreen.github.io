---
title: BApp 개발
lang: ko-KR

meta:
  - name: description
    content: BApp (Klaytn) 개발하기
  - property: og:title
    content: BApp 개발
  - property: og:description
    content: BApp (Klaytn) 개발하기
  - property: og:image
    content: ''
  - property: og:url
    content: https://leedooho.com/Blockchain/BApp/
---

# BApp

블록체인을 활용한 어플리케이션으로는 Dapp, Bapp 등이 있다.

<span style="color: #3eaf7c;">**DApp**</span>은 Decentralized Applicatoin의 약자로, 이더리움, 이오스 등의 네트워크에서 작동하는 탈중앙화 분산 어플리케이션을 의미한다.

<span style="color: #3eaf7c;">**BApp**</span>은 Blockchain Application의 약자로, DApp과는 유사하지만
DApp이 완전 탈중앙화된 어플리케이션이라면 BApp은 완전히 탈중앙화되진 않았다.

대신에 소수의 **컨센서스**(Consensus)노드가 빠르게 검증하고 블록을 생성하면
주변 프록시 노드들에서 그 결과를 전달하여 **엔드 포인트 노드**들에서 **다수가 감시**하는 **IBFT**(이스탄불 비잔티움 결함 허용) 합의 알고리즘을 사용한다.

<br>

이러한 방식의 장점은,

1. 다른 네트워크 대비 <span style="color: #3eaf7c;">[**높은 TPS**](http://wiki.hash.kr/index.php/TPS)</span>(Transaction Per Second)로 두드러진다.

2. <span style="color: #3eaf7c;">**Finality**</span>(완결성)가 짧다. Finaliy는 블록에 담긴 거래가 바뀔 수 없다는 것을 보증하는 시간을 의미한다. (Bitcoin ⪯ 60min / Ethereum ⪯ 6min / <span style="color: red;">**Klaytn ⪯ 1s**</span>) &#10140; 조금 더 빠른 거래가 가능

3. <span style="color: #3eaf7c;">**적은 수수료**</span>(가스)로 이더리움 네트워크 대비 $\frac{1}{100}$이다.


대표적으로 <span style="color: #3eaf7c;">**클레이튼**(Klaytn)</span>이 존재한다.

|Bitcoin|Ethereum|Klaytn|
|-|-|-|
|7 TPS|20 TPS|**4,000 TPS**|
|60 min|6 min|**1 sec**|
|POW (Proof of Work)|POS (Proof of Stake)|**IBFT**|

<br>

Klaytn의 IBFT의 핵심인 컨센선스 노드는 각 산업을 대표하는 32개의 글로벌 기업으로 구성되어, 안정적으로 운영이 된다.

<br>
<br>

### Klaytn API (KAS)

Klaytn은 블록체인의 대중화를 목표로, 블록체인을 쉽게 활용할 수 있도록 [**Klaytn API Service**(KAS)](https://docs.klaytnapi.com/v/ko)를 제공한다.

블록체인의 복잡한 모든 과정을 API로 간단히 호출할 수 있도록 처리해서, KAS만 활용하면 블록체인 서비스를 만들 때 모든 것을 개발하지 않아도 되는 편리함이 있다.

<br>
<br>

### Klip API

블록체인 서비스를 이용하려면 별도 프로그램을 통해서 본인의 지갑을 만들고 활용해야 한다. 하지만 별도의 지갑 프로그램 필요없이 이용할 수 있도록 Klip API를 통해서 Kakao Talk Klip 지갑과 연결이 가능하다.

<br>
<br>
<br>


<style scoped>
  table { display: table; width: 100%; }
  td { text-align: center; background-color: white; }
</style>
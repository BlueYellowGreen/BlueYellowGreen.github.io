---
title: Smart Contract & Solidity
lang: ko-KR

meta:
  - name: description
    content: BApp (Klaytn) 개발하기
  - property: og:title
    content: Smart Contract & Solidity
  - property: og:description
    content: BApp (Klaytn) 개발하기
  - property: og:image
    content: ''
  - property: og:url
    content: https://leedooho.com/Blockchain/BApp/Smart-Contract-and-Solidity.html
---

# Smart Contract & Solidity


::: details 진행 과정
1. **Smart Contract 개발**
    - Smart Contract 개념
    - Solidity 기초 학습
    - Smart Contract 배포 (실제 네트워크에)
    - NFT에 대하여
    - NFT 토큰 발행
2. **Klaytn API 연동**
    - 실제 배포한 Smart Contract를 웹/앱 연동
3. **Market BApp 개발**
    - 배운 지식을 토대로 Market BApp 개발
        - 배포한 Smart Contract 연결
:::

위의 과정을 통해 블록체인 기반 서비스를 **설계**하는 기본 과정부터 개발해서 **배포**하는 전체 프로세스를 경험해서, BApp 개발이 어떤 것인지에 대한 큰 그림을 그리는 것을 목표로 한다.


<br>

### BApp 개발 과정

블록체인 **BApp**을 만들기 위해서는 <u>**Smart Contract를 만들고 배포**</u>하는 일이 필요하다.

Smart Contract는 **Solidity**(이더리움에서 제공하는 언어)로 만들게 되는데, <br>
이 Solidity를 가지고 어떤식으로 NFT Smart Contract를 만드는지, Market Smart Contract도 만들어서 어떤식으로 Blockchain Market App을 만들어서 사용할 지 전체적으로 살펴본다.

그리고 Smart Contract는 2가지 종류를 만들어 연동하는 방법을 알아 볼 것이고,<br>
이를 직접 **테스트넷에 배포**해서 사용할 것이다.

그 후 직접 만든 Smart Contract를 **웹/앱**에서 사용할 것이다. <br>
하지만 Blockchain Smart Contract는 배포한다고 유저들이 사용하기에는 쉽지 않다. <br>
그래서 BApp 서비스를 만든다고 했을 때 Smart Contract만 반응하는 것 뿐만이 아니라,<br>
어떻게 일반 유저분들이 웹/앱에서 어떻게 사용하게 할 수 있을지 **UI/UX까지 고려**해야 한다.

&이러한 점을 고려하여 BApp을 설계 및 개발 후 배포하여 일반 유저분들이 사용할 수 있도록하고,<br>
살펴본 내용을 바탕으로 Market Smart Contract, NFT Smart Contract를 연동한다.

그리고 Klip Wallet을 연동해서 Market BApp을 사용하게 한다. <br>
마지막으로는 Klaytn MainNet에 배포하는 것을 목표로 한다.

<br>

<hr>

### Klaytn

개발에 앞서서 개발자용 지갑을 만들어야 한다.<br>
지갑을 만드는 과정은 다소 복잡할 수 있는데, Klaytn Wallet은 쉽게 만들 수 있다.

[**Klaytn Wallet**](https://wallet.klaytn.com/)에서 개인정보 이용 동의 후, 
Main Network &#10140; **Baobab Network**로 변경한다.<br>
그런 다음 왼쪽 상단의 '**Create Account**'를 클릭하고, 암호화에 적용시킬 비밀번호를 입력한다.<br>
(입력하지 않아도 되지만, 조금 더 안전하게 설정하기 위해서는 입력하는 것이 좋다.)

생성 후 '**Download & Next Step**' 버튼을 누르면 입력했던 비밀번호를 바탕으로 암호화된 개인키를 **json** 형태로 다운받을 수 있다. 그리고 Private Key와 Klaytn Wallet Key 도 다른 안전한 곳에 입력해서 보관해둔다. 
(**Private Key는 절대로 공개되어서는 안된다!**)

그 후 '**View Account Info**' 버튼을 클릭한 뒤, 개인 Private Key를 입력하면 현재 자신의 지갑 정보(Account, Address 등)를 확인할 수 있다.

<br>

다음으로, Test 용으로 사용할 Klaytn을 얻기위해 Klaytn Wallet 홈페이지 왼쪽의 '**KLAY Faucet**'에서 '**Run Faucet**'을 클릭한다. 그러면 **5 Klay**를 받을 수 있다. <u>**재 신청은 24시간 뒤에 가능**</u>하다.

지급받은 Klay를 확인하고 싶다면 [**Baobab Klaytn Scope**](https://baobab.scope.klaytn.com/)에서 Address를 입력해 확인할 수 있다. (Baobab 개발 주소를 입력해야 한다.)

<br>

**이제, Smart Contract를 만들어서 배포해보자!**

<br>

코딩 작업은 [**Klaytn IDE**](https://ide.klaytn.com/)에서 웹 상에서 쉽게 개발할 수 있다.<br>

이제 기초적인 Smart Contract를 만들어보자.<br>
IDE에 접속하면, 새로운 Workspace를 생성하고, **contracts/** 폴더에 **count.sol**을 생성하여 아래의 코드를 입력한다. (접근이 편리한 경로에 생성)

```solidity
// Klaytn IDE uses solidity 0.4.24, 0.5.6 versions.
pragma solidity >=0.4.24 <=0.5.6;

contract Count {
    // Storage variable 'count' (type: uint256)
    uint256 public count = 0;

    // Get current node a block number.
    function getBlockNumber() public view returns (uint256) {
        return block.number;
    }

    // Set value of storage variable 'count'.
    function setCount(uint256 _count) public {
        count = _count;
    }
}
```

그리고 해당 파일을 우클릭하여 **complie**을 클릭한다.

**COMPILER**는 **0.5.6** 버전으로(0.4.24 or 0.5.6 을 사용하면 됨) 선택하고, **LANGUAGE**는 **Solidity**로, 그리고 **EVM VERSION**은 **constantinople** (**Cypress**)로 선택한 뒤 '**Compile count.sol**'을 클릭한다.

그러면 count.sol이 있는 경로에 **artifacts/** 폴더가 생성되며 내부에는 **Count_metadata.json**과 **Count.json**이 있는 것을 확인할 수 있다.

<br>

다음으로 이 기본적인 Smart Contract를 배포할 차례이다.<br>
'**Deploy & run transactions**' 탭에서 **ENVIRONMENT**를 **Baobab**으로 선택하고, **ACCOUNT**의 '**+**'를 클릭하여 개인 **Private Key**를 입력한다.
올바른 Private Key라면, 개인 Address 옆에 5 Klay (잔액)이 표시된다.<br>
그리고 **CONTRACT** 부분에 **Count**가 표시되면 정상적으로 진행되고 있는 것이다.

**Deploy**를 클릭한다.

그러면 아래의 콘솔창에,

```
[block:80396659 txIndex:0] from: 0x... to: Count.(constructor) value: 0 peb data: 0x... logs: 0 hash 0x...
```

이 출력된다. block 옆에 적히는 숫자는 다를 것이다.

이제 '**Deployed Contracts**'를 보면 'setCount', 'count', 'getBlockNumber' 항목이 있다. count는 `uint256 public count = 0;`에 의해 나온 것이고, setCount와 getBlockNumber는 각각 작성한 함수이다.<br>
**getBlockNumber**를 누르면 현재 Blockchain에서의 Block Number를 가져오는데, 계속해서 바뀌는 것을 확인할 수 있다. (콘솔에는 `[call]` 형태로 출력된다.)

이번에는 setCount의 숫자를 10으로 바꾸고 setCount 버튼을 클릭한다.<br>
그러면 콘솔에는 `[call]` 형태가 아니라 처음에 보았던 형태에서 숫자만 다른, `[block:80401126]`을 볼 수 있다. 거래 수수료로 인해 개인 Klay도 줄은 것을 확인할 수 있고, count 버튼을 클릭하면 0 &#10140; 10 으로 바뀐 것도 확인할 수 있다.

지금 Baobab Network에 배포하고, Smart Contract까지 실행하여 값을 바꾼 것이다!

<br>

<hr>

### Smart Contract

일단 무언가를 작성해서 컴파일하고 배포한 뒤 실행을 했는데, 의미를 모르고 진행했다.<br>
그래서 간략하게 해당 과정이 어떠한 의미를 가지고 있는지 알아보고자 한다.

우선 일반적으로 웹을 개발할 때, localhost로 배포(?)를 하면 당연하게도 다른 유저가 접근할 수 없다.<br>
하지만 Blockchain의 경우 **해당 네트워크로만 배포**하게 되어 있어서, 다른 유저가 접근할 수 있게 코드를 작성했다면 **contract address**를 통해 다른 유저도 사용할 수 있다.<br>
(IDE에서는 Deployed Contracts에서 확인할 수 있다.)

그리고 추가적으로, Baobab Klaytn Scope에서 해당 **transaction hash**를 검색했을 때 나오는 Input Data에 적힌 부분이, 우리가 작성했던 count.sol **코드 및 입력 데이터 내용**이다.

#### Account

Blockchain에서 Account는 2가지 종류가 있다.

- **Smart Contract Account**
- **Private Key Account**

Private Key Account는 우리가 Klaytn Wallet에서 만든 방식이고, 아무나 제한없이 만들 수 있다.<br>
Private Key를 바탕으로 Address가 나오고, 이 Address는 일종의 계좌번호인 셈이다.

Smart Contract도 네트워크상에 배포가 되면 일종의 계좌번호가 생기게된다.<br>
위에서 언급한 **contract address**가 이에 해당한다. 다만 Private Key Account와의 차이는 <u>**Code도 보관**</u>한다는 점이다.

#### Transaction

Blockchain에서의 모든 활동을 의미한다.<br>
해당 활동들은 **transaction hash**라는 일종의 일련번호가 붙게 된다.<br>
그리고, 배포된 Code를 기반으로 돈(KLAY)을 보내거나 받을 수 있는데, 해당 코드를 실행시키는데 돈(KLAY)가 든다.

#### 수수료

`수수료 = GAS * GAS_PRICE`

Klaytn에서 GAS_PRICE는 정해져있다. (0.000000025 KLAY)<br>
그리고 GAS는 실행시키는 코드에 따라 달라진다.

<br>

<hr>

### Solidity

Smart Contract 코드 구조는 `contract`로 시작하게 된다.<br>
배포하면 contract 옆에 적힌 이름을 가진 contract가 생성된다.

연습용 Smart Contract를 생성해보자.

```solidity
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {

}
```

위의 코드를 작성한 후, **0.5.6 version**의 COMPILER로 **constantinople** **(Cypress)** EVM VERSION 으로 compile 후 deploy하면 contract address를 얻을 수 있다. 하지만 아무런 내용이 없는 상황이다.

숫자 및 문자를 넣어보자.

```solidity{4-5}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    uint256 public totalSupply = 10;
    string public name = "KlayPractice";
}
```

`public`을 통해 Smart Contract 에서 바로 볼 수 있게 한다.<br>
반대로 `private`은 바로 볼 수 없게 한다.

그렇지만 함수를 이용하여 private를 볼 수 있다.

```solidity{7-9}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    uint256 private totalSupply = 10;
    string public name = "KlayPractice";

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }
}
```

**public**으로 getTotleSupply 함수를 공개하고, 보여주기 전용 함수로 만들기 위해 **view**, 그리고 양수를 보여주니 **returns**는 **uint256**으로 한다.

Deploy 후 Deployed Contracts에서 '**getTotalSupply**'를 누르면 private인 totalSupply를 받아와 확인할 수 있다.

추가로 totalSupply를 변경하는 함수를 만들어보자.

```solidity{11-13}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    uint256 private totalSupply = 10;
    string public name = "KlayPractice";

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function setTotalSupply(uint256 newSupply) public {
        totalSupply = newSupply;
    }
}
```

변경하려는 수량을 입력해야 하니, 양수 형태인 **uint256**으로 newSupply란 이름으로 받고, **public**으로 공개시키며, 조작하는 로직이 있으니 **view는 적지 않는다**. 그리고 returns 도 딱히 적지 않아도 된다.

Deploy 후 마찬가지로 Deployed Contracts를 살펴보자.<br>
이전에 간략히 살펴봤던 수수료 부분을 떠올려보면, getTotalSupply 함수와 name 을 클릭해 확인해보는 과정은 **추가 및 수정이 없기 때문에 수수료가 들지 않는다.**<br>
(콘솔 창에서도 `[call]` 형태로 나타남)

하지만 setTotalSupply 처럼 수정 로직을 실행시키는 transaction은 수수료가 든다.<br>
실행시켜본 결과 약 0.0007 KLAY가 소모되었다.<br>
(콘솔 창에서 `[block]` 형태로 나타남)

<br>

그리고 위에서 언급했듯이, Smart Contract에도 address가 있다.

```solidity{7,9-11}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    uint256 private totalSupply = 10;
    string public name = "KlayPractice";

    address public owner; // constract deployer

    constructor () public {
        owner = msg.sender;
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function setTotalSupply(uint256 newSupply) public {
        totalSupply = newSupply;
    }
}
```

address를 알아보기 위해 **address** 타입의 owner를 public으로 선언하고, **constructor** 라는 생성자를 통해 owner에 address를 할당한다.<br>
`owner = msg.sender` &#10140; Smart Contract를 실행한 애를 owner에 할당하라!

solidity에서도 생성자라고, 배포되자마자 실행하도록 하는 기능이 존재한다.

그래서 Deploy 후 '**owner**'를 클릭해보면 Smart Contract의 address를 볼 수 있다.

<br>

이제 조금 더 나아가, Smart Contract를 배포한 사람만이 내용을 수정할 수 있게 하려면 `require()`를 사용하면 된다.<br>
require는 () 안의 조건을 만족하면 다음 코드를 실행시키고, contract를 fail 시킨다.

```solidity{18}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    uint256 private totalSupply = 10;
    string public name = "KlayPractice";

    address public owner; // constract deployer

    constructor () public {
        owner = msg.sender;
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function setTotalSupply(uint256 newSupply) public {
        require(owner == msg.sender, 'Not owner');
        totalSupply = newSupply;
    }
}
```

require() 안의 내용은 배포한 사람이라면 다음 코드를 실행시키고, 아니면 'Not owner'를 출력시킨다는 의미이다.

Fail을 확인해보기 위해 테스트용 다른 지갑으로 로그인한 뒤 '**setTotalSupply**'를 실행시켜보자.

우선 Klaytn IDE 상에서는 버튼을 누르면 **Gas estimation failed**라는 경고창이 나타난다. 그럼에도 **send transaction**을 누르면, 아래 콘솔창에 해당 블럭의 status가 `false Transaction mined but execution failed`로 나타난다.

<br>

다음으로 `mapping`에 대해서 알아보자.

```solidity{8,23-25}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    uint256 private totalSupply = 10;
    string public name = "KlayPractice";

    address public owner; // constract deployer
    mapping (uint256 => string) public tokenURIs;

    constructor () public {
        owner = msg.sender;
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function setTotalSupply(uint256 newSupply) public {
        require(owner == msg.sender, 'Not owner');
        totalSupply = newSupply;
    }

    function setTokenUri(uint256 id, string memory uri) public {
        tokenURIs[id] = uri;
    }
}
```

괄호 안의 의미는, 숫자 형태의 키를 입력해 문자열을 값을 얻는다는 뜻이다.

그리고 mapping에 내용을 추가하기 위한 함수 '**setTokenUri**'가 있다. 여기서 **memory**는 조금 복잡한 문자열을 다룰 때 필요하다.

배포 후 '**setTokenUri**'에 `5, "Hello, Klaytn"`같이 Key-Value 형태로 입력 후 클릭한 다음, '**tokenURIs**' 에 5를 입력하고 클릭하면 입력했던 값을 확인할 수 있다.

<br>

이제 **NFT**를 발행해보자!

#### NFT (Non Fungible Token)

디지털 자산의 일종으로, 대체 불가능한 특정 암호 디지털 자산이다.<br>
Blockchain에 저장함으로써 영구 보존하고, 소유권의 위조 · 변조가 불가능하다.

NFT를 만들기 위해서 최소한

- 발행(일련번호, 내용, 소유자)
  - mint(tokenId, uri, owner)
- 전송(누가, 누구에게, 무엇을)
  - transferFrom(from, to, tokenId)

이러한 정보가 필요할 것이다.

기존 코드에서 필요한 부분만 남기고 작성해보자.

```solidity{6,8,11-18,20-24}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    string public name = "KlayPractice";

    string public symbol = "MN"; // My NFT

    mapping (uint256 => address) public tokenOwner;
    mapping (uint256 => string) public tokenURIs;

    function mintWithTokenURI(address to, uint256 tokenId, string memory tokenURI) public returns (bool) {
        // to에게 tokenId를 발행
        // 내용은 tokenURI
        tokenOwner[tokenId] = to;
        tokenURIs[tokenId] = tokenURI;

        return true;
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) public {
        require(from == msg.sender, "from != msg.sender");
        require(from == tokenOwner[tokenId], "you are not the owner of the token");
        tokenOwner[tokenId] = to;
    }

    function setTokenUri(uint256 id, string memory uri) public {
        tokenURIs[id] = uri;
    }
}
```

NFT 일련번호에 소유자 및 내용을 입력하기 위한 mapping을 선언한다.<br>
그리고 발행을 위한 함수를 만들어서 **일련번호**를 Key로, **소유주**와 **내용**을 Value로 추가한다.

전송을 위한 함수에서는 아무나 접근할 수 없도록, `require`를 이용하여 소유주만이 접근할 수 있도록 한다. 이렇게 설정하면, 타인이 시도할 경우 transaciton이 fail 할 것이다.

<br>

지금까지 NFT의 아주 기초적인 부분만 만들어 보았는데, 소유한 NFT를 조회하는 기능을 넣어보자.

```solidity{11,19,27-28,32-42,44-46}
pragma solidity >=0.4.24 <=0.5.6;

contract Practice {
    string public name = "KlayPractice";

    string public symbol = "MN"; // My NFT

    mapping (uint256 => address) public tokenOwner;
    mapping (uint256 => string) public tokenURIs;

    mapping (address => uint256[]) private _ownedTokens;

    function mintWithTokenURI(address to, uint256 tokenId, string memory tokenURI) public returns (bool) {
        // to에게 tokenId를 발행
        // 내용은 tokenURI
        tokenOwner[tokenId] = to;
        tokenURIs[tokenId] = tokenURI;

        _ownedTokens[to].push(tokenId);

        return true;
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) public {
        require(from == msg.sender, "from != msg.sender");
        require(from == tokenOwner[tokenId], "you are not the owner of the token");
        _removeTokenFromList(from, tokenId);
        _ownedTokens[to].push(tokenId);
        tokenOwner[tokenId] = to;
    }

    function _removeTokenFromList(address from, uint256 tokenId) private {
        uint256 lastTokenIndex = _ownedTokens[from].length - 1;
        for (uint256 i=0; i<_ownedTokens[from].length; i++) {
            if (tokenId == _ownedTokens[from][i]) {
                _ownedTokens[from][i] = _ownedTokens[from][lastTokenIndex];
                _ownedTokens[from][lastTokenIndex] = tokenId;
                break;
            }
        }
        _ownedTokens[from].length--;
    }

    function ownedTokens(address owner) public view returns (uint256[] memory) {
        return _ownedTokens[owner];
    }

    function setTokenUri(uint256 id, string memory uri) public {
        tokenURIs[id] = uri;
    }
}
```

먼저 address 별 NFT 일련번호를 담기 위한 mapping을 하나 선언한다.<br>
그래서 NFT를 발행하면 해당 address에 NFT 일련번호를 추가해줘야 해서, 해당 부분을 '**mintWithTokenURI**'에 추가로 구현한다.

전송시, 양도해주는 사람의 mapping에 추가하는 부분은 간단하지만, **본인의 mapping에서 해당 NFT 일련번호를 제거하는 부분은 추가로 구현**해야 한다.

제거하는 로직은 단순히 제거하고자 하는 NFT 일련번호를 찾은 뒤 마지막 원소와 **swap** 하고 **배열의 길이를 하나 줄이는 방식**으로 접근한다. 그리고 해당 로직이 구현된 함수를 '**saftTransferFrom**'에서 사용한다.

마지막으로 address 별 NFT 목록을 확인하기 위한 함수를 public으로 구현하면 끝이다.

이렇게 아주 기초적인 NFT 발행 · 전송하는 부분을 구현해냈다!

<br>

<hr>

### Contract 연동

이제는 다수의 Smart Contract를 연동하는 방법에 대해서 알아보자.<br>
배포된 Smart Contract 끼리는 연동이 가능하다. 다만 연동하려는 Smrat Contract에 대해서 최소한으로, 어떠한 기능이 있는지, 그리고 어떤 address를 가지고 있는지 알아야 한다.

이제 코드를 작성해보자.<br>
(작성했던 `.sol` 파일에 이어서 작성해도 된다.)

```solidity
contract NFTMarket {
    function buyNFT(uint256 tokenId, address NFTAddress, address to) public returns (bool) {
        NFTSimple(NFTAddress).safeTransferFrom(address(this), to, tokenId);
        return true;
    }
}
```

위 코드의 의미는 다음과 같다.<br>
`NFTAddress` 주소에 있는 **NFTSimple**이라는 **contract**에서`safeTransferFrom`이라는 함수를 사용하겠다!<br>
(기존 작성했던 Practice &#10140; NFTSimple 로 이름을 변경했다.)

Deploy 후 기존 방식대로 NFT를 발행해서 NFTMarket 이라는 contract의 address로 NFT를 보내보자!

조금 특이하지만 당연하게도, <u>**Smart Contract도 NFT를 소유할 수 있다.**</u><br>
NFTSimple(기존 Practice)에서 NFT를 발행한 뒤, NFTMarket으로 NFT를 전송할 수 있다.<br>
다만, NFTMarket에는 NFT를 조회하는 기능을 아직 만들지 않았기 때문에, **NFTSimple**에서 **NFTMarket의 address**를 이용하여 조회할 수 있다.

이렇게 받은 NFT는 NFTSimple을 연동하여 safeTransferFrom 기능을 사용하는 **buyNFT** 함수를 통해 NFT를 다시 보낼 수 있다. (require() 조건이 맞는 경우에만)

<br>

<hr>

### BApp NFT Market

#### KIP-17 (NFT)

**KIP**는 Klaytn Improvement Proposals의 약자로서, 누구든지 Klaytn Blockchain 오픈소스에 기여할 수 있다는 의미이다. [**KIP Klaytn**](https://kips.klaytn.com/)에서 자세한 내용을 살펴볼 수 있다. 오픈소스 활동을 통해 나타난 것들이 있는데, 대표적으로

- KIP-7
- KIP-17

이 있다.<br>
KIP-7 은 **FT**에 관한 것으로 일반적인 토큰에 해당한다. 그리고 우리가 알아보려는 KIP-17이 **NFT**에 관한 것이다. KIP-17의 예제 코드는 [**이곳**](https://github.com/klaytn/klaytn-contracts/tree/master/contracts/token/KIP17)에서 확인할 수 있다.

<br>

이제 NFTMarket을 더 구현해보자.

```solidity{2,4-5,7,9,15-18}
contract NFTMarket {
    mapping(uint256 => address) public seller;

    function buyNFT(uint256 tokenId, address NFTAddress) public returns (bool) {
        address payable receiver = address(uint160(seller[tokenId]));

        receiver.transfer(10 ** 16);

        NFTSimple(NFTAddress).safeTransferFrom(address(this), msg.sender, tokenId)
        return true;
    }

    // Market이 토큰을 받았을 때, 판매자가 누구인지 기록해야 함
    // KIP-17 규격에 맞춰야 함 (공식문서 참고)
    function onKIP17Received(address operator, address from, uint256 tokenId, bytes memory data) public returns (bytes4) {
        seller[tokenId] = from;
        return bytes4(keccak256("onKIP17Received(address,address,uint256,bytes)"))
    };
}
```

구매자를 기록하기 위해 mapping을 선언하고, `address to`부분 대신 `msg.sender`를 통해 **구매자가 소유**하도록 한다.

그리고 seller에게 KLAY(예제에서는 0.1 KLAY로 고정)를 보내기 위해 `payable`를 이용한다. 즉, `receiver`는 seller가 KLAY를 받을 address이다.
그래서 0.01 KLAY를 보내기 위해서는 `receiver.transfer()`를 사용한다.

한 가지 조심해야 하는 점은, 0.01 KLAY를 보내기 위해 괄호 안에 0.01을 적으면 안된다는 것이다. 괄호 안에는 `peb` 단위로서, $10^{18}$ peb = 1 KLAY 이다. 그래서 `10 ** 16`으로 작성해야 원하는 양으로 보낼 수 있다.

그리고 다음으로는 Market에서 NFT를 받았을 때, 판매한 사람의 정보를 기록해야 한다. KIP-17에 맞게 작성하자. (NFTSimple 에도 추가해야 함)

```solidity{7,11,19-21}
contract NFTSimple {
    
    ...
    
    mapping (address => uint256[]) private _ownedTokens;

    bytes4 private constant _KIP17_RECEIVED = 0x6745782b;
    
    ...

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public {
        require(from == msg.sender, "from != msg.sender");
        require(from == tokenOwner[tokenId], "you are not the owner of the token");
        _removeTokenFromList(from, tokenId);
        _ownedToken[to].push(tokenId);
        tokenOwner[tokenId] = to;

        // NFT 받는 쪽에서 실행할 코드가 있다면 실행하기
        require(
            _checkOnKIP17Received(from, to, tokenId, _data), "KIP17: transfer to non KIP17Receiver implementer"
        );

    }

    function _checkOnKIP17Received(address from, address to, uint256 tokenId, bytes memory _data) internal returns (bool) {
        bool success;
        bytes memory returndata;

        if (!isContract(to)) {
            return true;
        }

        (success, returndata) = to.call(
            _KIP17_RECEIVED,
            msg.sender,
            from,
            tokenId,
            _data
        );
    }
}
```
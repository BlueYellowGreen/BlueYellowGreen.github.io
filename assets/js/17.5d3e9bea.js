(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{381:function(t,o,r){},438:function(t,o,r){"use strict";r(381)},511:function(t,o,r){"use strict";r.r(o);r(438);var s=r(33),a=Object(s.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"_2022-01-24-새로-알게된-점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2022-01-24-새로-알게된-점"}},[t._v("#")]),t._v(" 2022/01/24, 새로 알게된 점")]),t._v(" "),r("p",{staticClass:"tags"},[t._v("#DCG #Tensor #AutoGrad #Colab_VSCode")]),t._v(" "),r("p",[t._v("  이번 주는 "),r("strong",[t._v("PyTorch")]),t._v("를 이용하여 모델을 설계하고, 데이터를 전처리 및 변형을 시켜 모델 학습 시 feeding 하는 과정 전반에 대해서 학습한다.\n왜 TensorFlow 가 아닌 PyTorch를 사용할까? 우선 두 프레임워크의 성격을 이해해야 한다.")]),t._v(" "),r("br"),t._v(" "),r("h4",{attrs:{id:"tensorflow-vs-pytorch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow-vs-pytorch"}},[t._v("#")]),t._v(" TensorFlow vs PyTorch")]),t._v(" "),r("p",[t._v("  TensorFlow 는 "),r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("Define and Run")])]),t._v(" 으로 static graph 이다. 레이어 별 디버깅이 무척이나 힘들다.\n반면 PyTorch는 "),r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("Define by Run")])]),t._v(" (Dynamic Computational Graph; "),r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("DCG")])]),t._v(")이다.\n실행을 하면서 그래프를 생성하기 때문에 디버깅이 수월하다.\n그래서 느릴 것 같지만, TensorFlow 에 비해 크게 속도 차이가 나지 않는다.")]),t._v(" "),r("p",[t._v("  이 이야기만 들으면 PyTorch가 좋아보이지만, TensorFlow 의 힘은 Production, Cloud 연결, Multi-GPU(TPU...) 관련하여 나타난다.\n즉, TensorFlow 는 서비스 화에 큰 장점이 있고, PyTorch 는 "),r("strong",[t._v("논문 작성 및 아이디어 구현")]),t._v("에 큰 장점이 있다.\n그렇다보니, 앞으로 진행될 과정이 이론 학습 및 논문 구현에 특화되어 있어, PyTorch 가 선택된 것 같다.\n(마지막 프로젝트로서 AI를 서비스화 할 때는 TensorFlow 가 사용될 것 같다.)")]),t._v(" "),r("br"),t._v(" "),r("h4",{attrs:{id:"pytorch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pytorch"}},[t._v("#")]),t._v(" PyTorch")]),t._v(" "),r("p",[t._v("  PyTorch 는 크게 보자면 "),r("strong",[t._v("Numpy")]),t._v("   +   "),r("strong",[t._v("AutoGrad")]),t._v("   +   "),r("strong",[t._v("Function(Deep Learning)")]),t._v(" 이다.\n내부적으로 array 를 표현하는 Tensor 클래스는 Numpy 와 같다고 말할 정도로 닮았다. 그렇다면 Tensor 란 무엇일까? 수학적인 개념으로,\n2차원 행렬 (Matrix) 이 여러개 모이면 3-tensor 가 되고, 3-tensor 가 또 여러개 모여 4-tensor, ..., n-tensor 가 된다.")]),t._v(" "),r("p",[t._v("  이 Tensor 가 가질 수 있는 자료형은 C 가 취할 수 있는 자료형과 유사하다. 하지만 큰 차이가 있다면 "),r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("GPU 사용여부")])]),t._v("이다.\n기본적으로 객체는 CPU에서 생성이되며, GPU로 복사하거나, GPU에 있던 객체를 CPU로 복사할 수 있다.\n또한, 연산 시 같은 타입이어야 할 뿐만 아니라, 같은 공간(CPU 면 CPU 끼리, GPU 면 GPU 끼리)에 있는 객체끼리만 연산 가능하다.")]),t._v(" "),r("br"),t._v(" "),r("h4",{attrs:{id:"tensor-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tensor-operations"}},[t._v("#")]),t._v(" Tensor Operations")]),t._v(" "),r("p",[t._v("  Tensor 연산을 위한 중요한 함수들이 매우 다양하지만, 그 중에서도 가장 중요하다고 생각하는 2 가지를 알아보자.")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("view")]),t._v("   vs   "),r("code",[t._v("reshape")])])]),t._v(" "),r("p",[t._v("결론적으로는 "),r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("view")])]),t._v(" 사용하는 것을 습관화하자. view와 reshape 둘 다 tensor 의 shape 을 바꾸는 것이지만,\nreshape 의 경우 contiguous 가 유지되면 view 와 동일하지만, 반대로 contiguous 가 깨지면 copy 동작을 한다.\n그래서 reshape 의 행동을 예측하기 힘들어 일관되게 작동하는 view 를 사용하도록 한다.")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("mm")]),t._v("   vs   "),r("code",[t._v("matmul")])])]),t._v(" "),r("p",[r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("mm")])]),t._v(" 을 사용하자. 둘 다 행렬곱을 계산하지만, matmul 만 broadcasting 을 지원한다.\n편하다고 생각할 수 있겠지만, 내가 의도한 대로 동작하지 않을 때 오류가 발생하지 않아 찾기에 어려우니, 정확한 의도로 동작시키기 위해\nmm 으로 사용하도록 한다.")]),t._v(" "),r("br"),t._v(" "),r("h4",{attrs:{id:"autograd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#autograd"}},[t._v("#")]),t._v(" AutoGrad")]),t._v(" "),r("p",[t._v("  PyTorch 가장 큰 장점 중 하나인 "),r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("AutoGrad")])]),t._v(", 자동 미분이다.\n미분하고자 하는 식(변수)에 대해 단순히 "),r("code",[t._v("backward()")]),t._v(" 를 이용하면 gradient 를 계산해준다.\n미분하고자 하는 대상에 포함된 각종 변수들은 "),r("span",{staticStyle:{color:"#2454ff"}},[r("strong",[t._v("Parameter")])]),t._v(" 클래스 객체인데,\n이 객체는 "),r("code",[t._v("requires_grad=True")]),t._v(" 속성을 가지고 있어서 미분 계산 시 포함된다.\n그래서 미분 계산 후, "),r("code",[t._v("step()")]),t._v(" 을 통해 각각의 변수들에게 gradient 를 업데이트 시켜줄 수 있다.")]),t._v(" "),r("p",[t._v("  여기까지는 PyTorch에 구현된 Layer를 사용할 때의 이야기이다. 만약 완전히 새로운 모델 개발을 위해\n직접 작성해야 한다면, Parameter 상속을 받으면서 "),r("code",[t._v("requires_grad=True")]),t._v(" 로 설정해줘야 한다.")]),t._v(" "),r("br"),t._v(" "),r("h4",{attrs:{id:"colab-을-vscode-에서"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#colab-을-vscode-에서"}},[t._v("#")]),t._v(" Colab 을 VSCode 에서")]),t._v(" "),r("p",[t._v("  잠시 주제를 바꿔서, Colab 을 "),r("strong",[t._v("VSCode 터미널 환경에서 동작")]),t._v("하는 방식에 대해서 알아보자.\n대화형 셀 형식은 분석 및 디버깅에 용이하지만, 협업 및 반복적인 학습에는 많이 불편하다.\n그래서 일반적인 개발 환경(터미널)에서 하고 싶은데, Colab의 무료 GPU 자원을 포기할 수 없는 경우에 진행하면 된다.")]),t._v(" "),r("br"),t._v(" "),r("p",[r("strong",[t._v("Before Start")])]),t._v(" "),r("ul",[r("li",[t._v("개발 자료, 체크포인트 및 학습된 모델을 백업하기 위해서, 미리 구글 드라이브를 Colab 에 마운트하자.")])]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" google"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("colab "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" drive\ndrive"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mount"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/content/drive'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("ul",[r("li",[t._v("GPU 를 사용하려면 미리 런타임 환경을 바꿔두자. 도중에 런타임을 바꾸게 되면 초기화로 인해 무슨 일이 일어날지 모른다...")])]),t._v(" "),r("br"),t._v(" "),r("p",[r("strong",[t._v("Start")])]),t._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"https://ngrok.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngrok"),r("OutboundLink")],1),t._v(" 에서 무료 회원가입 후 "),r("strong",[t._v("Connect your account")]),t._v(" 부분의 "),r("strong",[t._v("authtoken")]),t._v(" 을 복사한다.")])]),t._v(" "),r("li",[r("p",[t._v("복사한 authtoken 을 Colab 에서 변수로 할당해둔다. 추가적으로 비밀번호도 미리 저장한다."),r("br"),t._v("\nex) "),r("code",[t._v("NGROK_TOKEN = 'your_token'")]),r("br"),t._v("\nex) "),r("code",[t._v("PASSWORD = 'your_password'")])])]),t._v(" "),r("li",[r("p",[t._v("SSH 환경에서 colab 으로 접속하도록 라이브러리를 설치해야 한다."),r("br"),t._v(" "),r("code",[t._v("!pip install colab-ssh")]),r("br"),t._v("\n그 후 아래의 코드를 작성하여 셀을 실행시킨다.")])])]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" colab_ssh "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" launch_ssh\nlaunch_ssh"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NGROK_TOKEN"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PASSWORD"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[t._v("그러면 "),r("strong",[t._v("HostName")]),t._v(", "),r("strong",[t._v("Port")]),t._v(" 등의 정보가 나오는데, VSCode 에서 연결할 때 입력해야 한다. 복사해두자.")])]),t._v(" "),r("li",[r("p",[t._v("VSCode 의 Extension 인 "),r("strong",[t._v("Remote - SSH")]),t._v("를 설치하고, "),r("code",[t._v("ctrl + shift + p")]),t._v(" 를 입력하여 "),r("code",[t._v("Remote-SSH: Add New SSH Host")]),t._v(" 를 클릭한다.")])]),t._v(" "),r("li",[r("p",[t._v("입력할 주소는 HostName 에 적힌 내용인 ~.tcp.ngrok.io 과 Port 값을 "),r("code",[t._v("ssh root@~.tcp.ngrok.io -p 19620")]),t._v(" 형태로 입력한다.")])]),t._v(" "),r("li",[r("p",[t._v("그 다음에는 현재의 SSH Configuration 정보를 저장할 위치를 선택한다.")])]),t._v(" "),r("li",[r("p",[t._v("다시 "),r("code",[t._v("ctrl + shift + p")]),t._v(" 를 누르고 "),r("code",[t._v("Remote-SSH: Connect to Host")]),t._v(" 를 클릭한다. 그런 다음 접속하고자 하는 Colab 의 HostName 을 클릭하면 새로운 VSCode 창으로 접속한다.")])]),t._v(" "),r("li",[r("p",[t._v("계속 진행하겠다는 "),r("strong",[t._v("Continue")]),t._v(" 를 누르고, 비밀번호를 입력하면 접속 완료이다.")])])]),t._v(" "),r("br"),t._v(" "),r("p",[r("strong",[t._v("Additional")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Colab 과 동일한 경로로 가려면 "),r("code",[t._v("cd ../content/")]),t._v(" 를 통해 이동할 수 있다.")])]),t._v(" "),r("li",[r("p",[t._v("작업한 내용을 구글 드라이브에 복사하려면 구글 드라이브 경로로 이동 후, "),r("code",[t._v("cp -r /content/작업환경 ./")]),t._v(" 를 통해 복사할 수 있다. (시간이 조금 걸린다.)")])]),t._v(" "),r("li",[r("p",[t._v("VSCode 상에서도 Colab 처럼 폴더 구조를 보려면, EXPLORER ➜ Open Folder 를 누르고 "),r("code",[t._v("/content/보여주려는_경로/")]),t._v(" 를 입력하고 OK 를 누른 뒤, 비밀번호를 입력하면 된다.")])])]),t._v(" "),r("br"),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"피어-세션"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#피어-세션"}},[t._v("#")]),t._v(" 피어 세션")]),t._v(" "),r("p",[t._v("저번주에 비해 강의 시간이 적어서 수월하겠다는 생각이 들었지만..")]),t._v(" "),r("p",[t._v("과제를 해보니 총 학습 시간은 더 넘어섰다.")]),t._v(" "),r("p",[t._v("과제에 포함된 내용도 상당히 유익해서 따로 페이지를 할애해서 정리해야 겠다는 생각이 들었다.")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br")])}),[],!1,null,"fd7523e0",null);o.default=a.exports}}]);
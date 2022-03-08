(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{393:function(t,a,s){},450:function(t,a,s){"use strict";s(393)},489:function(t,a,s){"use strict";s.r(a);s(450);var n=s(33),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_2022-01-27-새로-알게된-점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2022-01-27-새로-알게된-점"}},[t._v("#")]),t._v(" 2022/01/27, 새로 알게된 점")]),t._v(" "),s("p",{staticClass:"tags"},[t._v("#Multi-GPU #Hyperparameter_Tuning #Troubleshooting")]),t._v(" "),s("h4",{attrs:{id:"multi-gpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-gpu"}},[t._v("#")]),t._v(" Multi-GPU")]),t._v(" "),s("p",[t._v("  하드웨어 성능의 향상으로 딥러닝 붐이 찾아왔고, 지금도 새로운 기술(논문)들이 나오고 있지만\n사용되는 모델은 점점 정해져 가는 것 같다. 그래서 모델 구조 변경을 통해 성능을 향상시키는 것 보다,\n"),s("strong",[t._v("더욱 더 많은 데이터")]),t._v("를 학습시켜 모델의 성능을 향상시키는 추세이다.")]),t._v(" "),s("p",[t._v("  2018년 BERT에 비해 2019년 GPT-2 는 10배 가량, 또 2020년 GPT-3는 GPT-2 대비 10배 가량 모델의 사이즈가 커졌다.\n그래서 이들 모델을 학습시키는 시간도 늘어났다. BERT-Large 의 경우 Nvidia Tesla V100 32G * 8 GPU 서버 한 대로\nPre-training 에만 약 2주의 시간이 걸린다. 그러다보니, 분산처리 학습은 선택이 아닌 필수로 다가오고 있다.")]),t._v(" "),s("p",[t._v("  분산처리 학습에 대해 알아보기에 앞서서 용어 정리부터 하자. 두 개의 단어만 구분하면 된다.\n"),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("GPU")])]),t._v(" vs. "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("Node")])]),t._v(" .\nGPU 는 말 그대로 그래픽카드이고, Node 는 System 을 의미한다. 즉 하나의 서버이다. 그래서 일반적인 개인 학습자 환경에서\n'GPU' 여러개가 있다고 하면, 하나의 컴퓨터에 Multi-GPU 환경을 구성한 "),s("strong",[t._v("Single Node Multi-GPU")]),t._v(" 인 것이다.")]),t._v(" "),s("p",[t._v("  딥러닝에서 Multi-GPU를 이용한 학습은 예전부터 사용했다. AlexNet 논문에서 해당 내용을 살펴볼 수 있는데,\n그 전에 병렬 학습이 두 가지 방식으로 나뉜다는 것을 알아야 한다. 첫 번째는 "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("Model Parallel")])]),t._v("이고,\n두 번째는 "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("Data Parallel")])]),t._v("이다.")]),t._v(" "),s("p",[s("strong",[t._v("Model Parallel")]),t._v("은 이름에서 볼 수 있듯이, 모델을 나누는 것이다. AlexNet 에서 사용한 방식인데, 매우 까다롭다.\n병렬처리 학습의 핵심은 병목 현상을 최소화 시켜 학습 시간을 단축시키는 것인데, 모델 간의 배치 학습 정보를 공유하는 파이프라인이\n겹치지 않는다면 일반 학습과 다를바가 없다. 그래서 최대한 겹치도록 파이프라인을 짜는 것이 중요한데, 그것이 어렵다..")]),t._v(" "),s("p",[t._v("  그 다음은 "),s("strong",[t._v("Data Parallel")]),t._v("이다. 데이터를 나눠 GPU 에 할당한 뒤, 결과의 평균을 취하는 방식으로 가장 많이 사용되는 병렬처리 학습 방식이다.\nPyTorch 에서는 Multi-GPU 학습을 쉽게 하도록 잘 구현되어 있다. "),s("code",[t._v("DataParallel(model)")]),t._v(" 과 "),s("code",[t._v("DistributedDataParallel(model, device_ids=[])")]),t._v(" 이다.\n전자의 방식이 간편하여 주로 사용하게 될텐데, DataParallel 은 단순히 데이터를 분배한 후 평균을 구한다. 사용 방식은 간단하지만,\nGPU 사용 불균형 문제가 발생할 수도 있다. 반면, DistributedDataParallel 은 각 GPU 를 위한 CPU 프로세스를 생성하여 GPU에 할당시킨다.\n그러다보니 멀티프로세싱 통신 규약을 정의 과정이 필요하다. 결국 모두의 방식을 알아두면 좋지만, 현재 Multi-GPU 를 사용할 수 있는 환경이 없어서\n테스트를 해보지 못하고 있다...")]),t._v(" "),s("h4",{attrs:{id:"hyperparameter-tuning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hyperparameter-tuning"}},[t._v("#")]),t._v(" Hyperparameter Tuning")]),t._v(" "),s("p",[t._v("  다음 주제는 하이퍼파라미터 튜닝이다. 배웠던 내용 중에 가슴에 남은 내용은, 하이퍼파라미터 튜닝보단 데이터를 어떻게 더 모을지, 전처리할 지에\n에너지를 쏟으라는 것이다. 그게 성능 향상 폭이 크다. 그래도 이러한 과정이 다 끝나고 마지막에 조금의 성능 향상을 위해 튜닝 개념은 반드시 알아야 한다.")]),t._v(" "),s("p",[t._v("  예전에 주로 사용한 하이퍼파라미터 튜닝 방식은, "),s("code",[t._v("grid")]),t._v("로 큰 범위를 찾고, 그 다음에 해당 주의로 "),s("code",[t._v("random")]),t._v(" 방식을 사용하여 찾는 것이다.\n최근에는 "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("BOHB")])]),t._v(" 라고, 베이지안 기법을 이용한 최적화 방식을 사용하기도 한다.\n이외에도 최적의 모델 구조를 찾는 "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("NAS")])]),t._v(" (Neural Architecture Search), "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("AutoML")])]),t._v("\n등이 있는데, 우리는 파이썬 라이브러리인 "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("Ray")])]),t._v(" 에 대해 알아본다.")]),t._v(" "),s("p",[s("strong",[t._v("Ray")]),t._v(" 는 Multi Node Multi Processin 을 지원하는 모듈로써, ML/DL 을 병렬처리하기 위해 개발되었다.\n현재 분산 병렬 학습을을 위한 표준으로 자리잡았고, 이중 "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("tune")])]),t._v(" 을 이용하여 하이퍼파라미터 튜닝을 할 수 있다.")]),t._v(" "),s("p",[t._v("  방식은 크게,")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("configuration 에 "),s("strong",[t._v("탐색 공간")]),t._v("을 지정하고,")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("학습 스케줄링 알고리즘")]),t._v("을 무엇을 사용할지 지정하고,")])]),t._v(" "),s("li",[s("p",[t._v("결과 "),s("strong",[t._v("출력 양식")]),t._v("을 지정한 뒤,")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("병렬 처리 양식")]),t._v("으로 학습을 진행하면 된다.")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'l1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tune"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sample_from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("l1_탐색범위지정"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'l2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tune"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sample_from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("l2_탐색범위지정"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lr'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tune"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loguniform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("leaning_rate_탐색범위시작"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" leaning_rate_탐색범위끝"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'batch_size'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tune"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("choice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("위의 코드처럼 탐색하고자 하는 metric 등의 범위를 configuration 으로 선언한다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("scheduler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ASHAScheduler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    metric"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'min'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    max_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("max_epoch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    grace_period"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    reduction_factor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("그리고 어떤 식으로 학습을 진행시킬 지 알고리즘을 선택한다. ASHA 방식은 탐색 과정 중 의미가 없다고 판단되는 metric 들을 중도에 포기하여,\n탐색 속도를 높인다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("reporter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CLIReporter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    metric_columns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accuracy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'training_iteration'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("탐색 과정을 CLI 환경에서 확인하도록 CLIReporter 를 사용하고, 어떤 정보를 확인할 것인지 입력한다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tune"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    partial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_cifar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'경로'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    resources_per_trial"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cpu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gpu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gpus_per_trial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    num_samples"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("num_samples"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scheduler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("scheduler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    progress_reporter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("reporter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("마지막으로 병렬 처리 방식으로 학습을 진행하면 된다. 이 또한 Multi-GPU 환경을 접하지 못해 직접 해보진 못했지만, 알아둬야 한다고 생각한다.")]),t._v(" "),s("h4",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("p",[t._v("OOM (Out Of Memory) 문제를 해결하려면?")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("nvidia-smi")]),t._v(" 처럼 파이썬 라이브러리인 "),s("code",[t._v("GPUtil")]),t._v(" 을 이용하여 매 epoch 마다 메모리가 늘어나는지 확인해보자.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("torch.cuda.empty_cache()")]),t._v(" 를 써보자. 학습시 이전 학습 내용 캐시가 남아있을 수도 있어서, 학습 직전에 삭제시키자. "),s("code",[t._v("del")]),t._v("은 사용하더라도\nGC 가 수거하기 전까지는 메모리를 잡아먹는다.")])]),t._v(" "),s("li",[s("p",[t._v("loop 계산 속 tensor 연산을 피하자. tensor 로 처리된 변수는 연산 시 GPU 메모리를 사용하는데, 메모리 buffer 까지 생겨 더욱 메모리를 잡아먹는다.\n그래서 연산이 필요하다면 ( ex. epoch 속 매 batch 별 loss 합 ), python 기본 객체로 변환해서 처리해야 한다.\n"),s("code",[t._v(".item()")]),t._v(" 을 붙이거나 "),s("code",[t._v("float()")]),t._v(" 등을 사용해 기본 객체로 만들자.")])]),t._v(" "),s("li",[s("p",[t._v("batch 사이즈를 1로 학습을 진행하여 코드 상의 오류는 아닌지 확인하자.")])]),t._v(" "),s("li",[s("p",[t._v("validation 및 inference 에서는 학습이 필요 없으므로 "),s("code",[t._v("torch.no_grad()")]),t._v(" 를 통해 메모리에서 자유로워지자.")])])]),t._v(" "),s("p",[t._v("이 외에도,")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("꼭 필요한 경우에만 Linear, LSTM 을 사용하자.")])]),t._v(" "),s("li",[s("p",[t._v("파이썬 라이브러리인 "),s("span",{staticStyle:{color:"#2454ff"}},[s("strong",[t._v("torchsummary")])]),t._v("을 사용하여 사이즈 입력 형태를 맞추자.")])])]),t._v(" "),s("br"),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"피어-세션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#피어-세션"}},[t._v("#")]),t._v(" 피어 세션")]),t._v(" "),s("p",[t._v("NPU 같이 AI 전용 칩을 위한 AI 전용 컴파일러를 ETRI 에서 개발하였다.")]),t._v(" "),s("p",[t._v("일단 소식은 알아두자..")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br")])}),[],!1,null,"32fdaa25",null);a.default=r.exports}}]);
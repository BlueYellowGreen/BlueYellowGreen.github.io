<template>
  <div class="container">

		<!-- Left -->
		<div class="res-col-left">

			<p class="big-header">Programming Language</p>
			<div data-tooltip="Python 기반의 프로젝트를 수행할 수 있으며, 문제점을 찾아 해결할 수 있습니다.">
				<div class="box-title">
					<span>Python</span>
					<span>70%</span>
				</div>
				<div class="box python-chart" />
			</div>

			<p class="big-header">Framework</p>
			<div data-tooltip="REST API를 설계할 수 있으며, 비즈니스 로직을 처리할 수 있습니다.">
				<div class="box-title">
					<span>FastAPI</span>
					<span>50%</span>
				</div>
				<div class="box fastapi-chart" />
			</div>

			<div data-tooltip="REST API를 설계할 수 있으며, 비즈니스 로직을 처리할 수 있습니다.">
				<div class="box-title">
					<span>Django</span>
					<span>45%</span>
				</div>
				<div class="box django-chart" />
			</div>

			<div data-tooltip="와이어프레임을 바탕으로 CSS 프레임워크를 이용하여 레이아웃을 구성할 수 있습니다.">
				<div class="box-title">
					<span>Vue.js</span>
					<span>60%</span>
				</div>
				<div class="box vuejs-chart" />
			</div>

			<p class="big-header">Library</p>
			<div data-tooltip="학습에 필요한 Dataset을 설계하고, Custom transforms 바탕으로 DataLoader를 구축하고, 모델을 설계하여 CLI 상에서 모델을 학습시킬 수 있습니다.">
				<div class="box-title">
					<span>PyTorch</span>
					<span>60%</span>
				</div>
				<div class="box pytorch-chart" />
			</div>

			<div data-tooltip="구조화된 데이터셋을 이용하여 스케쥴링 기능이 포함된 형태로 모델을 학습시킬 수 있습니다.">
				<div class="box-title">
					<span>TensorFlow</span>
					<span>40%</span>
				</div>
				<div class="box tensorflow-chart" />
			</div>

			<p class="big-header">Certificate</p>
			<p class="certificate-item">- TensorFlow Developer Certificate</p>
			<div class="small-text">
				<span class="small-text">&nbsp; &nbsp; 2021/10~2024/10</span>
				<span>&nbsp; &nbsp;</span>
				<a target="_blank" href="https://www.credential.net/131aff0a-d8b8-4cd8-a7a1-30fd96a6b173#gs.js2w9i">Verify</a>
			</div>

		</div>

		<!-- Right -->
		<div class="res-col-right">

			<p class="big-header">교육 이력</p>

			<hr class="hr-space">

			<p class="small-text">2021/08~2021/12</p>
			<p class="middle-header">구글 머신러닝 부트캠프 2021</p>
			<p class="middle-text">딥러닝 학습 및 프로젝트 수행</p>
			<p class="plain-text">Coursera DeepLearning Specialization 수료 및</p>
			<p class="plain-text">Kaggle TPS (Sep, 2021) 11%</p>
			
			<hr class="hr-space">

			<p class="small-text">2021/01~2021/12</p>
			<p class="middle-header">삼성 청년 소프트웨어 아카데미 (SSAFY)</p>
			<p class="middle-text">자료구조와 알고리즘 및 협업을 통한 개발에 대한 교육</p>
			<p class="plain-text">자료구조 및 알고리즘 학습을 바탕으로</p>
			<p class="plain-text">'Pipl', 'HomeFarmT', 'Urls' 프로젝트 진행</p>
			
			<hr class="hr-space">

			<p class="small-text">2018/06~2018/08</p>
			<p class="middle-header">[코더스하이] iOS APP 개발 특성화교육</p>
			<p class="middle-text">Swift를 이용한 iOS 앱 개발 교육</p>
			<p class="plain-text">Swift를 이용한 iOS 앱 개발 교육을 통한</p>
			<p class="plain-text">영어 회화 도우미 앱, 'For Dreamer'개발</p>
			
			<hr class="hr-space">

			<p class="small-text">2016/10~2016/10</p>
			<p class="middle-header">군장병 공개SW역량강화교육 개발 캠프과정</p>
			<p class="middle-text">안드로이드 앱 개발에 관한 교육</p>
			<p class="plain-text">Java & Node.js 및 API를 이용한</p>
			<p class="plain-text">주변 약국 위치 조회 앱 개발 교육</p>



		</div>

  </div>
</template>

<style scoped>
[data-tooltip] {
	margin-top: 10px;
	position: relative;
	z-index: 1;
}

[data-tooltip]::after {
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 110%;
	
	box-sizing: border-box;
	box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, .25);
	content: attr(data-tooltip);
	padding: 10px;
	background-color: #F8F9FA;
	border-radius: 5px;

	visibility: hidden;
	opacity: 0;
	transform: translateY(10px);
	transition: opacity .3s, transform .2s;
}

[data-tooltip]:hover::after {
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}

/* for responsive */
.container     { display: flex; justify-content: space-between; }
.res-col-left  { width: 40%; }
.res-col-right { width: 50%; right: 0; }
@media all and (max-width: 600px) {
	.res-col-left, .res-col-right { width: 100%; }
	.container { display: block; }
}

/* for title & content */
.big-header { font-size: 25px; margin: 30px 0 10px 0; }
.middle-header { font-size: 20px; margin: 0; }
.box-title { display: flex;	justify-content: space-between; }
.certificate-item {	margin-bottom: 0; }
.small-text {
	font-size: 11px;
	color: #c4c4c4;
	margin: 0;
}

.small-text::selection  { color: black; }
.middle-text::selection { color: black; }

.middle-text { font-size: 15px; color: #c4c4c4; margin: 0 0 10px 0;}
.plain-text { margin: 4px 0; }
.hr-space { margin: 15px 0 15px 0; }

/* for chart */
.box {
	box-sizing: border-box;
	border-radius: 3px;
	width: 100%;
	height: 20px;
}
.python-chart     { background: linear-gradient(to right, #68d3cc 40%, #68d3cc, #9adad4 70%, #f0f0f0 10%); }
.fastapi-chart    { background: linear-gradient(to right, #b07ce4 35%, #b07ce4, #d0a8f8 50%, #f0f0f0 10%); }
.django-chart     { background: linear-gradient(to right, #b07ce4 30%, #b07ce4, #d0a8f8 45%, #f0f0f0 10%); }
.vuejs-chart      { background: linear-gradient(to right, #b07ce4 40%, #b07ce4, #d0a8f8 60%, #f0f0f0 10%); }
.pytorch-chart    { background: linear-gradient(to right, #fd8080 40%, #fd8080, #ffb0b0 60%, #f0f0f0 10%); }
.tensorflow-chart { background: linear-gradient(to right, #fd8080 20%, #fd8080, #ffb0b0 40%, #f0f0f0 10%); }
</style>
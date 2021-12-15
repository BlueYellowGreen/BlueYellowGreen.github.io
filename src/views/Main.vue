<template>
  <div class="mt-4">

    <!-- Header - Breadcrumb -->
    <div class="d-flex justify-content-end">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item current">Main</li>
        </ol>
      </nav>
    </div>

    <!-- Body -->
    <div>

      <div class="mt-3 container p-0">
        <div class="row">

          <!-- Bar Chart -->
          <div class="col-md-5 col-12">

            <h4>Programming Language</h4>
            <div
              class="mt-3 animate__animated animate__fadeIn"
              data-tooltip="Python 기반의 프로젝트를 수행할 수 있으며,
              문제점을 찾아 해결할 수 있습니다."
            >
              <div class="d-flex justify-content-between small-text">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div class="box python-box"></div>
            </div>


            <h4 class="mt-5">Framework</h4>
            <div class="animate__animated animate__fadeIn">
              <div data-tooltip="REST API를 설계할 수 있으며,
                비즈니스 로직을 처리할 수 있습니다.">
                <div class="mt-3 d-flex justify-content-between small-text">
                  <span>FastAPI</span>
                  <span>50%</span>
                </div>
                <div class="box fastapi-box"></div>
              </div>

              <div data-tooltip="REST API를 설계할 수 있으며,
                비즈니스 로직을 처리할 수 있습니다.">
                <div class="mt-2 d-flex justify-content-between small-text">
                  <span>Django</span>
                  <span>45%</span>
                </div>
                <div class="box django-box"></div>
              </div>

              <div data-tooltip="와이어프레임을 바탕으로 CSS 프레임워크를
                이용하여 레이아웃을 구성할 수 있습니다.">
                <div class="mt-2 d-flex justify-content-between small-text">
                  <span>Vue.js</span>
                  <span>60%</span>
                </div>
                <div class="box vuejs-box"></div>
              </div>
            </div>


            <h4 class="mt-5">Library</h4>
            <div class="mb-5 animate__animated animate__fadeIn">
              <div data-tooltip="학습에 필요한 Dataset을 설계하고,
                Custom transforms 바탕으로 DataLoader를 구축하고,
                모델을 설계하여 CLI 상에서 모델을 학습시킬 수 있습니다.">
                <div class="mt-3 d-flex justify-content-between small-text">
                  <span>PyTorch</span>
                  <span>70%</span>
                </div>
                <div class="box pytorch-box"></div>
              </div>

              <div data-tooltip="구조화된 데이터셋을 이용하여 스케쥴링 기능이
                포함된 형태로 모델을 학습시킬 수 있습니다.">
                <div class="mt-2 d-flex justify-content-between small-text">
                  <span>TensorFlow</span>
                  <span>40%</span>
                </div>
                <div class="box tensorflow-box"></div>
              </div>
            </div>

          </div>

          <!-- History -->
          <div class="offset-md-1 col-md-6 col-12">
            <h4>교육 이력</h4>

            <hr class="mt-4">

            <div class="animate__animated animate__fadeIn animate__slow">
              <h5 class="mt-4">군장병 공개SW역량강화교육 개발 캠프과정</h5>
              <h6>안드로이드 앱 개발에 관한 교육</h6>
              <div class="mt-4">
                <span class="m-0">Java와 node.js를 이용한 안드로이드 앱</span>
                <span class="small-text"> (주변 약국 위치 조회)</span>
                <p class="mt-1">개발 교육</p>
              </div>
            </div>

            <hr class="mt-4">

            <div class="animate__animated animate__fadeIn animate__slow">
              <h5 class="mt-4">[코더스하이] iOS APP 개발 특성화교육</h5>
              <h6>Swift를 이용한 iOS 앱 개발 교육</h6>
              <div class="mt-4">
                <p class="m-0">Swift를 이용한 iOS앱 개발 교육을 통한 영어 회화 도우미</p>
                <p class="mt-1">앱, 'For Dreamer'개발</p>
              </div>
            </div>

            <hr class="mt-4">

            <div class="animate__animated animate__fadeIn animate__slow">
              <h5 class="mt-4">삼성 청년 소프트웨어 아카데미 (SSAFY)</h5>
              <h6>자료구조와 알고리즘 및 협업을 통한 개발에 대한 교육</h6>
              <div class="mt-4">
                <p class="m-0">자료구조 및 알고리즘 학습을 바탕으로 'Pipl', 'HomeFarmT',</p>
                <p class="mt-1">'Urls' 프로젝트 진행</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
[data-tooltip] {
  position: relative;
  cursor: default;
}

[data-tooltip]::after {
  position: absolute;
  width: 100%; /* data- 적용된 대상 기준 */
  left: 110%;
  bottom: 0;
  /* text-align: center; */
  box-sizing: border-box; /* 테두리를 포함한 크기를 고려하겠다! */

  content: attr(data-tooltip); /* data- 뒤의 정보를 받아와 보여주기 */
  padding: 10px;
  padding-left: 10px;
  background-color: #F8F9FA;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, .25);

  /* 처음에는 보이지 않게 하기 */
  visibility: hidden; 
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s, transform 0.2s;
}

[data-tooltip]:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.current { color: #20C997; }

.small-text { font-size: 0.9rem; }

.bar-chart:after {
  box-sizing: border-box;
  top: -50px;
  width: 100%;
  height: 100%;
  background-color: grey;
}

.box {
  box-sizing: border-box;
  /* border: 1px solid black; */
  border-radius: 3px;
  width: 100%;
  height: 20px;
}

/* .python-box     { background: linear-gradient(to right, #42CDC4 40%, #42CDC4, #75D8D0 80%, #f0f0f0 10%); } */
.python-box     { background: linear-gradient(to right, #68d3cc 40%, #68d3cc, #9adad4 80%, #f0f0f0 10%); }
/* .fastapi-box    { background: linear-gradient(to right, #AB64F4 35%, #AB64F4, #C492F7 50%, #f0f0f0 10%); } */
.fastapi-box    { background: linear-gradient(to right, #b07ce4 35%, #b07ce4, #d0a8f8 50%, #f0f0f0 10%); }
.django-box     { background: linear-gradient(to right, #b07ce4 30%, #b07ce4, #d0a8f8 45%, #f0f0f0 10%); }
.vuejs-box      { background: linear-gradient(to right, #b07ce4 40%, #b07ce4, #d0a8f8 60%, #f0f0f0 10%); }
/* .pytorch-box    { background: linear-gradient(to right, #FF6B6B 40%, #FF6B6B, #FF9D9D 70%, #f0f0f0 10%); } */
.pytorch-box    { background: linear-gradient(to right, #fd8080 40%, #fd8080, #ffb0b0 70%, #f0f0f0 10%); }
.tensorflow-box { background: linear-gradient(to right, #fd8080 20%, #fd8080, #ffb0b0 40%, #f0f0f0 10%); }

h6 { color: #B2B2B2; }
</style>
<template>
  <div>
    <div>
      <span class="big-title">Urls</span>
      &nbsp; &nbsp;
      <span class="title-description">태그 추천을 바탕으로 URL 공유 및 관리를 쉽게해주는 서비스</span>
      
      <hr>
      <br>
    </div>

    <div>
      <div class="container">
        <div class="col-left-info-title">
          <p>담당 직무</p>
        </div>
        <div class="col-right-info-content">
          <p>AI</p>
        </div>
      </div>
      <div class="container">
        <div class="col-left-info-title">
          <p>참여 인원</p>
        </div>
        <div class="col-right-info-content">
          <p>5명</p>
        </div>
      </div>
      <div class="container">
        <div class="col-left-info-title">
          <p>개발 환경</p>
        </div>
        <div class="col-right-info-content">
          <p>AWS EC2, Vue 3, Quasar, Chrome Extension, Android, FastAPI</p>
        </div>
      </div>
      <div class="container">
        <div class="col-left-info-title">
          <p>구현 사항</p>
        </div>
        <div class="col-right-info-content">
          <p>URL Tag 추천, 카테고리 기반 URL 추천</p>
        </div>
      </div>

      <br>
      <br>

      <div>
        <!-- <img src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/Urls.png?raw=true" alt="Urls Architecture"> -->
        <img class="img-center" src="/assets/img/Urls.png" alt="Urls Architecture">

        <br>
        <br>
        <hr>
        <br>
      </div>
    </div>

    <div>
      <div>
        <span class="sub-title">프로젝트 개요</span>
      </div>
      <br>
      <br>
      <div>
        <div class="img-text-container">
          <div class="col-left-img">
            <!-- <img src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/Urls-Android.png?raw=true" alt="Android Layout"> -->
            <img src="/assets/img/Urls-Android.png" alt="">
          </div>
          <div class="col-right-img">
            <!-- <img src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/Urls-Android.png?raw=true" alt="Chrome Extension Layout"> -->
            <img src="/assets/img/Urls-Extension.png" alt="Chrome Extension Layout">
          </div>
        </div>
        <br>
        <div class="img-web">
          <!-- <img src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/Urls-Web.png?raw=true" alt="Web Layout"> -->
          <img src="/assets/img/Urls-Web.png" alt="Web Layout">
        </div>
        <br>
        <p class="img-description">&lt;Android / Chrome Extention / Web&gt;</p>
        <br>
        <div>
          <p><span class="word-highlight">Android</span> 모바일 환경에서는 Urls App과 Chrome 인터넷을 이용하여 URL을 관리할 수 있습니다.</p>
          <p><span class="word-highlight">구글 확장프로그램</span>을 통하여 간편하게 URL을 저장할 수 있습니다.</p>
          <p><span class="word-highlight">Urls 홈페이지</span>에서 전체 URL들을 관리할 수 있습니다.</p>
        </div>
      </div>
      <br>
      <br>
      <div class="img-text-container">
        <div class="col-left-wide-img">
          <!-- <img src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/Before-Paste.png?raw=true" alt="Before Paste URL"> -->
          <img src="/assets/img/Before-Paste.png" alt="Before Paste URL">
        </div>
        <div class="col-right-text">
          <p>북마크하고 싶은 URL을 <span class="word-highlight">복사</span>한 뒤,</p>
          <p>Android / Chrome / Web 어디에서든지</p>
          <p><span class="word-highlight">붙여넣기</span> 하면 됩니다.</p>
        </div>
      </div>
      <br>
      <div class="img-text-container">
        <div class="col-left-text">
          <p>URL을 붙여넣으면,</p>
          <p>해당 URL html 내용을 바탕으로</p>
          <p><span class="word-highlight">태그들을 추천</span>해줍니다.</p>
          <p>또한, 카테고리를 지정함으로써</p>
          <p>다른 <span class="word-highlight">URL을 추천</span>받으실 수 있습니다.</p>
        </div>
        <div class="col-right-wide-img">
          <!-- <img src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/After-Paste.png?raw=true" alt="After Paste URL"> -->
          <img src="/assets/img/After-Paste.png" alt="After Paste URL">
        </div>
      </div>
      <br>
      <br>
      <div class="img-text-container">
        <!-- <img class="col-left-same-wide-img" src="https://github.com/BlueYellowGreen/BlueYellowGreen.gith/ub.io/tree/main/.vuepress/public/assets/img/User-Invitation.png?raw=true" alt="User Invite/"> -->
        <img class="col-left-same-wide-img" src="/assets/img/User-Invitation.png" alt="User Invite">
        <!-- <img class="col-right-same-wide-img" src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/Drag-Selection.png?raw=true" alt="Drag to add memo"> -->
        <img class="col-right-same-wide-img" src="/assets/img/Drag-Selection.png" alt="Drag to add memo">
      </div>
      <div class="text-center">
        <div class="text-margin">
          <span>URL 사용자를 초대해서 URL을 공유할 수 있고,</span>
        </div>
        <div class="text-margin">
          <span>권한을 설정하여 편집 / 보기 권한을 부여할 수 있습니다.</span>
        </div>
        <br>
        <div class="text-margin">
          <span>그리고 북마크한 URL 내용에서 원하는 부분을</span>
        </div>
        <div class="text-margin">
          <span>드래그하여 해당 URL의 메모로 저장할 수 있습니다.</span>
        </div>
      </div>
      <br>
      <hr>
      <br>
    </div>

    <div>
      <div>
        <span class="sub-title">koNLPy 기반 태그 추천, 거리 기반 URL 추천</span>
      </div>
      <br>
      <br>
      <div>
        <br>
        <!-- <img src="https://github.com/BlueYellowGreen/BlueYellowGreen.github.io/tree/main/.vuepress/public/assets/img/Pipeline.png?raw=true" alt="Tag Recommendation Pipeline"> -->
        <img src="/assets/img/Pipeline.png" alt="Tag Recommendation Pipeline">
      </div>
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.big-title { font-size: 35.2px; font-weight: bold; color: #3EAF7C;  }

.container                 { display: flex; justify-content: flex-start; }
.img-text-container        { display: flex; justify-content: space-between; }
.col-left-info-title       { width: 13%; font-weight: bold;}
.col-right-info-content    { width: 85%; }
.col-left-img              { width: 22%; height: auto; }
.col-right-img             { width: 70%; height: auto;}
.col-left-wide-img         { width: 50%; height: auto; }
.col-right-text            { width: 45%; margin: auto 0; }
.col-left-text             { width: 45%; margin: auto 0; }
.col-right-wide-img        { width: 50%; height: auto; }
.col-left-same-wide-img    { width: 47%; height: auto; }
.col-right-same-wide-img   { width: 47%; height: auto; }
.text-center               { width: 55%; margin: 40px auto 0 auto; }
@media all and (max-width: 600px) {
  .col-left-info-title     { width: 28%; }
  .col-right-info-content  { width: 72%; word-break: break-word; }
  .img-text-container      { display: block; }
  .col-left-img            { width: 60%; margin: 0 auto; }
  .col-right-img           { width: 100%; margin: 20px auto 0 auto; }
  .col-left-wide-img       { width: 100% }
  .col-right-text          { width: 100%; margin-top: 20px; }
  .col-left-text           { width: 100%; }
  .col-right-wide-img      { width: 100%; margin-top: 20px; }
  .col-left-same-wide-img  { width: 100%; }
  .col-right-same-wide-img { width: 100%; }
  .text-center             { width: 100%; }
}

.container p { margin: 4px 0; }

.img-center { display: block; margin: 0 auto;}

.sub-title { font-size: 25px; font-weight: bold; }

.img-web         { width: 70%; margin: 0 auto; }
.img-description { font-weight: bold; text-align: center; }
.word-highlight  { font-weight: bold; color: #3EAF7C; }
.text-margin     { margin: 16px 0; text-align: center; }
</style>
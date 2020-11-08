<template>
  <div class="content3_bg" :class="$mq">
    <div class="video_wrap" :class="$mq">
      <h2 class="content-title movie" :class="$mq">
        <span>BANGAGAN'S</span> MOVIE
      </h2>
      <div class="inner" :class="$mq">
        <div class="video" :class="$mq">
          <iframe src="https://youtu.be/Lf8FM29SCy4" frameborder="5"></iframe>
        </div>
        <div class="scrollWrap" :class="$mq">
          <ul>
            <li>
              <a href="#a">
                <img src="../assets/img/1572841458_LIST.jpg" alt="은율리얼크림소개영상 바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1548296944_LIST.jpg" alt="은율 리얼 4종 크림 소개영상 바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1548297061_LIST.jpg" alt="은율 내추럴 파워 크림 소개영상 바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1548297132_LIST.jpg" alt="이지혜-인터뷰 영상바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1548395636_LIST.jpg" alt="광고영상 바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1548395956_LIST.jpg" alt="은율 내추럴파워크림 sns 영상 바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1548663604_LIST.jpg" alt="발케어크림 소개영상바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1569461858_LIST.jpg" alt="은율꿀밤스틱&힐링패드 소개영상바로가기" />
                <span></span>
              </a>
            </li>
            <li>
              <a href="#a">
                <img src="../assets/img/1570668034_LIST.jpg" alt="은율토너4종소개영상 바로가기" />
                <span></span>
              </a>
            </li>
          </ul>
        </div>
        <div class="scroll-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content3_bg {
  @extend contentTitle;
  h2.content-title {
    color: #fff;
    &.mobile {
      font-size: calc(2.3vw + 20px);
    }
  }
  background-size: 100%;
  padding: 110px 0 120px 0;
  .movie {
    color: #fff;
  }
  .video_wrap {
    max-width: 1200px;
    margin: 0 auto;
    .inner {
      max-width: 1200px;
      padding: 60px 60px 0 60px;
      background-color: #fff;
      &.mobile,
      &.tablet,
      &.labtop {
        margin: 0;
        padding: 0;
        background: transparent;
      }
      div.video {
        iframe {
          width: 1080px;
          height: 607px;
        }
        &.labtop,
        &.tablet,
        &.mobile {
          text-align: center;
          iframe {
            border: 30px solid #fff;
            width: 80vw;
          }
        }
      }
      .scrollWrap {
        max-width: 1080px;
        margin: 0 auto;
        overflow-x: scroll;
        &.labtop,
        &.tablet,
        &.mobile {
          display: none;
        }
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          border: 3px solid #fff;
        }
        &::-webkit-scrollbar-button:start:decrement,
        &::-webkit-scrollbar-button:end:increment {
          display: block;
          height: 10px;
          background-color: #0000;
        }
        &::-webkit-scrollbar-track {
          background: #efefef;
          -webkit-border-radius: 10px;
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
        }
        &::-webkit-scrollbar-thumb {
          height: 50px;
          width: 50px;
          background: rgba(51, 51, 51, 0.9);
          -webkit-border-radius: 8px;
          border-radius: 8px;
          -webkit-box-shadow: inset 0 0 4px rgba(51, 51, 51, 0.5);
        }
      }
      ul {
        width: 3820px;
        margin: 30px auto;
        height: 220px;
        border: none;
        white-space: nowrap;
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        li {
          display: inline-block;
          margin-right: 30px;
          &:hover a:after {
            content: '';
            display: block;
          }
        }
      }
    }
  }
}
</style>
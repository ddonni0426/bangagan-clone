<template>
  <section class="main" :class="$mq">
    <ul class="carousel" :class="$mq">
      <!--  메인 이미지1 -->
      <li class="scene scene-1">
        <picture class="main-1 picture show" :class="$mq" data-scene="1">
          <source media="(max-width: 640px)" srcset="../assets/img/m_main1.jpg" />
          <img :class="$mq" src="../assets/img/MAIN_1564983982.jpg" alt="방앗간화장품-은율 폼클렌저" />
        </picture>
        <div class="descWrap show" :class="$mq" data-scene="1">
          <p class="desc desc-1">
            <strong :class="$mq">
              자연에서 찾은 천연 원료의 힘
              <br />건강한 아름다움을 위해
              <br />은율로 시작하세요
              <br />
            </strong>
            <small :class="$mq">
              최적의 산지에서 찾은 좋은 원료의 힘을 느껴보세요
              <br />선조의 지혜를 현대 기술에 녹여
              <br />은율로 재탄생
              하였습니다
            </small>
          </p>
          <button :class="$mq">만나러 가기</button>
        </div>
      </li>
      <!--  메인 이미지1 끝-->
      <li class="scene scene-2">
        <picture class="main-2 picture hidden" :class="$mq" data-scene="2">
          <source media="(max-width: 640px)" srcset="../assets/img/m_main2.jpg" alt="방앗간 화장품 은율" />
          <img :class="$mq" src="../assets/img/MAIN1_1548829795.jpg" alt="방앗간화장품-은율 폼클렌저" />
        </picture>
        <div class="descWrap hidden" :class="$mq" data-scene="2">
          <p class="desc desc-2">
            <strong :class="$mq">
              신윤복의 미인도 속의 여인의
              <br />찰떡 같은 피부를 계속
              <br />부러워만 하실 건가요?
              <br />
            </strong>
            <small :class="$mq">
              그 시절 하이얀 피부는 미인의 절대조건 중 하나
              <br />찰떡은 선조들의 피부관리 노하우에서 영감을 얻어
              <br />계승·발전시킨 프리미엄 기능성 라인입니다.
            </small>
          </p>
          <button :class="$mq">만나러 가기</button>
        </div>
      </li>
      <!--  메인 이미지3 -->
      <li class="scene scene-3">
        <picture class="main-3 picture" :class="$mq" data-scene="3">
          <source media="(max-width: 640px)" srcset="../assets/img/m_main3.jpg" />
          <img :class="$mq" src="../assets/img/MAIN_1571903003.jpg" alt="방앗간화장품-은율 폼클렌저" />
        </picture>
        <div class="descWrap" :class="$mq" data-scene="3">
          <p class="desc desc-3">
            <strong :class="$mq">
              편견은 지우고
              <br />개성은 살렸다
              <br />나를 가장 나답게!
              <br />
            </strong>
            <small :class="$mq">
              나만의 스타일을 완성 시키는 감추고 싶은 시크릿
              <br />남다른 개성을 즐기는
              <br />나에게 가장 잘 어울리는 클린앤프레시!
            </small>
          </p>
          <button :class="$mq">만나러 가기</button>
        </div>
      </li>
      <!--  메인 이미지3 끝-->
    </ul>
    <!--  메인 설명 -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      sid: null,
    };
  },
  mounted() {
    const cnt = document.querySelectorAll('.scene');
    this.sid = this.$slideHandler(cnt.length);
  },
};
</script>

<style lang="scss" scoped>
section.main {
  margin: 0 auto;
  transition: 0.5s;
  ul.carousel {
    .show {
      @include setZ_index(0);
    }
    &.mobile {
      padding-top: 60px;
    }
  }
  &.labtop,
  &.tablet {
    margin-top: 90px;
  }
  // 배경 이미지들 시작
  .scene-1 {
    picture {
      position: absolute;
      animation: fadeIn 1s ease forwards;
      @include setZ_index(5); //값 달라지는 부분
      &.hidden {
        animation: fadeOut 1s ease forwards;
        @include setZ_index(10);
      }
      img {
        min-width: 100vw;
      }
    }
    .descWrap {
      @include setZ_index(5); //값 달라지는 부분
      animation: fadeIn 1s ease forwards;
      @extend .commonDesc;
      &.hidden {
        animation: fadeOut 1s ease forwards;
        @include setZ_index(-10);
      }
    }
  } //이미지1 끝

  //이미지2 t시작
  .scene-2 {
    picture {
      position: absolute;
      @include setZ_index(-1);
      &.show {
        animation: fadeIn 1s ease forwards;
        @include setZ_index(10);
      }
      img {
        min-width: 100vw;
      }
    }
    .descWrap {
      animation: fadeOut 1s ease forwards;
      @include setZ_index(-1);
      @extend .commonDesc;
      &.show {
        animation: fadeIn 1s ease forwards;
        @include setZ_index(10);
      }
    }
  }
  //이미지2끝
  .scene-3 {
    picture {
      position: absolute;
      opacity: 0;
      @include setZ_index(-2);
      &.show {
        animation: fadeIn 1s ease forwards;
        @include setZ_index(10);
      }
      img {
        min-width: 100vw;
      }
    }
    .descWrap {
      opacity: 0;
      animation: fadeOut 1s ease forwards;
      @include setZ_index(-3);
      @extend .commonDesc;
      &.show {
        animation: fadeIn 1s ease forwards;
        @include setZ_index(10);
      }
    }
  }
}
</style>

<template>
  <div class="cont5Wrap" :class="$mq">
    <h2 class="content-title" :class="$mq">
      <span>BANGAGAN</span> NEWS
    </h2>
    <carousel :loop="true" :autoWidth="true" :nav="true" :dots="false" :items="3" :margin="10">
      <div class="item" :class="$mq">
        <img src="../assets/img/1550649332_LIST.jpg" alt="대만 왓슨스 입점" />
        <dl>
          <dt>대만 왓슨스 입점 - 클린앤프레시 대...</dt>
          <dd>
            은율 클린앤프레시 브랜드 제품이 대만 왓슨스 론칭 행사에서 뜨거운
            반응을 보이면서 대만 내 왓슨...
          </dd>
        </dl>
      </div>
      <div class="item">
        <img src="../assets/img/1564385395_LIST.jpg" alt="베트남 메디케어 입점" />
        <dl>
          <dt>베트남 메디케어 입점 - 스킨 케어를 ...</dt>
          <dd>
            베트남 드럭스토어의 양대산맥중 하나로 손꼽히는 메디케어에 '은율'이
            2019년 입점 확정! 메디케어는 2001년에 설립된 베트남 최초의 드럭
            스토어로...
          </dd>
        </dl>
      </div>
      <div class="item">
        <img src="../assets/img/1564537880_LIST.jpg" alt="러시아 진출" />
        <dl>
          <dt>러시아 진출 - 클린앤프레시가 러시아...</dt>
          <dd>
            은율 클린앤프레시 브랜드가 320여개의 매장을 보유한 러시아 최대
            뷰티쇼핑몰 "Golden apple ...
          </dd>
        </dl>
      </div>
      <div class="item">
        <img src="../assets/img/1550649254_LIST.jpg" alt="미국 진출" />
        <dl>
          <dt>미국 진출 - 클린앤프레시 미국 전역...</dt>
          <dd>
            ㈜방앗간화장품 럭셔리 뷰티브랜드 은율 클린앤프레시 가 미국에
            1500여개의 점포를 보유한 Bed Bath&nb...
          </dd>
        </dl>
      </div>
      <!-- <span class="side-blank"></span> -->
    </carousel>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss" scoped>
.cont5Wrap {
  &.mobile {
    div.owl-carousel div.owl-stage-outer div.item {
      max-width: 130px;
      img {
        max-width: 100%;
      }
      dl {
        max-width: 130px;
        dt {
          font-size: 16px;
        }
        dd {
          font-size: 14px;
        }
      }
    }
  }

  @extend contentTitle;
  h2.mobile {
    font-size: calc(2.3vw + 20px);
  }
  padding: 40px 0;
  background-color: #f5f5f5;
  div.owl-carousel {
    max-width: 80%;
    margin: 0 20px;
    div.owl-stage-outer {
      margin: 0 20px;
      div.item {
        width: 390px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    dl {
      padding: 25px;
      box-sizing: border-box;
    }
    dl dt {
      font-size: 20px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    dl dd {
      height: 3.5em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.8;
      font-size: 17px;
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis; /*white-space: nowrap;*/
      word-wrap: break-word;
    }
  }
}

/*컨텐츠5*/
</style>

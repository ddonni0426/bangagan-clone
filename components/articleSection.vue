<template>
  <div id="sectionsWrap" :class="$mq">
    <!-- 컨텐츠 시작 -->
    <section id="content1">
      <section-one></section-one>
    </section>
    <section id="content2">
      <section-two></section-two>
    </section>
    <section id="content3">
      <div class="content3_bg">
        <section-three></section-three>
      </div>
    </section>
    <section id="content4">
      <section-four></section-four>
    </section>
    <section id="content5">
      <div>
        <section-five></section-five>
      </div>
    </section>
  </div>
</template>

<script>
import sectionOne from './sectionOne.vue';
import sectionTwo from './sectionTwo.vue';
import sectionThree from './sectionThree.vue';
import sectionFour from './sectionFour.vue';
import sectionFive from './sectionFive.vue';
export default {
  components: {
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
  },
};
</script>

<style lang="scss" scoped>
#sectionsWrap {
  .titleBg {
    height: 305px;
    @extend contentTitle;
    h2.content-title {
      line-height: 305px;
    }
  }
  &.pc {
    margin: 0 auto;
    & #content3 {
      min-width: 100%;
      background: url('../assets/img/conBox03_img01.jpg') no-repeat;
      background-size: 100% 500px;
    }
  }
  #content1,
  #content2 {
    max-width: 1200px;
    margin: 0 auto;
  }
  #content3 {
    max-width: 100vw;
    & > div {
      max-width: 100vw;
      margin: 90px auto;
      box-sizing: border-box;
    }
    background: url('../assets/img/conBox03_img01.jpg') no-repeat;
    background-size: 100% 500px;
  }
  #content5 {
    width: 100%;
    padding: 120px 0;
  }
}
</style>

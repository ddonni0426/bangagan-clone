<template>
  <div id="pages">
    <!-- 메인 이미지 슬라이드-->
    <div class="mains" :class="$mq">
      <main-slider></main-slider>
    </div>
    <!-- 제품 -->
    <div class="sections">
      <article-section></article-section>
    </div>
  </div>
</template>

<script>
import articleSection from '../components/articleSection.vue';
import MainSlider from '../components/MainSlider.vue';
export default {
  components: { articleSection, MainSlider },
};
</script>

<style lang="scss" scoped>
#pages {
  position: relative;
  .mains.pc::after {
    display: block;
    content: '';
    padding-bottom: 900px;
  }
  .sections {
    min-height: 100%;
  }
}
</style>

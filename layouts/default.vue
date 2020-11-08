<template>
  <div id="body" :class="$mq">
    <div class="dropdownContainer" @mouseleave.prevent="mouseLeave">
      <dropdown-component @mouseOut="mouseEnter"></dropdown-component>
    </div>
    <header-component @dropDown="mouseEnter"></header-component>
    <!-- pages -->
    <Nuxt></Nuxt>
    <div class="footer">
      <footer-component></footer-component>
    </div>
    <div class="arrowTop beforeActive">
      <button class="goTopBtn" @click="goTop">
        <img src="../assets/img/iconTop.png" alt="위로 이동" />
      </button>
    </div>
  </div>
</template>

<script>
import headerComponent from '../components/headerComponent.vue';
import sectionFive from '../components/sectionFive.vue';
import footerComponent from '../components/footerComponent.vue';
import DropdownComponent from '../components/dropdown.vue';

export default {
  components: {
    headerComponent,
    sectionFive,
    footerComponent,
    DropdownComponent,
  },
  methods: {
    mouseLeave() {
      //드롭다운 메뉴 접기
      document.querySelector('.dropdownContainer').style.display = 'none';
      this.$on_offHandler('off', null, 'onDrop');
    },
    mouseEnter() {
      //드롭다운 메뉴 펼치기
      document.querySelector('.dropdownContainer').style.display = 'block';
    },
    goTop() {
      (() => {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: document.querySelector('body').offsetTop,
        });
      })();
    },
  },
  mounted() {
    let screenH = (5 / innerWidth) * 100;
    window.addEventListener('resize', () => {
      screenH = (5 / innerWidth) * 100;
    });
    window.addEventListener('scroll', () => {
      if (window.pageYOffset < screenH) {
        this.$goTopHandler('off');
      } else {
        this.$goTopHandler('on');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#body {
  width: 100vw;
  min-height: 100%;
  .dropdownContainer {
    display: none;
    transition: 0.36s;
  }

  /*위로 이동 화살표*/
  div.arrowTop {
    position: fixed;
    right: 50px;
    bottom: 50px;
    min-width: 60px;
    height: 60px;
    z-index: 100;
    .goTopBtn {
      outline: none;
      img {
        min-width: 100%;
        height: 100%;
        padding: 0;
      }
    }
    &.beforeActive {
      display: none;
    }
  }
  /*위로 이동 화살표*/
}
</style>

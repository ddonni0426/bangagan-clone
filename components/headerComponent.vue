<template>
  <div id="menu-wrap" class="scroll" :class="$mq">
    <a class="skip" href="#">본문바로가기</a>
    <nav class="menu" :class="$mq">
      <ul class="lang scroll">
        <li class="selected">
          <a href="#">KR</a>
        </li>
        <li>
          <a href="#">EN</a>
        </li>
      </ul>
      <ul class="menu-list scroll">
        <li>
          <h1 class="logo">
            <nuxt-link to="/">
              <img src="~/assets/img/logo_on.png" alt="방앗간화장품 로고" />
            </nuxt-link>
          </h1>
        </li>
        <li class="menuElem">
          <nuxt-link to="/">BRAND STORY</nuxt-link>
        </li>
        <li class="menuElem dropdown" @mouseenter.prevent="mouseOn">
          <nuxt-link to="/">PRODUCTS</nuxt-link>
        </li>
        <li class="menuElem">
          <nuxt-link to="/">NEWS</nuxt-link>
        </li>
        <li class="menuElem">
          <nuxt-link to="/">MEDIA</nuxt-link>
        </li>
        <li class="search" :class="$mq">
          <span>
            <input type="search" placeholder="제품명을 검색해보세요" :class="$mq" />
            <button>
              <img src="~/assets/img/icon_search_on.png" alt="검색버튼" />
            </button>
          </span>
        </li>
      </ul>
    </nav>
    <!-- 모바일 메뉴 -->
    <nav class="m_menu" :class="$mq">
      <ul>
        <li class="m_menuBtn">
          <button type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </li>
        <li class="logo" :class="$mq">
          <h1>
            <a href="#">
              <img src="../assets/img/logo_on.png" alt="방앗간 화장품 로고" />
            </a>
          </h1>
        </li>
        <li class="m_search">
          <a href="#">
            <img src="../assets/img/icon_search_on.png" alt="모바일 검색버튼" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    mouseOn() {
      this.$emit('dropDown');
      this.$on_offHandler('on', '#menu-wrap', 'onDrop');
    },
  },
  mounted() {
    const menu = document.querySelector('#menu-wrap.scroll');
    window.addEventListener('scroll', () => {
      if (!menu.classList.contains('pc')) {
        return;
      }
      if (window.pageYOffset > 50) {
        this.$scrollHandler('on');
      } else {
        this.$scrollHandler('off');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#menu-wrap {
  @include setPosition(fixed, 0, 0, 0, none, 100);
  @include setFlex(flex, center, none);
  height: 135px;
  background: transparent;
  transition: 0.3s;
  &.onDrop {
    background: #fff;
  }
  &.onScr {
    top: -45px;
    background: #fff;
    box-shadow: 1px 1px 1px rgba($color: #777, $alpha: 0.3);
  }
  .menu {
    display: none;
    top: -45px;
    height: 90px;
    &.pc {
      display: block;
      @include setPosition(fixed, 0, null, null, null, 1);
      max-width: 1200px;
      height: 135px;
      background: transparent;
      font-weight: 700;
      ul.lang {
        @include setFlex(flex, flex-end, center);
        height: 45px;
        transition: 0.2s;
        &.onScr {
          transform: translateY(-45px);
        }
        li {
          padding: 0 0.3em;
          a {
            color: $primary-color;
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
          }
          &.selected a {
            opacity: 1;
            border-bottom: 1px solid $primary-color;
          }
        }
      }
      ul.menu-list {
        @include setFlex(flex, center, center);
        height: 90px;
        transition: 0.2s;
        &.onScr {
          transform: translateY(-45px);
        }
        h1.logo {
          width: 233px;
          height: 29px;
          padding-right: 2.44rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        li.menuElem {
          @include setFlex(flex, center, center);
          width: 100%;
          height: 100%;
          opacity: 0.7;
          a {
            @include setFlex(inline-flex, center, center);
            width: 100%;
            height: 100%;
            padding-right: 2.44rem;
          }
        }
        li.search {
          display: flex;
          width: 77rem;
          height: 80px;
          padding: 20px 0;
          span {
            display: inline-flex;
            width: 100%;
            border-bottom: 1px solid #343434;
            & input[type='search'] {
              width: 100%;
              background: transparent;
              color: #666;
              font-size: 12px;
              font-weight: 100;
              border: none;
              outline: none;
            }
            button {
              width: 18px;
              height: 18px;
              padding: 0;
              line-height: 40px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  &.labtop,
  &.tablet,
  &.mobile {
    height: 90px;
    background: #fff;
  }
  &.mobile {
    width: 100%;
    height: 60px;
  }
  // 모바일 메뉴 css
  nav.m_menu {
    display: none;
    &.labtop,
    &.tablet,
    &.mobile {
      display: flex;
      & ul {
        padding: 0 20px;
        @include setFlex(flex, space-between, center);
        min-width: 100vw;
        li {
          &.logo.mobile {
            h1 a {
              display: block;
              width: 233px;
              height: 29px;
              line-height: 30px;
            }
          }
          &.m_menuBtn {
            display: inline-flex;
            button {
              @include setFlex(flex, space-evenly, null);
              flex-direction: column;
              width: 40px;
              height: 30px;
              outline: none;
              span {
                display: block;
                height: 2px;
                min-width: 100%;
                background: $primary-color;
              }
            }
          }
          &.m_search {
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>

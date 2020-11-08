<template>
  <div class="dropdown-menu">
    <div class="wrapper">
      <div class="product">
        <h2>PRODUCTS</h2>
      </div>
      <div class="brandList">
        <ul>
          <li>
            <a href="#a" @mouseover="hover" data-brand="eunyul">은율</a>
          </li>
          <li>
            <a href="#a" @mouseover="hover" data-brand="cchaldduk">찰떡</a>
          </li>
          <li>
            <a href="#a" @mouseover="hover" data-brand="cleanNFresh">클린앤프래시</a>
          </li>
        </ul>
      </div>
      <div class="brandImg">
        <div class="brandImg-wrap">
          <div class="brand eunyul active">
            <img src="../assets/img/products/subMenu-0.jpg" alt="은율" />
            <div>
              <strong>
                EUNYUL
                <br />BLACK SEED THERAPY
              </strong>
              <p>
                블랙 씨드, 블랙 컬러의 힘
                5종으로 경험하다!
              </p>
              <button>VIEW DETAIL</button>
            </div>
          </div>
          <div class="brand cchaldduk">
            <img src="../assets/img/products/subMenu-1.jpg" alt="찰떡" />
            <div>
              <strong>
                CHALDDUK
                <br />DEWY SKIN MASK PACK
              </strong>
              <p>촉촉하게 빛나는 피부, 마침내 시간을 이기다!</p>
              <button>VIEW DETAIL</button>
            </div>
          </div>
          <div class="brand cleanNFresh">
            <img src="../assets/img/products/subMenu-2.jpg" alt="클린앤프래시" />
            <div>
              <strong>
                CLEAN & FRESH
                <br />SHEET MASK
              </strong>
              <p>컨디션 따라 컬러 따라골라쓰는 재미!</p>
              <button>VIEW DETAIL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hover(e) {
      let current = document.querySelector('.active');
      let eTarget_brand = e.target.getAttribute('data-brand');
      current.classList.remove('active');
      document.querySelector(`.${eTarget_brand}`).classList.add('active');
    },
  },
  mounted() {
    const drop = document.querySelector('.dropdown-menu');
    drop.style.top = '135px';
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        drop.style.top = '90px';
      } else {
        drop.style.top = '135px';
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  @include setPosition(fixed, null, 0, 0, null, 200);
  width: 100vw;
  height: 370px;
  margin: 0 auto;
  background: #f7f7f7;
  transition: 0.3s;
  .wrapper {
    @include setFlex(flex, null, center);
    width: 100%;
    height: 100%;
    .product {
      @include setFlex(flex, flex-end, flex-start);
      width: 390px;
      height: 80%;
      margin-left: auto;
      padding-right: 20px;
    }
    .brandList {
      width: 216px;
      height: 80%;
      padding-left: 22px;
      border-left: 1px solid #eee;
      li {
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          padding-bottom: 15px;
        }
      }
    }
    .brandImg {
      position: relative;
      width: 1200px;
      height: 100%;
      .brandImg-wrap {
        .brand {
          @include setPosition(absolute, 0, null, null, 0, null);
          &.eunyul {
            display: none;
            &.active {
              display: block;
            }
          }
          &.cchaldduk {
            display: none;
            &.active {
              display: block;
            }
          }
          &.cleanNFresh {
            display: none;
            &.active {
              display: block;
            }
          }
          img {
            height: 370px;
          }
          div {
            @include setFlex(flex, flex-start, null);
            flex-direction: column;
            @include setPosition(absolute, 10%, 60px, null, null, null);
            height: 80%;
            color: #333;
            strong {
              font-size: 25px;
              letter-spacing: 2px;
            }
            p {
              padding: 30px 0 57px;
              font-weight: bold;
            }
            button {
              width: 179px;
              height: 53px;
              background: #333;
              color: #e7e7e7;
              transition: 0.3s;
              &:hover {
                background: transparent;
                color: #333;
                border: 1px solid #333;
              }
            }
          }
        }
      }
    }
  }
}
</style>
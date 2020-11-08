<template>
  <div class="brand-list" :class="$mq">
    <h2 class="content-title" :class="$mq">
      <span>WELCOME TO</span> BANGAGAN
    </h2>
    <div class="contentWrap" :class="$mq">
      <ul :class="$mq">
        <li :class="$mq">
          <a href>
            <img src="../assets/img/BANNER1_1571902870.jpg" alt="은율" />
            <dl>
              <dt>EUNYUL</dt>
              <dd>자연에서 찾은 천연 원료의 힘 건강한 아름다움</dd>
            </dl>
            <span></span>
          </a>
        </li>
        <li :class="$mq">
          <a href>
            <img src="../assets/img/BANNER1_1571902901.jpg" alt="메이크러버" />
            <dl>
              <dt>MAKE LOVER</dt>
              <dd>새롭게,뻔하지 않게 그러나 아름답게</dd>
            </dl>
            <span></span>
          </a>
        </li>
        <li :class="$mq">
          <a href>
            <img src="../assets/img/BANNER1_1571902976.jpg" alt="찰떡" />
            <dl>
              <dt>CHALDDUK</dt>
              <dd>선조들의 피부 관리 노하우에서 영감을 얻다</dd>
            </dl>
            <span></span>
          </a>
        </li>
        <li :class="$mq">
          <a href>
            <img src="../assets/img/BANNER1_1571902948.jpg" alt="클린앤프래시" />
            <dl>
              <dt>CLEAN & FRESH</dt>
              <dd>편견은 지우고 개성은 살려 나를 가장 나답게!</dd>
            </dl>
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brand-list {
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
  padding: 110px 0 120px;
  &.labtop {
    width: 100vw;
    padding: 65vh 0 120px;
  }
  &.tablet {
    width: 100vw;
    padding: 50vh 0 0;
  }
  &.mobile {
    width: 100vw;
    padding: 550px 0 0;
  }
  h2.mobile {
    font-size: calc(2.3vw + 18px);
  }
  @extend contentTitle;
  .contentWrap {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    & ul {
      box-sizing: inherit;
      max-width: 100%;
      padding-left: 50px;
      &.labtop {
        display: grid;
        grid-template-columns: 48vw 48vw;
        grid-template-rows: 250px 250px;
        column-gap: 20px; //가로
        row-gap: 20px;
        padding-left: 0;
        & li.labtop {
          width: 100%;
          height: 100%;
          padding: 0;
        }
      }
      &.tablet,
      &.mobile {
        width: 90vw;
        padding: 0;
        margin: 80px auto 0;
        li {
          display: block;
          width: 95%;
          margin: 0 auto;
          padding: 0;
          img {
            width: 100%;
          }
        }
      }
      &.tablet {
        margin-top: 150px;
      }
      & li {
        display: inline-flex;
        padding: 0 20px 20px 0;
        width: 48.33%;
        height: 262px;

        &:nth-child(2n) {
          padding: 0 0 20px 0;
        }

        & a {
          position: relative;
          display: block;
          overflow: hidden;
          min-width: 100%;
          min-height: 100px;
          & img {
            max-width: 100%;
            height: 250px;
          }
          & span {
            position: absolute;
            top: 0;
            display: block;
          }
          &:hover span {
            background-color: #000;
            width: 100%;
            opacity: 0.2;
            transition: 0.7s forwards;
          }
          &:hover img {
            transform: scale(1.1, 1.1);
            transition: 0.7s;
          }
          & dl {
            position: absolute;
            left: 30px;
            max-width: 100%;
            max-height: 100%;
            bottom: 30px;
            color: #fff;
            font-weight: 600;
            z-index: 50;
            & {
              dt {
                font-size: 1.9rem;
                line-height: 45px;
              }
              dd {
                font-size: 1.1rem;
                font-weight: 400;
                line-height: 30px;
              }
            }
          }
          &:hover dl {
            transform: translate(5px, -10px);
            transition: 0.5s;
          }
        }
      }
    }
  }
}
</style>
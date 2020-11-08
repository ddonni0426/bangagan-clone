<template>
  <div class="cont4wrap">
    <h2 class="content-title" :class="$mq">
      <span>INSTAGRAM</span> #bangacosmetic
    </h2>
    <div class="inner4" :class="$mq">
      <ul>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/1.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/2.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/3.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/4.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/5.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/6.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/7.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/8.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/9.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/10.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/11.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#a">
            <img src="../assets/img/insta/12.jpg" alt />
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
.cont4wrap {
  @extend contentTitle;

  h2.mobile {
    font-size: calc(2.3vw + 20px);
  }
  margin: 0 auto;
  .inner4 {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      li {
        display: inline-block;
        img {
          width: 200px;
          height: 100%;
        }
      }
    }

    &.mobile {
      img {
        width: 88px;
      }
    }
  }
}
</style>
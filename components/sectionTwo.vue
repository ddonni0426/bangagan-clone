<template>
  <div class="productList" :class="$mq">
    <h2 class="content-title" :class="$mq">
      <span>NEW</span> ITEMS
    </h2>
    <div class="list_wrap" :class="$mq">
      <ul>
        <li>
          <span>
            <a href>
              <img src="../assets/img/prod1.jpg" alt="데일리 케어 사과 클렌징워터-피부에 '사과'해!" />
            </a>
            <dl>
              <dt>데일리 케어 사과 클렌징워터</dt>
              <dd>피부에 '사과'해!</dd>
            </dl>
          </span>
        </li>
        <li>
          <span>
            <a href>
              <img src="../assets/img/prod2.jpg" alt="데일리 케어 검은콩 클렌징워터-순한 마무리, 검은콩 클렌징 워터" />
            </a>
            <dl>
              <dt>데일리 케어 검은콩 클렌징워터</dt>
              <dd>순한 마무리, 검은콩 클렌징 워터</dd>
            </dl>
          </span>
        </li>
        <li>
          <span>
            <a href>
              <img src="../assets/img/prod3.jpg" alt="데일리 케어 블루베리 클렌징워터-물 만난 블루베리가 내 피부를 촉촉하게 가꾼다" />
            </a>
            <dl>
              <dt>데일리 케어 블루베리 클렌징워터</dt>
              <dd>물 만난 블루베리가 내 피부를 촉촉하게 가꾼다</dd>
            </dl>
          </span>
        </li>
        <li>
          <span>
            <a href>
              <img src="../assets/img/prod4.jpg" alt="데일리 케어 라임 스킨토너-상큼톡톡 라임으로 윤기뿜뿜 피부 만들기" />
            </a>
            <dl>
              <dt>데일리 케어 라임 스킨토너</dt>
              <dd>상큼톡톡 라임으로 윤기뿜뿜 피부 만들기</dd>
            </dl>
          </span>
        </li>
        <li>
          <span>
            <a href>
              <img src="../assets/img/prod5.jpg" alt="데일리 케어 블랙체리 스킨토너-블랙체리가 내 피부에 마법을 걸다" />
            </a>
            <dl>
              <dt>데일리 케어 블랙체리 스킨토너</dt>
              <dd>블랙체리가 내 피부에 마법을 걸다</dd>
            </dl>
          </span>
        </li>
        <li>
          <span>
            <a href>
              <img src="../assets/img/prod6.jpg" alt="데일리 케어 알로에 스킨토너-메마른 피부에 알로에 단비가 내리다" />
            </a>
            <dl>
              <dt>데일리 케어 알로에 스킨토너</dt>
              <dd>메마른 피부에 알로에 단비가 내리다</dd>
            </dl>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.productList {
  @extend contentTitle;
  &.mobile {
    margin-top: 100px;
  }
  h2.mobile {
    font-size: calc(2.3vw + 20px);
  }
  .list_wrap {
    ul {
      min-width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      li {
        min-width: 392px;
        height: 353px;
        display: inline-block;
        margin-bottom: 100px;
        span {
          display: inline-block;
          min-width: 392px;
          height: 353px;
          transition: 0.5s;
          &:hover {
            opacity: 0.5;
            background: #fff;
          }
          a {
            transition: 0.5s;
            display: inline-block;
            min-width: 392px;
            height: 353px;
            img {
              min-width: 392px;
              height: 353px;
            }
          }
          dl {
            text-align: center;
            cursor: pointer;
            dt {
              font-weight: bold;
            }
            dd {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
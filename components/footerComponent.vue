<template>
  <footer id="footer" :class="$mq">
    <div class="address_wrap" :class="$mq">
      <address :class="$mq">
        <div>
          <strong>Company :</strong>Bangagan Cosmetic co.,ltd.
          <strong>Representativ :</strong>Im Young Sik
          <strong>Corporate business nuber :</strong>220-87-75028
          <a href="#a">[사업자정보확인하기]</a>
          <br />
          <strong>Online business number :</strong>제 2016-경기시흥-0089호
          <strong>Privacy officer :</strong>Bangagan cosmetic
          <strong>E-mail :</strong>bangagan@bangacos.com
          <br />
          <strong>Address :</strong>36-5, Geumhwa-ro, 627 beon-gil, Siheung-si, Gyeonggi-do, South Korea
          <br />
          <br />
          <p>Copyright ⓒ Bangagan Cosmetic co., ltd.. All Rights Reserved.</p>
        </div>
        <div class="footerUnit">
          <select class="familySite" @click="dropdown">
            <option selected="selected">FamilySite</option>
            <option class="others" value="클린앤프래시">Clean & Fresh</option>
            <option class="others" value="찰떡">CHALDDUK</option>
          </select>
          <ul class="snsUnit">
            <li>
              <a href="#">
                <img src="../assets/img/fSns01.png" alt="페이스북" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/img/fSns02.png" alt="인스타그램" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/img/fSns03.png" alt="유튜브" />
              </a>
            </li>
          </ul>
        </div>
      </address>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    dropdown() {},
  },
};
</script>

<style lang="scss" scoped>
#footer {
  padding: 35px 0 20px 0;
  max-width: 100%;
  background-color: #1c1c1c;
  color: #eee;
  .address_wrap {
    width: 80%;
    margin: 0 auto;
    address {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      font-style: normal;

      &.labtop,
      &.tablet,
      &.mobile {
        text-align: center;
        .footerUnit {
          width: 100%;
          ul.snsUnit {
            justify-content: center;
          }
        }
      }
      .footerUnit {
        .familySite {
          width: 180px;
          height: 50px;
          background: transparent;
          color: #eee;
          transition: 0.5s;
          option {
            background: black;
            color: #eee;
          }
        }
        ul.snsUnit {
          display: inline-flex;
          justify-content: space-evenly;
          line-height: 50px;
          width: 100px;
          height: 50px;
          li {
            display: inline-block;
            padding: 0 5px;
          }
        }
      }
      a {
        color: #eee;
      }
    }
  }
}
</style>
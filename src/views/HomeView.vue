<script setup>
import LocationIcon from 'vue-material-design-icons/MapMarker.vue'
</script>

<template>
  <main>
    <section class="temperature-now">
      <div class="location">
        <LocationIcon fillColor="#c2bff4" />
        <span>Campinas, SP</span>
      </div>
      <div class="temp">
        <div class="number">
          18
          <div class="maxmin">22° <span>16°</span></div>
        </div>
        <div class="celsius">°C</div>
      </div>
      <div class="statistics">
        <div class="stats">
          <img src="../assets/images/temp-wind.svg" alt="icone de vento" />
          <div class="info">
            <p>Vento</p>
            <h5>17 <span>km/h</span></h5>
          </div>
        </div>
        <div class="stats">
          <img src="../assets/images/temp-humidity.svg" alt="icone de umidade" />
          <div class="info">
            <p>Umidade</p>
            <h5>31 <span>%</span></h5>
          </div>
        </div>
        <div class="stats">
          <img src="../assets/images/temp-rain.svg" alt="icone de chuva" />
          <div class="info">
            <p>Chuva</p>
            <h5>10 <span>%</span></h5>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  background: url(../assets/images/bg.jpg) no-repeat center/cover;
  min-height: 100vh;
  display: grid;
  place-content: center;
}

section {
  background: #6d67d0;
  backdrop-filter: blur(1rem);
  border-radius: 1rem;
}

.temperature-now {
  position: relative;
  background: url(../assets/images/bg-temp.jpg);
  width: 48rem;
  height: 48rem;
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  &::before {
    content: '';
    width: 17.6rem;
    height: 17.6rem;
    background: url(../assets//images/clouds.svg);
    position: absolute;
    top: -5.6rem;
    left: -5.6rem;
  }

  .location {
    position: relative;
    justify-self: end;
    padding: 3.2rem 3.2rem 0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    span {
      font-family: fontBold;
      font-size: 1.4rem;
      color: #c2bff4;
    }
  }

  .temp {
    position: relative;
    margin: 6rem;
    font-family: fontBold;
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    .number {
      text-align: center;
      font-family: fontBold;
      font-size: 8.8rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      .maxmin {
        font-size: 2rem;
        color: #fff;
        span {
          font-size: 2rem;
          color: #c2bff4;
        }
      }
    }
    .celsius {
      font-size: 2.4rem;
      color: #dad8f7;
      margin-top: 1.5rem;
    }
  }

  .statistics {
    position: relative;
    padding: 1.2rem;
    display: flex;
    gap: 0.8rem;
    .stats {
      flex: 1;
      padding: 1.2rem 1.6rem;
      background: rgba(102, 96, 200, 0.6);
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      .info {
        h5 span,
        p {
          font-size: 1.2rem;
          color: #e7e6fb;
        }
        h5 {
          font-size: 1.8rem;
          color: #e7e6fb;
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
      }
    }
  }
}

.material-design-icon {
  display: flex;
}
</style>

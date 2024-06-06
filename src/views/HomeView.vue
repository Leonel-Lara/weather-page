<script setup>
import http from '@/http'

import LocationIcon from 'vue-material-design-icons/MapMarker.vue'
import LeafIcon from 'vue-material-design-icons/Leaf.vue'
import SunIcon from 'vue-material-design-icons/SunClock.vue'

const teste = () => {
  const lat = -22.907104
  const lng = -47.06324
  const params = 'airTemperature'
  http
    .get(`weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        Authorization: 'd86f6972-23a4-11ef-899d-0242ac130004-d86f6a76-23a4-11ef-899d-0242ac130004'
      }
    })
    .then((response) => console.log(response.data))
}
teste()
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
    <section class="air-quality">
      <div class="title">
        <LeafIcon fillColor="#DAD8F7" />
        <span>Qualidade do ar</span>
      </div>
      <div class="details">
        <span class="type">Boa</span>
        <span class="number">21</span>
      </div>
      <div class="info">
        <div class="holder">
          <span class="number">12.9</span>
          <span class="item">PM2.5</span>
        </div>
        <div class="holder">
          <span class="number">12.9</span>
          <span class="item">PM10</span>
        </div>
        <div class="holder">
          <span class="number">2.1</span>
          <span class="item">sO₂</span>
        </div>
        <div class="holder">
          <span class="number">1.4</span>
          <span class="item">NO₂</span>
        </div>
        <div class="holder">
          <span class="number">21.2</span>
          <span class="item">O₃</span>
        </div>
        <div class="holder">
          <span class="number">0.7</span>
          <span class="item">CO</span>
        </div>
      </div>
    </section>
    <section class="sun-time">
      <div class="title">
        <SunIcon fillColor="#DAD8F7" />
        <span>Horário do sol</span>
      </div>
      <div class="sun-chart-wrapper">
        <div class="sun-chart">
          <div class="chart">
            <img src="../assets/images/sun-chart.svg" alt="gráfico" />
          </div>
          <span class="time-now">17:48</span>
        </div>
      </div>
      <div class="time">
        <span class="sunrise">06:00</span>
        <span class="sunset">18:52</span>
      </div>
    </section>
    <section class="week-weather">
      <div class="day">
        <span class="title">Amanhã</span>
        <img src="../assets/images/weather-cloud.svg" alt="nuvem" />
        <p class="maxmin">21°<span>16°</span></p>
      </div>
      <div class="day">
        <span class="title">Sexta</span>
        <img src="../assets/images/weather-sun.svg" alt="sol" />
        <p class="maxmin">28°<span>20°</span></p>
      </div>
      <div class="day">
        <span class="title">Sábado</span>
        <img src="../assets/images/weather-rain.svg" alt="chuva" />
        <p class="maxmin">25°<span>21°</span></p>
      </div>
      <div class="day">
        <span class="title">Domingo</span>
        <img src="../assets/images/weather-thunder.svg" alt="tempestade" />
        <p class="maxmin">20°<span>14°</span></p>
      </div>
      <div class="day">
        <span class="title">Segunda</span>
        <img src="../assets/images/weather-cloudy.svg" alt="nublado" />
        <p class="maxmin">24°<span>18°</span></p>
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
  gap: 2.4rem;
  padding: 14rem 0;
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
          font-family: fontBold;
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

.air-quality {
  position: relative;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  padding: 3.2rem 0 1.6rem 0;
  gap: 3.2rem;
  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    span {
      font-family: fontBold;
      font-size: 1.6rem;
      color: #dad8f7;
    }
  }
  .details {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .type {
      font-family: fontBold;
      font-size: 1.8rem;
      color: #87ebcd;
    }
    .number {
      font-family: fontBold;
      font-size: 4rem;
      color: #e7e6fb;
    }
  }
  .info {
    position: relative;
    display: flex;
    gap: 1.6rem;
    justify-content: space-between;
    align-items: start;
    padding: 0 1.6rem;
    .holder {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      .number {
        font-family: fontBold;
        font-size: 1.4rem;
        color: #87ebcd;
      }
      .item {
        font-size: 1.2rem;
        color: #e7e6fb;
      }
    }
  }
}

.sun-time {
  position: relative;
  padding: 3.2rem 0 1.6rem 0;
  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    span {
      font-family: fontBold;
      font-size: 1.6rem;
      color: #dad8f7;
    }
  }
  .sun-chart-wrapper {
    position: relative;
    height: 11rem;
    margin-top: 2.4rem;
    .sun-chart {
      --pos-x: 80;
      position: relative;
      margin: auto;
      width: 21.6rem;
      height: 21.6rem;
      &::before {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        background: #f6c833;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        margin: -0.6rem;
        transform: rotate(calc(1deg * (((100 - var(--pos-x)) / -100) * 180))) translate(10.6rem);
      }
      .chart {
        width: 21.6rem;
        height: 10.8rem;
        overflow: hidden;
        img {
          position: absolute;
          top: 0;
          left: -1%;
        }
        &::before {
          content: '';
          display: block;
          width: 21.05rem;
          height: 21.6rem;
          border-radius: 50%;
          background: linear-gradient(
            180deg,
            rgba(251, 219, 96, 0.2) 0%,
            rgba(251, 219, 96, 0) 101.89%
          );
          --mask: linear-gradient(0deg, white 50%, transparent 0%);
          mask: var(--mask);
          -webkit-mask: var(--mask);
          rotate: calc(1.8deg * var(--pos-x));
        }
      }
      .time-now {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%);
        font-family: fontBold;
        font-size: 1.4rem;
        color: #fff;
      }
    }
  }
  .time {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 27.6rem;
    margin: 1rem auto 0;
    padding: 0 1.6rem;
    span {
      font-size: 1.2rem;
      color: #fff;
    }
  }
}

.week-weather {
  position: relative;
  padding: 4rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  .day {
    flex: 1;
    display: grid;
    justify-items: center;
    gap: 1.6rem;
    .title {
      font-family: fontBold;
      font-size: 1.4rem;
      color: #dad8f7;
    }
    .maxmin {
      font-family: fontBold;
      font-size: 1.6rem;
      color: #fff;
      display: flex;
      gap: 0.4rem;
      span {
        font-family: fontBold;
        font-size: 1.6rem;
        color: #c2bff4;
      }
    }
  }
}

.material-design-icon {
  display: flex;
}

@media (min-width: 1200px) {
  main {
    grid-template-columns: 48rem 27.7rem 27.7rem;
    grid-template-rows: 24.4rem 21.2rem;
  }

  .temperature-now {
    grid-row: 1/3;
  }
  .week-weather {
    grid-column: 2/4;
  }
}
</style>

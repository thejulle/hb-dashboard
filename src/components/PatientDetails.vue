<script setup>
defineProps({
  activePatient: {
    // type: Object,
    required: true,
  },
});
</script>

<template>
  <div v-if="activePatient" class="patient">
    <div class="patient__header">
      <div class="patient__header__patient-meta">
        <img :src="activePatient.image" :alt="activePatient.name">
        <div>
          <h1>{{ activePatient.name }}</h1>
          <p>{{ activePatient.gender }}, {{ activePatient.age }} years old</p>
        </div>
      </div>
      <div class="patient__header__buttons">
        <button class="btn btn--outline btn--status" :class="[{good: activePatient.status == 'Good'}, {'needs-to-be-contacted': activePatient.status == 'Needs to be contacted'}, {contacted: activePatient.status == 'Contacted'}]">{{ activePatient.status }}</button>
        <button class="btn btn--outline">CSV Reports</button>
      </div>
    </div>
    <div class="patient__top-cards">
      <div class="card patient__top-cards__latest-glucose">
        <h2>Latest glucose value</h2>
        <!-- <p>
          <span :class="activePatient.latestGlucoseTrend">{{ activePatient.latestGlucoseValue }}</span><br>
          mg/dL<br>
          {{ activePatient.latestGlucoseTime }}
        </p> -->
        <!-- <img src="/latest-glucose.svg" alt="Latest glucose value"> -->
        <div :class="activePatient.latestGlucoseTrend">
          <p>
            <span>{{ activePatient.latestGlucoseValue }}</span><br>mg/dL
          </p>
        </div>
        <p class="gray">{{ activePatient.latestGlucoseTime }}</p>
      </div>
      <div class="card patient__top-cards__sensor-usage">
        <h2>Sensor usage</h2>
        <div>
          <div>
            <p>Days with GCM data</p>
            <p>
              <span>64%</span>
              9/14
            </p>
          </div>
          <div>
            <p>Avg.calibrations per day</p>
            <p>
              <span>1.20</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="patient__cards">
      <div class="card">
        <h2>Last 24 hrs</h2>
        <p class="date">Mon 21 Jun - Sun 27 Jun</p>
        <div>
          <div
          class="tir-graph"
          :style="{background: 'radial-gradient( circle closest-side, #fff 0, #fff 77%, transparent 77%, transparent 100%, #fff 0), conic-gradient( from 180deg, #a04cbe 0, #a04cbe ' + ((100 - activePatient.timeInRange.last24Hours) * .25) + '%, #710f95 0, #710f95 ' + ((100 - activePatient.timeInRange.last24Hours) * .5) + '%, #cce0ff 0, #cce0ff ' + ((100 - activePatient.timeInRange.last24Hours) * .5 + +activePatient.timeInRange.last24Hours) + '%, #c79a00 0, #c79a00 ' + ((100 - activePatient.timeInRange.last24Hours) * .75 + +activePatient.timeInRange.last24Hours) + '%, #ffca28 0, #ffca28 100%)'}"
          ></div>
          <div class="value">
            <h3>Time in range (TIR)</h3>
            <p>
              <span>{{ activePatient.timeInRange.last24Hours }}%</span>
              Target range: <b>70-180mg/dL</b>
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img src="/steps.svg" alt="Steps icon">
          <div class="value">
            <h3>Steps</h3>
            <p>
              Total
              <span>{{ activePatient.steps.last24Hours }}</span>
              Last 24 hours
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img v-if="activePatient.moodAverage.last24Hours === 'Positive'" src="/mood-all-good.svg" alt="Mood: Positive">
          <img v-else src="/mood-contacted.svg" alt="Mood: Negative">
          <div class="value">
            <h3>Mood</h3>
            <p>
              <span>{{ activePatient.mood.last24Hours }}%</span>
              {{ activePatient.moodAverage.last24Hours }} on average
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <h2>Week</h2>
        <p class="date">Mon 21 Jun - Sun 27 Jun</p>
        <div>
          <div
          class="tir-graph"
          :style="{background: 'radial-gradient( circle closest-side, #fff 0, #fff 77%, transparent 77%, transparent 100%, #fff 0), conic-gradient( from 180deg, #a04cbe 0, #a04cbe ' + ((100 - activePatient.timeInRange.week) * .25) + '%, #710f95 0, #710f95 ' + ((100 - activePatient.timeInRange.week) * .5) + '%, #cce0ff 0, #cce0ff ' + ((100 - activePatient.timeInRange.week) * .5 + +activePatient.timeInRange.week) + '%, #c79a00 0, #c79a00 ' + ((100 - activePatient.timeInRange.week) * .75 + +activePatient.timeInRange.week) + '%, #ffca28 0, #ffca28 100%)'}"
          ></div>
          <div class="value">
            <h3>Time in range (TIR)</h3>
            <p>
              <span>{{ activePatient.timeInRange.week }}%</span>
              Target range: <b>70-180mg/dL</b>
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img src="/steps.svg" alt="Steps icon">
          <div class="value">
            <h3>Steps</h3>
            <p>
              Average
              <span>{{ activePatient.steps.week }}</span>
              Steps/day
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img v-if="activePatient.moodAverage.week === 'Positive'" src="/mood-all-good.svg" alt="Mood: Positive">
          <img v-else src="/mood-contacted.svg" alt="Mood: Negative">
          <div class="value">
            <h3>Mood</h3>
            <p>
              <span>{{ activePatient.mood.week }}%</span>
              {{ activePatient.moodAverage.week }} on average
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <h2>Month</h2>
        <p class="date">Mon 21 Jun - Sun 27 Jun</p>
        <div>
          <div
          class="tir-graph"
          :style="{background: 'radial-gradient( circle closest-side, #fff 0, #fff 77%, transparent 77%, transparent 100%, #fff 0), conic-gradient( from 180deg, #a04cbe 0, #a04cbe ' + ((100 - activePatient.timeInRange.month) * .25) + '%, #710f95 0, #710f95 ' + ((100 - activePatient.timeInRange.month) * .5) + '%, #cce0ff 0, #cce0ff ' + ((100 - activePatient.timeInRange.month) * .5 + +activePatient.timeInRange.month) + '%, #c79a00 0, #c79a00 ' + ((100 - activePatient.timeInRange.month) * .75 + +activePatient.timeInRange.month) + '%, #ffca28 0, #ffca28 100%)'}"
          ></div>
          <div class="value">
            <h3>Time in range (TIR)</h3>
            <p>
              <span>{{ activePatient.timeInRange.month }}%</span>
              Target range: <b>70-180mg/dL</b>
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img src="/steps.svg" alt="Steps icon">
          <div class="value">
            <h3>Steps</h3>
            <p>
              Average
              <span>{{ activePatient.steps.month }}</span>
              Steps/day
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img v-if="activePatient.moodAverage.month === 'Positive'" src="/mood-all-good.svg" alt="Mood: Positive">
          <img v-else src="/mood-contacted.svg" alt="Mood: Negative">
          <div class="value">
            <h3>Mood</h3>
            <p>
              <span>{{ activePatient.mood.month }}%</span>
              {{ activePatient.moodAverage.month }} on average
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <h2>Year</h2>
        <p class="date">Mon 21 Jun - Sun 27 Jun</p>
        <div>
          <div
          class="tir-graph"
          :style="{background: 'radial-gradient( circle closest-side, #fff 0, #fff 77%, transparent 77%, transparent 100%, #fff 0), conic-gradient( from 180deg, #a04cbe 0, #a04cbe ' + ((100 - activePatient.timeInRange.month) * .25) + '%, #710f95 0, #710f95 ' + ((100 - activePatient.timeInRange.month) * .5) + '%, #cce0ff 0, #cce0ff ' + ((100 - activePatient.timeInRange.month) * .5 + +activePatient.timeInRange.month) + '%, #c79a00 0, #c79a00 ' + ((100 - activePatient.timeInRange.month) * .75 + +activePatient.timeInRange.month) + '%, #ffca28 0, #ffca28 100%)'}"
          ></div>
          <div class="value">
            <h3>Time in range (TIR)</h3>
            <p>
              <span>{{ activePatient.timeInRange.month }}%</span>
              Target range: <b>70-180mg/dL</b>
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img src="/steps.svg" alt="Steps icon">
          <div class="value">
            <h3>Steps</h3>
            <p>
              Average
              <span>{{ activePatient.steps.month }}</span>
              Steps/day
            </p>
          </div>
        </div>
        <hr>
        <div>
          <img v-if="activePatient.moodAverage.month === 'Positive'" src="/mood-all-good.svg" alt="Mood: Positive">
          <img v-else src="/mood-contacted.svg" alt="Mood: Negative">
          <div class="value">
            <h3>Mood</h3>
            <p>
              <span>{{ activePatient.mood.month }}%</span>
              {{ activePatient.moodAverage.month }} on average
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="patient__overview">
      <h2>Overview</h2>
      <div>
        <div class="card patient__overview__average-glucose">
          <h3>Average glucose value</h3>
          <!-- <img src="/average-glucose.svg" alt="Average glucose value"> -->
          <div class="patient__overview__average-glucose__items">
            <div>
              <h4>Daily</h4>
              <div>
                <p><span>188</span><br>mg/dL</p>
              </div>
            </div>
            <div>
              <h4>Weekly</h4>
              <div>
                <p><span>179</span><br>mg/dL</p>
              </div>
            </div>
            <div>
              <h4>Monthly</h4>
              <div>
                <p><span>188</span><br>mg/dL</p>
              </div>
            </div>
            <div>
              <h4>Yearly</h4>
              <div>
                <p><span>179</span><br>mg/dL</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card patient__overview__time-in-range">
          <h3>Weekly Time in Range</h3>
          <img src="/weekly-time-in-range.png" alt="Weekly time in range">
          <p>Week from Mon 21 Jun to Sun 27 Jun</p>
        </div>
      </div>
    </div>

    <div class="patient__timeline">
      <h2>Timeline view</h2>
      <div class="card">
        <img src="/timeline-2.png" alt="Timeline">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.patient {
  display: flex;
  flex-direction: column;
  row-gap: 56px;

  .card {
    padding: 24px;
    background: var(--white);
    border-radius: 18px;
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.4);

    h2 {
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 700;
      font-family: var(--font-body);
    }
  }

  &__top-cards {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 8px;

    /*
    &__latest-glucose {
      p {
        margin: 0;
      }

      span {
        display: inline-flex;
        align-items: center;
        font-size: 32px;
        line-height: 1.1;
        font-weight: 500;
        font-family: var(--font-heading);

        &::after {
          content: "";
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-left: 6px;
          background: url(/icon-arrow.svg) 50% 50% no-repeat;
          transform: rotate(45deg);
        }

        &.up::after {
          transform: rotate(0);
        }

        &.down::after {
          transform: rotate(90deg);
        }
      }
    }
    */

    &__latest-glucose {
      div {
        display: flex;
        align-items: center;
        gap: 12px;

        &::before {
          content: "";
          display: block;
          width: 41px;
          height: 41px;
          background: url(/icon-arrow.svg) 50% 50% no-repeat var(--blue-tint);
          border-radius: 100%;
          transform: rotate(45deg);
        }

        &.up::before {
          background-color: var(--yellow);
          transform: rotate(0);
        }

        &.down::before {
          background-color: var(--purple);
          transform: rotate(90deg);
        }

        p {
          margin: 0;
          font-size: 12px;

          span {
            font-size: 34px;
            line-height: 1.05;
            font-family: var(--font-heading);
          }
        }
      }
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__patient-meta {
      display: flex;
      gap: 24px;
      align-items: center;

      img {
        width: 90px;
        height: 90px;
        border-radius: 100%;
      }

      h1 {
        margin: 0;
        font-size: 32px;
        line-height: 1.1;
        letter-spacing: 0;
      }

      p {
        margin: 0;
      }
    }

    &__buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-left: auto;

      .btn--status {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--black);
        border: 1px solid var(--gray);

        &::before {
          content: "";
          display: inline-block;
          width: 24px;
          height: 24px;
          // background: var(--blue);
          background: var(--green);
          border-radius: 100%;
        }
        &.needs-to-be-contacted::before {
          background: var(--yellow);
        }

        &.contacted::before {
          background: var(--purple);
        }
      }
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;

    .date {
      margin-bottom: 28px;
      font-size: 12px;
      color: #A6A6A6;
    }

    > div {
      > div {
        display: grid;
        grid-template-columns: 60px 1fr;
        align-items: center;
        gap: 56px;

        .tir-graph {
          width: 60px;
          height: 60px;
          border-radius: 100%;
        }

        img {
          width: 60px;
          height: 60px;
        }

        p {
          margin: 0;
          font-size: 11px;
          // color: var(--gray);

          span {
            display: block;
            font-size: 34px;
            line-height: 1.05;
            color: var(--black);
            font-family: var(--font-heading);
          }
        }
      }
    }

    h2 {
      margin-bottom: 8px;
    }

    h3 {
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 700;
      font-family: var(--font-body);
    }

    hr {
      margin: 20px 0;
      border: 0;
      border-top: 1px solid #D9D9D9;
    }
  }

  &__overview,
  &__timeline {
    h2 {
      margin-bottom: 24px;
      font-size: 18px;
      font-family: var(--font-body);
      font-weight: 700;
      letter-spacing: -0.014em;
    }
  }

  &__overview {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }

    h3 {
      margin-bottom: 24px;
      font-size: 1rem;
      line-height: 1.5;
      // letter-spacing: -0.0014em;
      font-weight: 700;
      font-family: var(--font-body);
    }

    &__average-glucose {
      justify-content: space-between;

      &__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px 24px;

        > div {
          justify-content: space-between;
          width: 50%;

          h4 {
            margin-bottom: 24px;
            font-size: 14px;
            font-weight: 600;
            font-family: var(--font-body);
          }

          &:nth-child(even) {
            padding-left: 24px;
            border-left: 1px solid #D9D9D9;
          }

          > div {
            display: flex;
            align-items: center;
            gap: 24px;

            p {
              margin: 0;
              font-size: 12px;

              span {
                font-size: 34px;
                line-height: 1.05;
                font-family: var(--font-heading);
              }
            }

            &::before {
              content: "";
              display: block;
              min-width: 60px;
              height: 60px;
              background: url(/mood-all-good.svg) 50% 50% no-repeat;
              background-size: cover;
              border-radius: 100%;
            }
          }
        }
      }
    }

    &__time-in-range {
      p {
        margin: 0;
        font-size: 12px;
        color: #A6A6A6;
      }
    }
  }

  &__timeline {
    .card {
      display: flex;
      padding: 48px 24px;
    }
  }
}
</style>
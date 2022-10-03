<template>
  <div>
    <div class="application__block">
      <div class="application__button application__button-pad">
        <img :src="require('@/assets/back-btn.svg')" alt="" />
      </div>
      <div class="application__text application__text-50pad">Байтерек</div>
      <div class="application__button application__button-pad" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>

      <!-- <div class="application__button application__button-pad" @click="OpenApplicationSettings" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div> -->
    </div>
    <div class="application__block application__block-mb12">
      <!-- <the-otp :digit-count="4" @update:otp="otpValue = $event"></the-otp>
      <p>The current OTP value is: {{ otpValue }}</p>
      <v-otp-input v-model="OTPcode" :disabled="loading" @finish="onFinish"></v-otp-input> -->

      <v-text-field v-model="OTPcode" :counter="4" :rules="phoneRules" label="СМС код" required clearable variant="plain" class="application__input application__input-mainpage" placeholder="1111"></v-text-field>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" @click="checkOTP" />
      </div>
      <!-- <v-text-field v-model="OTPcode" :counter="12" :rules="phoneRules" label="OTP код" variant="outlined" required clearable class="application__input application__input-otp"></v-text-field> -->
    </div>
    <div class="application__block">
      <div class="application__title">Страхователь</div>
      <router-link to="/policyholder">
        <div class="application__button">
          <img :src="require('@/assets/add-btn.svg')" alt="" />
        </div>
      </router-link>
    </div>

    <div v-if="policyholderForm.iin != ''" class="application__block">
      <div class="application__text">{{ policyholderForm.phoneNumber ? policyholderForm.phoneNumber : 'Номер телефона' }}</div>
      <div class="application__text">{{ policyholderForm.iin ? policyholderForm.iin : 'ИИН' }}</div>
      <div class="application__text">М</div>
      <div class="application__text">18-02-1994(28)</div>
      <div class="application__text">КАЗ</div>
      <div class="application__text">9</div>

      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <v-switch v-model="isPolicyholderInsured" :label="`Является ли страхователь застрахованным? ${isPolicyholderInsured ? 'да' : 'нет'}`" color="green" class="application__switch" hide-details> </v-switch>
    </div>
    <div class="application__block">
      <div class="application__title">Застрахованный</div>

      <div class="application__button" @click="$router.push({ path: '/insured' })">
        <img :src="require('@/assets/add-btn.svg')" alt="" />
      </div>
    </div>
    <div v-if="insuredForm.iin != ''" class="application__block">
      <div class="application__text">{{ insuredForm.phoneNumber ? insuredForm.phoneNumber : 'Номер телефона' }}</div>
      <div class="application__text">{{ insuredForm.iin ? insuredForm.iin : 'ИИН' }}</div>
      <div class="application__text">М</div>
      <div class="application__text">18-02-1994(28)</div>
      <div class="application__text">КАЗ</div>
      <div class="application__text">9</div>
      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__title">Выгодоприобретатель</div>
      <div class="application__button">
        <img :src="require('@/assets/add-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Арынгазы Д.</div>
      <div class="application__text">940-218-300-972.</div>
      <div class="application__text">М</div>
      <div class="application__text">18-02-1994(28)</div>
      <div class="application__text">КАЗ</div>
      <div class="application__text">9</div>
      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>

    <div class="application__block">
      <div class="application__title">Бенефициарный собственник</div>
      <div class="application__button">
        <img :src="require('@/assets/add-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__title">Представитель страхователя</div>
      <div class="application__button">
        <img :src="require('@/assets/add-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__title">Пенсионные накопления</div>
      <div class="application__button">
        <img :src="require('@/assets/add-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__title">Условие продукта</div>
      <div class="application__button" @click="$router.push({ path: '/product-conditions' })">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Обязательные ПВ</div>
      <div class="application__text">3 265 456.00</div>
      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Обязательные профессиональные ПВ</div>
      <div class="application__text">1 652 356.00</div>
      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Выкупная сумма КСЖ</div>
      <div class="application__text">1 652 356.00</div>
      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__title">Условия выплат</div>
      <div class="application__button">
        <img :src="require('@/assets/add-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">01-21-21.</div>
      <div class="application__text">L</div>
      <div class="application__text">1 раз в мес.</div>
      <div class="application__text">Пожизненно</div>
      <div class="application__text">60 254</div>
      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__title">Реквизиты клиента</div>
      <div class="application__button">
        <img :src="require('@/assets/add-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Kaspi Банк</div>
      <div class="application__text">019</div>
      <div class="application__text">060-545-6424</div>
      <div class="application__text">KZ784623JK8930248</div>
      <div class="application__button" @click="$router.push({ path: '/block-settings' })">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <the-footer />
  </div>
</template>
<script>
export default {
  name: 'the-application',
};
</script>
<script setup>
import TheFooter from '../layouts/TheFooter.vue';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const isApplicationSettingsOpen = computed(() => store.state.isApplicationSettingsOpen);
const isPolicyholderOpen = computed(() => store.state.isPolicyholderOpen);
const isBlockSettingsOpen = computed(() => store.state.isBlockSettingsOpen);
const isProductConditionsOpen = computed(() => store.state.isProductConditionsOpen);

const phoneRules = [v => !!v || 'Поле обязательно', v => (v && v.length <= 12) || 'поле не должно быть больше 12 символов'];
const otpValue = ref('');
const policyholderForm = computed(() => store.state.policyholderForm);
const insuredForm = computed(() => store.state.insuredForm);
const OTPcode = ref();
const isPolicyholderInsured = ref(false);

function OpenApplicationSettings() {
  store.commit('setStatusApplicationSettingsOpen', isApplicationSettingsOpen);
}
function OpenPolicyholder() {
  store.commit('setStatusPolicyholderOpen', isPolicyholderOpen);
}
const isInsuredOpen = computed(() => store.state.isInsuredOpen);
function OpenInsured() {
  store.commit('setStatusInsuredOpen', isInsuredOpen);
}
function OpenBlockSettings() {
  store.commit('setStatusBlockSettingsOpen', isBlockSettingsOpen);
}
function OpenProductConditions() {
  console.log(11);
  store.commit('setStatusProductConditionsOpen', isProductConditionsOpen);
}
function checkOTP() {
  store.dispatch('checkOTP', isBlockSettingsOpen);
}
watch(isPolicyholderInsured, async (newisPolicyholderInsured, oldisPolicyholderInsured) => {
  console.log('2s', newisPolicyholderInsured);
  if (newisPolicyholderInsured === true) {
    console.log('1s');
    store.commit('setPolicyholderInsuredSame');
  }
});
</script>

<style lang="scss">

.application {
  &__header {
    position: absolute;
    z-index: 4;
    top: -9px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    background: #f9fffe;
    width: max-content;
    font-weight: 500;
  }
  &__blocks {
    border-top: 1px dashed grey;
    // border-top: 1px dashed grey;
    margin: 5px 0;
    position: relative;
  }
  &__block {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9fffe;
    margin-bottom: 2px;

    &-grid {
      display: grid;
      grid-template: auto/repeat(1, 1fr);
      margin: 20px;
      place-items: center start;
      &-2 {
        width: 100%;
        display: grid;
        grid-template: auto/92% 5%;
        place-items: center start;
        margin-right: 20px;
      }

      // &-start {
      //   margin: 20px;
      //   place-items: center start;
      // }
    }
    &-flex {
      // padding: 20px;
      // margin: 20px;
      flex-direction: column;
      place-items: flex-start;
      text-align: start;
      ul {
        margin: 0 20px;
        padding: 20px;
        // margin-top: 5px;
        padding-top: 5px;
        li {
          padding: 5px;
        }
      }
    }
    &-mb12 {
      margin-bottom: 12px;
    }
  }
  &__label {
    margin: 20px;
    margin-left: 31px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    color: #16988f;
    text-align: start;
    width: 100%;
    padding: 10px;
    padding-left: 31px;
    font-weight: 500;
  }
  &__text {
    text-align: start;
    width: 100%;
    padding: 10px;
    &-50pad {
      padding: 50px;
      font-weight: 500;
    }
    &-hint {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 0.005em;
      color: #a5a5a5;
      padding-left: 10px;
    }
    &-color {
      color: #7d8a95;
    }
    &-wo {
      padding-left: 10px;
    }
  }
  &__text:first-child {
    padding-left: 31px;
  }
  &__button {
    cursor: pointer;
    position: relative;
    img {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
    }
    background: #f6f9fb;

    align-self: center;
    padding: 37px;
    &-pad {
      padding: 65px 37px;
    }
  }
  &__switch {
    margin-left: 30px;
    // .v-selection-control__input input {
    //   background-color: white;
    // }
  }
  &__input {
    &-otp {
      margin-right: 20px;
    }
    &-ml10 {
      margin-left: 10px;
    }
  }
}
.application__input-mainpage {
  margin-left: 10px;
}
</style>

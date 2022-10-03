<template>
  <div class="settings__floating settings__floating-left">
    <div class="application__block">
      <div class="application__button application__button-pad" @click="$router.go(-1)">
        <img :src="require('@/assets/back-btn.svg')" alt="" />
      </div>
      <div class="application__text application__text-50pad">Данные клиента</div>
      <div class="application__button application__button-pad">
        <img src="@/assets/check-btn.svg" alt="" />
      </div>
    </div>

    <div class="application__block">
      <div class="application__text">ИИН</div>
      <div class="application__button">
        <img :src="require('@/assets/bank-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Фамилия</div>
      <div class="application__button"></div>
    </div>
    <div class="application__block">
      <div class="application__text">Имя</div>
      <div class="application__button"></div>
    </div>
    <div class="application__block">
      <div class="application__text">Отчество</div>
      <div class="application__button"></div>
    </div>
    <div class="application__block">
      <div class="application__text">Дата рождения</div>
      <div class="application__button">
        <img :src="require('@/assets/calendar-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Место рождения</div>
      <div class="application__button"></div>
    </div>
    <div class="application__block">
      <div class="application__text">Дата выдачи</div>
      <div class="application__button">
        <img :src="require('@/assets/calendar-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Срок действия</div>
      <div class="application__button">
        <img :src="require('@/assets/calendar-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Инвалидность</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Кем выдан</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Добавить вложение</div>
      <div class="application__button"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'the-customer-data',
};
</script>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const isCustomerDataOpen = computed(() => store.state.isCustomerDataOpen);

function closeCustomerData() {
  store.commit('setStatusCustomerDataOpen', isCustomerDataOpen);
}
</script>

<style lang="scss" scoped></style>

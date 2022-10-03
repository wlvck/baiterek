<template>
  <div class="settings__floating">
    <div class="application__block">
      <!-- @click="goBack()" -->
      <div class="application__button application__button-pad" @click="$router.go(-1)">
        <img :src="require('@/assets/back-btn.svg')" alt="" />
      </div>
      <div class="application__text application__text-50pad">Список операций над заявкой</div>
      <div class="application__button application__button-pad">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Согласовать</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Отклонить</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Договор страхования</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">График платежей</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'the-application-settings',
};
</script>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();
const isApplicationSettingsOpen = computed(() => store.state.isApplicationSettingsOpen);
const router = useRouter();
function closeApplicationSettings() {
  store.commit('setStatusApplicationSettingsOpen', isApplicationSettingsOpen);
}
function goBack() {
  console.log('1');
  return router.go(-1);
}
</script>

<style lang="scss">
.settings__floating {
  position: absolute;
  // left: 287px;
  width: 100%;
  height: 100%;

  z-index: 2;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: #f9fffe;
}
</style>

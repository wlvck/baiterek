<template>
  <div class="settings__floating">
    <div class="application__block">
      <div class="application__button application__button-pad" @click="$router.go(-1)">
        <img :src="require('@/assets/back-btn.svg')" alt="" />
      </div>
      <div class="application__text application__text-50pad">Список операций</div>
      <div class="application__button application__button-pad">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Просмотреть</div>
      <div @click='redirect'  class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Редактировать</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Удалить</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Выполнить проверку ПОД/ФТ</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Выполнить сверку в ГБД ФЛ</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
    <div class="application__block">
      <div class="application__text">Запросить проверку андеррайтеров</div>
      <div class="application__button">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'the-block-settings',
};
</script>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const isBlockSettingsOpen = computed(() => store.state.isBlockSettingsOpen);

const router = useRouter();
function closeBlockSettings() {
  store.commit('setStatusBlockSettingsOpen', isBlockSettingsOpen);
}
function redirect(){
  router.push('disabled-policyholder');
}
</script>

<style lang="scss"></style>

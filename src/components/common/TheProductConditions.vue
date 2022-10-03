<template>
  <div class="settings__floating">
    <div class="application__block">
      <!-- @click="goBack()" @click="closeProductConditions" -->
      <div class="application__button application__button-pad" @click="$router.go(-1)">
        <img :src="require('@/assets/back-btn.svg')" alt="" />
      </div>
      <div class="application__text application__text-50pad">Условие продукта</div>
      <div class="application__button application__button-pad">
        <img :src="require('@/assets/more-btn.svg')" alt="" />
      </div>
    </div>

    <div class="application__block">
      <v-input :messages="['30']" class="application__label"> Срок страхования (в годах) </v-input>
    </div>
    <div class="application__block">
      <v-input :messages="['2 400 000']" class="application__label">Годовой доход (тенге) </v-input>
    </div>
    <div class="application__block">
      <v-input :messages="['5 %']" class="application__label">Запрашиваемый размер коэффициента индексации (от 3% до 7%) </v-input>
    </div>
    <div class="application__block">
      <v-text-field label="Запрашиваемая Страховая сумма (цифрами/прописью)" variant="plain" class="application__input application__input-ml10"></v-text-field>
    </div>
    <div class="application__block-grid">
      <div class="application__block-grid-2">
        <div class="application__text-wo">Возможность изменения страховой суммы и страховых взносов (индексация)</div>
        <v-switch v-model="isPossibleToChange" color="green" class="application__switch" hide-details> </v-switch>
      </div>

      <div v-if="isPossibleToChange" class="application__text-hint">Если "Включено", то страховая сумма равна страховой сумме по основному покрытию</div>
    </div>
    <div class="application__block">
      <div class="application__title">Дополнительные условия страхования</div>
    </div>
    <div class="application__block-grid">
      <div class="application__block-grid-2">
        <div class="application__text-wo">Смерть Застрахованного в результате несчастного случая</div>
        <v-switch v-model="isPossibleToChange" color="green" class="application__switch" hide-details> </v-switch>
      </div>

      <div v-if="isPossibleToChange" class="application__text-hint">Запрашиваемая страховая сумма:</div>
      <div v-if="isPossibleToChange" class="application__checkboxes">
        <v-checkbox v-model="ex4" label="500 000 тенге" color="green" value="red" hide-details></v-checkbox>
        <v-checkbox v-model="ex4" label="1 000 000 тенге" color="green" value="red-darken-3" hide-details></v-checkbox>
        <v-checkbox v-model="ex4" label="1 500 000 тенге" color="green" value="red" hide-details></v-checkbox>
        <v-checkbox v-model="ex4" label="1 500 000 тенге" color="green" value="red-darken-3" hide-details></v-checkbox>
      </div>
    </div>
    <div class="application__block-grid">
      <div class="application__block-grid-2">
        <div class="application__text-wo">Установление Застрахованному инвалидности I или II группы по причине несчастного случая</div>
        <v-switch v-model="isPossibleToChange" color="green" class="application__switch" hide-details> </v-switch>
      </div>

      <div v-if="isPossibleToChange" class="application__text-hint">Если "Включено", то страховая сумма равна страховой сумме по основному покрытию</div>
    </div>
    <div class="application__block-grid">
      <div class="application__block-grid-2">
        <div class="application__text-wo">Временная нетрудоспособность Застрахованного в результате несчастного случая</div>
        <v-switch v-model="isPossibleToChange" color="green" class="application__switch" hide-details> </v-switch>
      </div>

      <div v-if="isPossibleToChange" class="application__text-hint">Если "Включено", то страховая сумма равна страховой сумме по основному покрытию</div>
    </div>
    <div class="application__block-grid">
      <div class="application__block-grid-2">
        <div class="application__text-wo">Получение Застрахованным телесной травмы в результате несчастного случая</div>
        <v-switch v-model="isPossibleToChange" color="green" class="application__switch" hide-details> </v-switch>
      </div>

      <div v-if="isPossibleToChange" class="application__text-hint">Если "Включено", то страховая сумма равна страховой сумме по основному покрытию</div>
    </div>
    <div class="application__block-grid">
      <div class="application__block-grid-2">
        <div class="application__text-wo">Критическое заболевание Застрахованного</div>
        <v-switch v-model="isPossibleToChange" color="green" class="application__switch" hide-details> </v-switch>
      </div>

      <div v-if="isPossibleToChange" class="application__text-hint">Если "Включено", то страховая сумма равна страховой сумме по основному покрытию</div>
    </div>
    <div class="application__block">
      <v-text-field label="Периодичность оплаты страховой премии:" placeholder="Периодичность оплаты страховой премии:" variant="plain" class="application__input application__input-ml10"></v-text-field>
      <div class="application__button application__button-pad">
        <img :src="require('@/assets/forth-btn.svg')" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'the-product-conditions',
};
</script>
<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const isProductConditionsOpen = computed(() => store.state.isProductConditionsOpen);
// const isProductConditionsOpen = computed(() => store.state.isProductConditionsOpen);
const router = useRouter();
function goBack() {
  console.log('1');
  return router.go(-1);
}
const isPossibleToChange = ref(true);
function closeProductConditions() {
  store.commit('setStatusProductConditionsOpen', isProductConditionsOpen);
}
const ex4 = ref(false);
</script>

<style lang="scss">
.settings__floating {
  position: absolute;
  // left: 287px;
  width: 100%;
  height: 100%;
  // overflow-y: scroll;
  height: 100%;
  z-index: 2;
  background: #f9fffe;
}
.application {
  &__checkboxes {
    // margin: 20px;
    display: grid;
    grid-template: auto/repeat(3, 1fr);
    gap: 0 70px;
  }
}
</style>

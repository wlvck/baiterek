<template>
  <!-- v-click-outside="closeInsured"  -->
  <div class="settings__floating settings__floating-left">
    <div>
      <div class="application__block">
        <div class="application__button application__button-pad" @click="$router.go(-1)">
          <img :src="require('@/assets/back-btn.svg')" alt="" />
        </div>
        <div class="application__text application__text-50pad">Застрахованный</div>
        <div class="application__button application__button-pad">
          <img :src="require('@/assets/more-btn.svg')" alt="" />
        </div>
      </div>
      <v-form v-model="valid" class="application__form">
        <div class="application__blocks">
          <div class="application__header">Персональные данные</div>

          <div class="application__block">
            <v-text-field v-model="insuredForm.iin" :counter="12" :rules="phoneRules" label="ИИН" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.surname" :counter="12" :rules="phoneRules" label="Фамилия" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.name" :counter="12" :rules="phoneRules" label="Имя" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.middlename" :counter="12" :rules="phoneRules" label="Отчество" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <DatePicker v-model="insuredForm.bornDate" locale="ru" :flow="flow" model-type="dd.MM.yyyy">
              <template #trigger>
                <v-text-field v-model="insuredForm.bornDate" label="Дата рождения" required clearable variant="plain" class="application__input" append-icon="mdi-calendar"></v-text-field>
              </template>
            </DatePicker>
          </div>
          <!-- <div class="application__block"><v-text-field v-model="insuredForm.bornDate" label="Дата рождения" required clearable variant="plain" class="application__input"></v-text-field></div> -->
          <div class="application__block">
            <v-text-field v-model="insuredForm.age" :counter="12" :rules="phoneRules" label="Возраст" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.sex" :counter="12" :rules="phoneRules" label="Пол" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
        </div>

        <div class="application__blocks">
          <div class="application__header">Адрес</div>
          <div class="application__block">
            <v-select v-model="insuredForm.country" :items="items" label="Страна" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-select v-model="insuredForm.province" :items="items" label="Область" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-select v-model="insuredForm.region" label="Регион" :items="items" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-select v-model="insuredForm.region" label="Вид населенного пункта" :items="items" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.city" :counter="12" :rules="phoneRules" label="Город" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.quarter" :counter="12" :rules="phoneRules" label="Квартал" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.microdistrict" :counter="12" :rules="phoneRules" label="Микрорайон" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.street" :counter="12" :rules="phoneRules" label="Улица" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.numberHouse" :counter="12" :rules="phoneRules" label="№ дома" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.numberApartment" :counter="12" :rules="phoneRules" label="№ кв. " required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.address" :counter="12" :rules="phoneRules" label="Адрес" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
        </div>

        <!-- <div class="application__block">
          <v-text-field v-model="insuredForm.addressBorn" :counter="12" :rules="phoneRules" label="Место рождения" required clearable variant="plain" class="application__input"></v-text-field>
          <div class="application__button">
            <img :src="require('@/assets/forth-btn.svg')" alt="" />
          </div>
        </div>
        <div class="application__block">
          <v-text-field v-model="insuredForm.addressRegistration" :counter="20" :rules="phoneRules" label="Адрес регистрации" required clearable variant="plain" class="application__input"></v-text-field>
          <div class="application__button">
            <img :src="require('@/assets/forth-btn.svg')" alt="" />
          </div>
        </div>
        <div class="application__block">
          <v-text-field v-model="insuredForm.addressActual" :counter="20" :rules="phoneRules" label="Фактический адрес" required clearable variant="plain" class="application__input"></v-text-field>
          <div class="application__button">
            <img :src="require('@/assets/forth-btn.svg')" alt="" />
          </div>
        </div> -->
        <div class="application__blocks">
          <div class="application__header">Документы</div>
          <div class="application__block">
            <v-select v-model="insuredForm.documentType" :items="items" label="Тип документа" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-select v-model="insuredForm.documentAuthority" :items="items" label="Орган выдачи" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.documentNumber" :counter="12" :rules="phoneRules" label="Номер документа" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <DatePicker v-model="insuredForm.documentDate" locale="ru" :flow="flow" model-type="dd.MM.yyyy">
              <template #trigger> <v-text-field v-model="insuredForm.documentDate" :counter="12" :rules="phoneRules" label="Дата выдачи" required clearable variant="plain" class="application__input" append-icon="mdi-calendar"></v-text-field> </template>
            </DatePicker>
          </div>
          <div class="application__block">
            <DatePicker v-model="insuredForm.documentExpire" locale="ru" :flow="flow" model-type="dd.MM.yyyy">
              <template #trigger>
                <v-text-field v-model="insuredForm.documentExpire" :counter="12" :rules="phoneRules" label="Срок действия" required clearable variant="plain" class="application__input" append-icon="mdi-calendar"></v-text-field>
              </template>
            </DatePicker>
          </div>
        </div>
        <div class="application__blocks">
          <div class="application__header">Контакты</div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.phoneNumber" :counter="10" :rules="phoneRules" label="Номер телефона" placeholder="+7 7" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.email" :counter="10" :rules="phoneRules" label="Email адрес" placeholder="user@mail.ru" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
          <div class="application__block">
            <v-text-field v-model="insuredForm.homePhone" :counter="10" :rules="phoneRules" label="Домашний телефон" placeholder="+7 7" required clearable variant="plain" class="application__input"></v-text-field>
          </div>
        </div>
        <div class="application__blocks">
          <div class="application__block">
            <v-select v-model="insuredForm.economySectorCode" :items="items" label="Код сектора экономики" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-select v-model="insuredForm.signOfResidency" :items="items" label="Признак резиденства" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-select v-model="insuredForm.countryOfCitizenship" :items="items" label="Страна гражданства" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
          <div class="application__block">
            <v-select v-model="insuredForm.countryOfTaxResidency" :items="items" label="Страна налогово резиденства" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select>
          </div>
        </div>
        <!-- <div class="application__block">
          <v-text-field v-model="insuredForm.ipdl" :counter="20" :rules="phoneRules" label="Признак ИПДЛ" required clearable variant="plain" class="application__input"></v-text-field>
          <div class="application__button">
            <img :src="require('@/assets/forth-btn.svg')" alt="" />
          </div>
        </div>
        <div class="application__block">
          <v-text-field v-model="insuredForm.disability" :counter="20" :rules="phoneRules" label="Инвалидность" required clearable variant="plain" class="application__input"></v-text-field>
          <div class="application__button">
            <img :src="require('@/assets/forth-btn.svg')" alt="" />
          </div>
        </div>
        <div class="application__block">
          <v-text-field v-model="insuredForm.residency" :counter="20" :rules="phoneRules" label="Резиденство" required clearable variant="plain" class="application__input"></v-text-field>
          <div class="application__button">
            <img :src="require('@/assets/forth-btn.svg')" alt="" />
          </div>
        </div>

        <div class="application__block">
          <v-text-field v-model="insuredForm.groupDisability" :counter="20" :rules="phoneRules" label="Группа инвалидности" required clearable variant="plain" class="application__input"></v-text-field>
          <div class="application__button">
            <img :src="require('@/assets/forth-btn.svg')" alt="" />
          </div>
        </div> -->
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'the-insured',
};
</script>
<script setup>
import { computed, ref, reactive, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isInsuredOpen = computed(() => store.state.isInsuredOpen);
const valid = ref(false);
const insuredForm = computed(() => store.state.insuredForm);

const items = ref(['Не выбрано']);

// date time
const date = ref(new Date());
const flow = ref(['year', 'month', 'calendar']);
const format = date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return ` ${day}/${month}/${year}`;
};
const phoneRules = [v => !!v || 'Поле обязательно', v => (v && v.length <= 12) || 'поле не должно быть больше 12 символов'];
// regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
function closeInsured() {
  store.commit('setStatusInsuredOpen', isInsuredOpen);
}
function setInsuredForm() {
  store.commit('setInsuredForm', state.insuredForm);
}
</script>

<style lang="scss">
.dp__main {
  width: 100%;
  font-family: Roboto !important;
}
.application__form {
  position: relative;
  margin-right: 10px;
}
.mdi-calendar {
  padding-top: 25px;
}
.settings__floating-left {
  left: 0;
  // border: 1px solid black;
  // overflow-y: scroll;
  height: 100%;
  display: inline-block;
}
.v-field {
  margin-top: 10px;
  background: #f9fffe;
  margin-left: 20px;
}
.v-input__details {
  // position: absolute;
  left: 140px;
  top: 12.5px;
  // overflow: visible;
}
.v-counter {
  // position: absolute;
  right: -80px;
}
</style>

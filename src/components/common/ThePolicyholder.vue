<template>
  <div class='settings__floating settings__floating-left'>
    <div>
      <div class='application__block'>
        <div class='application__button application__button-pad' @click='$router.go(-1)'>
          <img :src="require('@/assets/back-btn.svg')" alt='' />
        </div>
        <div class='application__text application__text-50pad'>Страхователь</div>

        <div class='application__button application__button-pad'>
          <img :src="require('@/assets/more-btn.svg')" alt='' />
        </div>
      </div>
      <v-form v-model='valid' @submit.prevent='setPolicyholder' class='application__form'>
        <div class='application__blocks'>
          <div class='application__header'>Персональные данные</div>

          <div class='application__block'>
            <v-text-field v-model='policyholderForm.iin' v-maska="'### ### ### ###'" placeholder='000 000 000 000'
                          :rules='phoneRules' label='ИИН' required clearable variant='plain'
                          class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.surname' :counter='12' :rules='phoneRules' label='Фамилия' required
                          clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.name' :counter='12' :rules='phoneRules' label='Имя' required
                          clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.middlename' :counter='12' :rules='phoneRules' label='Отчество'
                          required clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <!-- {{ policyholderForm.bornDate }} -->
            <v-text-field v-model='policyholderForm.bornDate' v-maska="'##.##.####'" label='Дата рождения' required
                          clearable variant='plain' class='application__input'></v-text-field>
            <DatePicker v-model='policyholderForm.bornDate' locale='ru' :flow='flow' model-type='dd.MM.yyyy'
                        class='datepicker'>
              <template #trigger>
                <div class='v-input__append'><i
                  class='mdi-calendar mdi v-icon notranslate v-theme--light v-icon--size-default'
                  aria-hidden='true'></i></div>
              </template>
            </DatePicker>
          </div>
          <!-- <div class="application__block"><v-text-field v-model="policyholderForm.bornDate" label="Дата рождения" required clearable variant="plain" class="application__input"></v-text-field></div> -->
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.age' :counter='12' :rules='phoneRules' label='Возраст' required
                          clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <!-- <v-text-field v-model="policyholderForm.sex" :counter="12" :rules="phoneRules" label="Пол" required clearable variant="plain" class="application__input"></v-text-field> -->
            <v-radio-group v-model='policyholderForm.sex' row class='application__radio'>
              <template #label>
                <div class='application__text-color'>Пол</div>
              </template>

              <v-radio label='Мужской' value='Мужской' color='green' class='application__text-color'></v-radio>
              <v-radio label='Женский' value='Женский' color='green' class='application__text-color'></v-radio>
            </v-radio-group>
            <!-- <div class="application__checkboxes">
              <v-checkbox v-model="ex4" label="Мужской" value="Мужской" color="green" hide-details></v-checkbox>
              <v-checkbox v-model="ex4" label="Женский" value="Женский" color="green" hide-details></v-checkbox>
            </div> -->
          </div>
        </div>

        <div class='application__blocks'>
          <div class='application__header'>Адрес</div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.country' :items='items' label='Страна' variant='plain'
                      density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.province' :items='items' label='Область' variant='plain'
                      density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.region' label='Регион' :items='items' variant='plain'
                      density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block-grid application__block-grid-start'>
            <!-- <v-select v-model="policyholderForm.region" label="Вид населенного пункта" :items="items" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select> -->
            <div class='application__text-hint'>Вид населенного пункта</div>
            <div class='application__checkboxes'>
              <v-checkbox v-model='policyholderForm.regionType' label='поселок' color='green' value='поселок'
                          hide-details></v-checkbox>
              <v-checkbox v-model='policyholderForm.regionType' label='село' color='green' value='село'
                          hide-details></v-checkbox>
              <v-checkbox v-model='policyholderForm.regionType' label='город' color='green' value='город'
                          hide-details></v-checkbox>
            </div>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.city' :counter='12' :rules='phoneRules' label='Город' required
                          clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.quarter' :counter='12' :rules='phoneRules' label='Квартал' required
                          clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.microdistrict' :counter='12' :rules='phoneRules' label='Микрорайон'
                          required clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.street' :counter='12' :rules='phoneRules' label='Улица' required
                          clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.numberHouse' :counter='12' :rules='phoneRules' label='№ дома'
                          required clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.numberApartment' :counter='12' :rules='phoneRules' label='№ кв. '
                          required clearable variant='plain' class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.address' :counter='12' :rules='phoneRules' label='Адрес' required
                          clearable variant='plain' class='application__input'></v-text-field>
          </div>
        </div>
        <div class='application__blocks'>
          <div class='application__header'>Документы</div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.documentType' :items='items' label='Тип документа' variant='plain'
                      density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.documentAuthority' :items='items' label='Орган выдачи' variant='plain'
                      density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.documentNumber' :counter='12' :rules='phoneRules'
                          label='Номер документа' required clearable variant='plain'
                          class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.documentDate' v-maska="'##.##.####'" label='Дата выдачи' required
                          clearable variant='plain' class='application__input'></v-text-field>
            <DatePicker v-model='policyholderForm.documentDate' locale='ru' :flow='flow' model-type='dd.MM.yyyy'
                        class='datepicker'>
              <template #trigger>
                <div class='v-input__append'><i
                  class='mdi-calendar mdi v-icon notranslate v-theme--light v-icon--size-default'
                  aria-hidden='true'></i></div>
              </template>
            </DatePicker>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.documentExpire' v-maska="'##.##.####'" label='Срок действия'
                          required clearable variant='plain' class='application__input'></v-text-field>
            <DatePicker v-model='policyholderForm.documentExpire' locale='ru' :flow='flow' model-type='dd.MM.yyyy'
                        class='datepicker'>
              <template #trigger>
                <div class='v-input__append'><i
                  class='mdi-calendar mdi v-icon notranslate v-theme--light v-icon--size-default'
                  aria-hidden='true'></i></div>
              </template>
            </DatePicker>
          </div>
        </div>
        <div class='application__blocks'>
          <div class='application__header'>Контакты</div>

          <div class='application__block'>
            <!-- v-maska="'+7 (___) ___ __ __'"  -->
            <v-text-field v-model='policyholderForm.phoneNumber' v-maska="'+7 (###) ### ## ##'" :rules='phoneRules'
                          label='Номер телефона' placeholder='+7 7' required clearable variant='plain'
                          class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.email' :rules='phoneRules' label='Email адрес'
                          placeholder='user@mail.ru' required clearable variant='plain'
                          class='application__input'></v-text-field>
          </div>
          <div class='application__block'>
            <v-text-field v-model='policyholderForm.homePhone' :rules='phoneRules' label='Домашний телефон'
                          placeholder='+7 7' required clearable variant='plain'
                          class='application__input'></v-text-field>
          </div>
        </div>
        <div class='application__blocks'>
          <div class='application__block'>
            <v-select v-model='policyholderForm.economySectorCode' :items='items' label='Код сектора экономики'
                      variant='plain' density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.signOfResidency' :items='items' label='Признак резиденства'
                      variant='plain' density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.countryOfCitizenship' :items='items' label='Страна гражданства'
                      variant='plain' density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
          </div>
          <div class='application__block'>
            <v-select v-model='policyholderForm.countryOfTaxResidency' :items='items'
                      label='Страна налогово резиденства' variant='plain' density='comfortable' item-text='Не выбрано'
                      item-value='Не выбрано'
            ></v-select>
          </div>
        </div>
        <the-button type='submit' />
      </v-form>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'the-policyholder',
  data() {
    return {
      valid: true,
      policyholderForm: {
        iin: '',
        name: '',
        surname: '',
        middlename: '',
        bornDate: '',
        age: '',
        sex: '',
        country: '',
        province: '',
        region: '',
        regionType: '',
        city: '',
        quarter: '',
        microdistrict: '',
        street: '',
        numberHouse: '',
        numberApartment: '',
        address: '',
        addressBorn: '',
        addressRegistration: '',
        addressActual: '',
        documentType: '',
        documentAuthority: '',
        documentNumber: '',
        documentDate: '',
        documentExpire: '',
        phoneNumber: '',
        email: '',
        homePhone: '',
        economySectorCode: '',
        signOfResidency: '',
        countryOfCitizenship: '',
        countryOfTaxResidency: '',
        // ipdl: '',
        disability: '',
        // residency: '',
        groupDisability: '',
      },
    };
  },
  methods: {
    ...mapMutations(['setPolicyholderForm']),
    setPolicyholder() {
      this.setPolicyholderForm(this.policyholderForm);
      console.log('1');
      console.log('2');
      this.policyholderForm = {
        iin: '',
        name: '',
        surname: '',
        middlename: '',
        bornDate: '',
        age: '',
        sex: '',
        country: '',
        province: '',
        region: '',
        regionType: '',
        city: '',
        quarter: '',
        microdistrict: '',
        street: '',
        numberHouse: '',
        numberApartment: '',
        address: '',
        addressBorn: '',
        addressRegistration: '',
        addressActual: '',
        documentType: '',
        documentAuthority: '',
        documentNumber: '',
        documentDate: '',
        documentExpire: '',
        phoneNumber: '',
        email: '',
        homePhone: '',
        economySectorCode: '',
        signOfResidency: '',
        countryOfCitizenship: '',
        countryOfTaxResidency: '',
        // ipdl: '',
        disability: '',
        // residency: '',
        groupDisability: '',
      };
    },
  },
};
</script>
<script setup>
import { computed, ref, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { useField } from 'vee-validate';
import * as yup from 'yup';

const isSnackbarOpen = ref(true);

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }

  return 'This is required';
}

function validateField(value) {
  if (!value) {
    return 'this field is required';
  }

  if (value.length < 5) {
    return 'this field must contain at least 8 characters';
  }

  return true;
}

function validateEmail(value) {
  if (!value) {
    return 'this field is required';
  }

  if (value.length < 5) {
    return 'this field must contain at least 5 characters';
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
  // All is good
  return true;
}

// const { errorMessage, value } = useField(nameRef, isRequired);
const store = useStore();
const isPolicyholderOpen = computed(() => store.state.isPolicyholderOpen);
const valid = ref(false);
// const policyholderForm = computed(() => store.state.policyholderForm);
const items = ref(['Не выбрано']);

const notFoundInDB = ref(true);

// date time
const date = ref(new Date());
const flow = ref(['year', 'month', 'calendar']);
const format = date => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return ` ${day}/${month}/${year}`;
};
const phoneRules = [v => !!v || 'Поле обязательно', v => (v && v.length <= 18) || 'поле не должно быть больше 11 символов'];

// regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
function closePolicyholder() {
  store.commit('setStatusPolicyholderOpen', isPolicyholderOpen);
}

const { value, errorMessage } = useField('fullName', validateField);
const { email, errorEmailMessage } = useField('fullName', yup.string().required().min(8));
</script>

<style lang='scss'>
.dp__main {
  width: 100%;
  font-family: Roboto !important;
}

.application__input {
  width: 100%;
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

.application__radio {
  padding: 20px;
}

.submit__placeholder {
  background: #4caf50;
  display: block;
  width: 100%;
  font-size: 22px;
  color: white !important;
  padding: 12px;
}

.v-selection-control-group {
  flex-direction: row;
  justify-content: flex-start;
  width: 300px;
}

.error {
  color: red;
  background: red;
}

.datepicker {
  width: 5% !important;
  // padding-bottom: 30px;
  // padding-top: 10px;
}

.mdi-calendar {
  padding-top: 5px;
}

.v-input__append {
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.v-icon {
  cursor: pointer;
}

.snackbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 27px;

  background: #4caf50;
  margin-bottom: 50px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;

  gap: 250px;
  color: #ffffff;
  text-align: start;

  transition: all 1.8s ease-out;
}
</style>

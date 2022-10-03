<template>
  <v-form class='application__form'>
    <div class='application__block'>
      <div class='application__button application__button-pad' @click='$router.go(-1)'>
        <img :src="require('@/assets/back-btn.svg')" alt='' />
      </div>
      <div class='application__text application__text-50pad'>Страхователь</div>
    </div>
    <div class='application__blocks'>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.iin' v-maska="'### ### ### ###'" placeholder='000 000 000 000'
                      label='ИИН' required disabled clearable variant='plain'
                      class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.surname' :counter='12' label='Фамилия' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.name' :counter='12' label='Имя' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.middlename' :counter='12' label='Отчество'
                      required disabled clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <!-- {{ policyholderForm.bornDate }} -->
        <v-text-field v-model='policyholderForm.bornDate' v-maska="'##.##.####'" label='Дата рождения' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
        <DatePicker readonly v-model='policyholderForm.bornDate' locale='ru' model-type='dd.MM.yyyy'
                    class='datepicker'>
          <template #trigger>
            <div class='v-input__append'><i
              class='mdi-calendar mdi v-icon notranslate v-theme--light v-icon--size-default'
              aria-hidden='true'></i></div>
          </template>
        </DatePicker>
      </div>
      <!-- <div class="application__block"><v-text-field v-model="policyholderForm.bornDate" label="Дата рождения" required disabled clearable variant="plain" class="application__input"></v-text-field></div> -->
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.age' :counter='12' label='Возраст' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <!-- <v-text-field v-model="policyholderForm.sex" :counter="12" :rules="phoneRules" label="Пол" required disabled clearable variant="plain" class="application__input"></v-text-field> -->
        <v-radio-group disabled v-model='policyholderForm.sex' row class='application__radio'>
          <template #label>
            <div class='application__text-color'>Пол</div>
          </template>

          <v-radio label='Мужской' value='Мужской' color='green' class='application__text-color'></v-radio>
          <v-radio label='Женский' value='Женский' color='green' class='application__text-color'></v-radio>
        </v-radio-group>
      </div>
    </div>

    <div class='application__blocks'>
      <div class='application__header'>Адрес</div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.country' label='Страна' variant='plain'
                  density='comfortable' item-disabled item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.province' label='Область' variant='plain'
                  density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.region' label='Регион' variant='plain'
                  density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block-grid application__block-grid-start'>
        <!-- <v-select disabled v-model="policyholderForm.region" label="Вид населенного пункта" :items="items" variant="plain" density="comfortable" item-text="Не выбрано" item-value="Не выбрано"></v-select> -->
        <div class='application__text-hint'>Вид населенного пункта</div>
        <div class='application__checkboxes'>
          <v-checkbox v-model='policyholderForm.regionType' disabled label='поселок' color='green' value='поселок'
                      hide-details></v-checkbox>
          <v-checkbox v-model='policyholderForm.regionType' disabled label='село' color='green' value='село'
                      hide-details></v-checkbox>
          <v-checkbox v-model='policyholderForm.regionType' disabled label='город' color='green' value='город'
                      hide-details></v-checkbox>
        </div>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.city' :counter='12' label='Город' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.quarter' :counter='12' label='Квартал' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.microdistrict' :counter='12' label='Микрорайон'
                      required disabled clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.street' :counter='12' label='Улица' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.numberHouse' :counter='12' label='№ дома'
                      required disabled clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.numberApartment' :counter='12' label='№ кв. '
                      required disabled clearable variant='plain' class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.address' :counter='12' label='Адрес' required disabled
                      clearable variant='plain' class='application__input'></v-text-field>
      </div>
    </div>
    <div class='application__blocks'>
      <div class='application__header'>Документы</div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.documentType' label='Тип документа' variant='plain'
                  density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.documentAuthority' label='Орган выдачи' variant='plain'
                  density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.documentNumber' :counter='12'
                      label='Номер документа' required disabled clearable variant='plain'
                      class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.documentDate' v-maska="'##.##.####'" label='Дата выдачи' required
                      disabled
                      clearable variant='plain' class='application__input'></v-text-field>
        <DatePicker readonly v-model='policyholderForm.documentDate' locale='ru' model-type='dd.MM.yyyy'
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
                      required disabled clearable variant='plain' class='application__input'></v-text-field>
        <DatePicker readonly v-model='policyholderForm.documentExpire' locale='ru' model-type='dd.MM.yyyy'
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
        <v-text-field v-model='policyholderForm.phoneNumber' v-maska="'+7 (###) ### ## ##'"
                      label='Номер телефона' placeholder='+7 7' required disabled clearable variant='plain'
                      class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.email' label='Email адрес'
                      placeholder='user@mail.ru' required disabled clearable variant='plain'
                      class='application__input'></v-text-field>
      </div>
      <div class='application__block'>
        <v-text-field v-model='policyholderForm.homePhone' label='Домашний телефон'
                      placeholder='+7 7' required disabled clearable variant='plain'
                      class='application__input'></v-text-field>
      </div>
    </div>
    <div class='application__blocks'>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.economySectorCode' label='Код сектора экономики'
                  variant='plain' density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.signOfResidency' label='Признак резиденства'
                  variant='plain' density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.countryOfCitizenship' label='Страна гражданства'
                  variant='plain' density='comfortable' item-text='Не выбрано' item-value='Не выбрано'></v-select>
      </div>
      <div class='application__block'>
        <v-select disabled v-model='policyholderForm.countryOfTaxResidency'
                  label='Страна налогово резиденства' variant='plain' density='comfortable' item-text='Не выбрано'
                  item-value='Не выбрано'></v-select>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'TheDisabledPolicyholderData',
  data() {
    return {
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
  mounted() {
    this.policyholderForm = this.$store.state.policyholderForm;
  },
};
</script>

<style scoped>
.application__blocks {
  border: none;
}

.v-field--disabled {
  opacity: unset !important;
}
</style>

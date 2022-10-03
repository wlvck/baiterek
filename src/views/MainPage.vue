<template>
  <div class='mainpage'>
    <!-- <HelloWorld /> -->
    <!-- {{ isApplicationSettingsOpen }}{{ isPolicyholderOpen }} -->
    <Transition>
      <the-customer-data v-if='isCustomerDataOpen' />
    </Transition>
    <Transition name='slide-fade1'>
      <the-policyholder v-if='isPolicyholderOpen' />
    </Transition>
    <Transition name='slide-fade1'>
      <the-insured v-if='isInsuredOpen' />
    </Transition>
    <Transition name='slide-fade'>
      <the-application-settings v-if='isApplicationSettingsOpen' />
    </Transition>
    <Transition name='slide-fade'>
      <the-block-settings v-if='isBlockSettingsOpen' />
    </Transition>
    <Transition name='slide-fade'>
      <the-product-conditions v-if='isProductConditionsOpen' />
    </Transition>
    <the-application />
    <the-button />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isPolicyholderOpen = computed(() => store.state.isPolicyholderOpen);
const isInsuredOpen = computed(() => store.state.isInsuredOpen);
const isCustomerDataOpen = computed(() => store.state.isCustomerDataOpen);
const isApplicationSettingsOpen = computed(() => store.state.isApplicationSettingsOpen);
const isBlockSettingsOpen = computed(() => store.state.isBlockSettingsOpen);
const isProductConditionsOpen = computed(() => store.state.isProductConditionsOpen);
</script>

<style lang='scss'>
.mainpage {
  position: relative;
  text-align: center;

  margin-top: 60px;
  width: 860px;
  //height: 800px;
  margin: auto;
  border: 0.2px solid rgb(158, 158, 158);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #2c3e50;
  overflow-x: hidden;
  height: 100vh;
  overflow-y: scroll;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #009C73;
  }
}
</style>

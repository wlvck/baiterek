import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import TheApplication from '@/components/TheApplication.vue';
import TheApplicationSettings from '@/components/common/TheApplicationSettings.vue';
import TheBlockSettings from '@/components/common/TheBlockSettings.vue';
import TheCustomerData from '@/components/common/TheCustomerData.vue';
import ThePolicyholder from '@/components/common/ThePolicyholder.vue';
import TheBeneficialOwner from '@/components/common/TheBeneficialOwner.vue';
import TheBeneficiary from '@/components/common/TheBeneficiary.vue';
import TheInsured from '@/components/common/TheInsured.vue';
import TheProductConditions from '@/components/common/TheProductConditions.vue';
import TheDisabledPolicyholderData from '@/components/common/TheDisabledPolicyholderData';
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  // {
  //   path: '/',
  //   name: 'application',
  //   component: TheApplication,
  // },
  {
    path: '/application-settings',
    name: 'application-settings',
    component: TheApplicationSettings,
  },
  {
    path: '/block-settings',
    name: 'block-settings',
    component: TheBlockSettings,
  },
  {
    path: '/customer-data',
    name: 'customer-data',
    component: TheCustomerData,
  },
  {
    path: '/policyholder',
    name: 'policyholder',
    component: ThePolicyholder,
  },
  {
    path: '/disabled-policyholder',
    name: 'disabledPolicyholder',
    component: TheDisabledPolicyholderData,
  },
  {
    path: '/beneficiary-owner',
    name: 'beneficiary-owner',
    component: TheBeneficialOwner,
  },
  {
    path: '/beneficiary',
    name: 'beneficiary',
    component: TheBeneficiary,
  },
  {
    path: '/insured',
    name: 'insured',
    component: TheInsured,
  },
  {
    path: '/product-conditions',
    name: 'product-conditions',
    component: TheProductConditions,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;

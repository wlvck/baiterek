<template>
  <div class="btn">
    <v-btn :type='type' elevation="5" block>Сохранить</v-btn>
  </div>
</template>
<script>
export default {
  name: 'the-button',
  props: ['type'],
};
</script>

<script setup></script>

<style lang="scss" scoped>
.btn {
  position: sticky;
  bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
.btn .v-btn {
  height: 70px;
}
</style>

<template>
  <div>
    <div v-if="placeholder" class="full-input" :class="typeOfInput">
      <label :for="name" class="label" :class="{ focused: focused || value != '' }">{{ label }} </label>
      <input :id="name" type="text" :value="value" class="input" :class="{ focused: focused || value != '' }" :placeholder="placeholder" @focus="focused = true" @blur="focused = false" @input="$emit('input', $event.target.value)" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'the-input',
};
</script>
<script setup>
import { ref, nextTick, onMounted, computed } from 'vue';
// import axios from "axios";
const focused = false;

const { label, value, typeOfInput, placeholder, name } = defineProps({
  label: { type: String, default: '' },
  value: { type: String, default: '' },
  typeOfInput: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  name: { type: String, default: '' },
});
</script>
\

<style lang="scss" scoped>
.full-input {
  display: inline-block;

  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  padding-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  margin: 20px 0;
  margin-bottom: 10px;
  position: relative;
  max-width: 350px;
  width: 370px;
}
.label {
  position: absolute;
  top: 20px;
  display: block;

  color: blue;
  transition: all 0.4s ease-in-out;
  color: #626d84;
  transform-origin: top left;
}
.focused.label {
  transform: translate(2px, -15px) scale(0.75);
  transition: all 0.4s ease-in-out;
  top: 20px;
  // font-size: 12px;
  // line-height: 17px;
}
.input {
  border-radius: 8px;
  outline: none;
  border: none;
  display: block;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #071222;
  transition: all 1s ease-in-out;
  opacity: 0;
}
.focused.input {
  opacity: 1 !important;
  transition: all 1s ease-in-out;
}

.normal {
  border: 1px solid #e2e4e9;
}
.red {
  border: 1px solid #ff0000;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.green {
  border: 1px solid #2aa65c;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  color: #2aa65c;
}
.green .label {
  color: #2aa65c;
}
.normal-with-input {
  border: 1px solid #e2e4e9;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.disabled {
  background: #d3d7de;

  border: 1px solid #e2e4e9;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.disabled .label {
  color: #626d84;
}
.disabled .input {
  background: #d3d7de;
}
.red-with-input-and-hint {
  border: 1px solid #ff0000;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
</style>

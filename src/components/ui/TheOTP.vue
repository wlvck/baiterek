<template>
  <div ref="otpCont">
    <input v-for="(el, ind) in digits" :key="el + ind" v-model="digits[ind]" :autofocus="ind === 0" :placeholder="ind + 1" maxlength="1" :class="{ bounce: digits[ind] !== null }" class="digit-box" type="text" @keydown="handleKeyDown($event, ind)" />
  </div>
</template>

<script>
export default {
  name: 'the-otp',
};
</script>
<script setup>
import { def } from '@vue/shared';
import { ref, reactive } from 'vue';

const props = defineProps({
  default: { type: String, default: '' },

  digitCount: {
    type: Number,
    required: true,
  },
});

const digits = reactive([]);

if (props.default && props.default.length === props.digitCount) {
  // console.log(default);
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const otpCont = ref(null);

const emit = defineEmits(['update:otp']);

const isDigitsFull = function () {
  for (const elem of digits) {
    if (elem === null || elem === undefined) {
      return false;
    }
  }

  return true;
};

const handleKeyDown = function (event, index) {
  if (event.key !== 'Tab' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    event.preventDefault();
  }

  if (event.key === 'Backspace') {
    digits[index] = null;

    if (index !== 0) {
      otpCont.value.children[index - 1].focus();
    }

    return;
  }

  if (new RegExp('^([0-9])$').test(event.key)) {
    digits[index] = event.key;

    if (index !== props.digitCount - 1) {
      otpCont.value.children[index + 1].focus();
    }

    if (isDigitsFull()) {
      emit('update:otp', digits.join(''));
    }
  }
};
</script>

<style scoped>
.digit-box {
  height: 4rem;
  width: 2rem;
  border: 2px solid black;
  display: inline-block;
  border-radius: 5px;
  margin: 5px;
  padding: 15px;
  font-size: 3rem;
  margin-bottom: 20px;
}
.digit-box:focus {
  outline: 3px solid black;
}

.bounce {
  animation: pulse 0.3s ease-in-out alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>

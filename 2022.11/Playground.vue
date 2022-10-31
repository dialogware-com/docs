<template>
  <button @click="onClick">Increase {{ counter }}</button>
  <label>tex
    <input :value="text" @input="event => text = event.target.value">
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let counter = 2
let count = ref<number>(0)
const onClick = ():void => {
  count.value++
  counter++
}
</script>


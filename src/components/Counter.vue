<template>
  <div>
    <div class="counter">counter: {{ counter }}</div>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0,
  }),
}
</script>

<template>
  <div class="button">
    <button>{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'OK'
    }
  }
}
</script>

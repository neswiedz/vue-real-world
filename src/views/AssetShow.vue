<template>
  <div>
    <h1>Asset Show</h1>
    This is page for {{ asset_id }}
  </div>
</template>

<script>
export default {
  props: ['asset_id'],
  data() {
    return {}
  },
}
</script>

<style></style>

<template>
  <div>
    <h1>Asset List</h1>
    <p>
      <router-link :to="{ name: 'asset-show', params: { asset_id: '1' } }">
        asset 1</router-link
      >
    </p>
    <p>
      <router-link :to="{ name: 'asset-show', params: { asset_id: '2' } }">
        asset 2</router-link
      >
    </p>
    <p>
      <router-link :to="{ name: 'asset-show', params: { asset_id: '3' } }">
        asset 3</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>

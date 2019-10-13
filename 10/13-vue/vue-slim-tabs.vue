<template>
  <tabs>
    <tab title="Vue">
      This is Vue
    </tab>
    <tab title="React">
      This is React
    </tab>
    <tab title="Svelte">
      This is Svelte
    </tab>
  </tabs>
</template>

<script>
module.exports = {
}
</script>

<style>
.vue-tablist {
  list-style: none;
  display: flex;
  padding-left: 0;
  border-bottom: 1px solid #e2e2e2;
}

.vue-tab {
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-bottom-color: #e2e2e2;
  border-radius: 3px 3px 0 0;
  background-color: white;
  position: relative;
  bottom: -1px;
}

.vue-tab[aria-selected="true"] {
  border-color: #e2e2e2;
  border-bottom-color: transparent;
}

.vue-tab[aria-disabled="true"] {
  cursor: not-allowed;
  color: #999;
}
</style>
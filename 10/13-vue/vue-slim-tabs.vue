<template>
  <tabs>
    <tab title="Vue">
      This is {{ tabName1 }}
    </tab>
    <tab title="React">
      This is {{ tabName2 }}
    </tab>
    <tab title="Svelte">
      This is {{ tabName3 }}
    </tab>
  </tabs>
</template>

<script>
module.exports = {
  data: () => {
    return {
      tabName1: 'Vue',
      tabName2: 'React',
      tabName3: 'Svelte'
    }
  }
}
</script>

<style>
  .vue-tabs {
    border: 1px solid gray;
  }
</style>
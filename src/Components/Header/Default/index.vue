<template functional>
  <header class="_header:default">
    <div class="_header:default-content">
      <oston-image source="oi.svg" alt="Oi" />
      <h1 class="_header:default-title">
        Recarregue e ganhe<br />até 3GB de bônus
      </h1>
    </div>
    <p class="_header:default-text" v-if="props.text" v-html="props.text" />
  </header>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

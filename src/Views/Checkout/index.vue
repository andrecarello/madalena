<template>
  <oston-layout layout="form">
    <oston-container>
      <oston-header
        text="Na 1ª recarga com cartão ou através dos bancos conveniados, o bônus é de 10GB recarregando a partir de R$ 20. Bônus válido por 7 dias."
      />
      <h3 class="form:title">Recarga no valor de: R$20,00</h3>
    </oston-container>
    <main class="form:content">
      <hr class="form:rule" />
      <oston-container>
        <router-view />
      </oston-container>
    </main>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

<template functional>
  <section>
    <div class="_safe">
      <p class="_safe:text">TRANSAÇÃO<strong>SEGURA</strong></p>
      <oston-image
        class="_safe:mastercard"
        source="mastercard.svg"
        alt="Mastercard"
      />
      <oston-image class="_safe:visa" source="visa.svg" alt="Visa" />
      <oston-image class="_safe:elo" source="elo.svg" alt="Elo" />
      <oston-image class="_safe:diners" source="diners.svg" alt="Dinners" />
      <oston-image
        class="_safe:hipercard"
        source="hipercard.svg"
        alt="Hipercard"
      />
    </div>
    <p v-if="props.helpText" class="_safe:text">
      <small>
        Confira a lista de bancos elegíveis: Banco do Brasil, Banrisul, Caixa
        Econômica Federal, Bradesco, Banpará, Itaú, Santander e Tribanco
      </small>
    </p>
  </section>
</template>
<style lang="scss" src="./index.scss"></style>

<template>
  <oston-layout>
    <oston-container>
      <oston-header
        text="Na 1ª recarga com cartão de crédito ou através dos bancos conveniados, o
        bônus é de 10GB recarregando a partir de R$20. Nas demais recargas,
        continue usando esses canais e ganhe até 3GB de bônus."
      />

      <h3 class="home:subtitle">Escolha um valor</h3>

      <main class="home:recharges">
        <a
          v-for="(recharge, index) in recharges"
          v-show="recharge.value <= limit"
          :key="index"
          :data-bonus="recharge.bonus"
          class="home:recharges-item"
          href="/checkout"
          @click.prevent.stop="setToken"
        >
          <article>
            <p class="home:recharges-text">R${{ recharge.value }}</p>
          </article>
        </a>
        <a
          href="/recharges/more"
          class="home:recharges-item"
          v-if="limit <= 35"
          @click.prevent="limit = 100"
        >
          <p class="home:recharges-more">Outros<br />valores</p>
        </a>
        <div v-else class="home:recharges-item _g:disabled">
          <p class="home:recharges-info">
            Bônus para navegar<br />válido por 7 dias
          </p>
        </div>
      </main>

      <oston-safe-transaction :helpText="true" />
    </oston-container>

    <oston-banners :banners="banners" />
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

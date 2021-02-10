<template>
  <div class="_banners:default">
    <h2 class="_banners:default-title">
      Aproveite também descontos em serviços e produtos no Oi Vantagens
    </h2>
    <div v-if="banners.length > 1" class="_banners:default-items">
      <div v-for="(banner, index) in banners" :key="index * Math.random()" class="_banners:default-item">
        <oston-intersepted-image
          class="_banners:default-image"
          :source="banner.image"
          :alt="banner.title"
        />

        <oston-intersepted-image
          :container="true"
          class="_banners:default-brand"
          :source="banner.logo"
          :alt="banner.text"
        />
      </div>
    </div>
    <div class="_banners:default-items" v-else>
      <div class="_banners:default-item">
        <oston-image
          class="_banners:default-image"
          source="http://api.oston.io/images/cupomedia/banners/VeADns9p0qJB3uiH78cPEbsc2BSFUx44siWfago2.jpeg"
          alt=""
        />

        <oston-image
          :container="true"
          class="_banners:default-brand"
          source="http://api.oston.io/images/cupomedia/banners_logo/JjOrFxyDraXlRNVggShp0U6RtEMXAHqFiCQjCtng.jpeg"
          alt=""
        />
      </div>
      <div class="_banners:default-item">
        <oston-image
          class="_banners:default-image"
          source="http://api.oston.io/images/cupomedia/banners/JppZl18NSxwIsmVJrwejUhRARACw6NODW9sIsqZp.jpeg"
          alt=""
        />

        <oston-image
          :container="true"
          class="_banners:default-brand"
          source="http://api.oston.io/images/cupomedia/banners_logo/rQzsdJrONVn3S8NWq6bLR3AiJzFpUYZNRV8yGWst.jpeg"
          alt=""
        />
      </div>
      <div class="_banners:default-item">
        <oston-image
          class="_banners:default-image"
          source="http://api.oston.io/images/cupomedia/banners/Nip0GQAZA3kEv9cTNa62y1EnUv5TyP9m6q3jrI05.jpeg"
          alt=""
        />

        <oston-image
          :container="true"
          class="_banners:default-brand"
          source="http://api.oston.io/images/cupomedia/banners_logo/GKMNhiJbtDCmYFlW8JdlMms62iO6ecZvsz7JUaUA.jpeg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

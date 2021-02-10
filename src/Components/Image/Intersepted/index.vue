<template>
  <intersect @enter="intersepted = true">
    <figure class="intersepted:image">
      <transition name="fade">
        <img
          v-bind:alt="alt"
          v-bind:src="source"
          v-on:load="onLoaded"
          v-show="loaded"
          v-if="intersepted"
          ref="image"
        />
      </transition>
      <div class="intersepted:loading" v-if="!loaded">
        <div><i v-for="i in 3" :key="i" /></div>
      </div>
    </figure>
  </intersect>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

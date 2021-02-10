<template>
  <div class="layout:base" :class="layout ? 'layout:' + layout : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style lang="scss">
%layout-default {
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  @include padding(
    only,
    (
      top: 50,
    )
  );
}

.layout {
  &\:base {
    @extend %layout-default;
    @include multiple-gradient("left", color(green) 0%, color(lime) 100%);
  } // base
} // layout
</style>

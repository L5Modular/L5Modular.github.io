<template>
  <svg id="l5modular-logo" data-name="L5Modular Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 879.62627 879.62627">
    <transition name="fade">
      <g v-if="show.large" id="Large_Module" class="module" data-name="Large Module">
        <polygon class="cls-1" points="282.067 110.67 402.426 141.966 630.696 82.624 510.716 56.138 282.067 110.67"/>
        <polygon class="cls-2" points="630.696 573.873 402.426 675.214 402.426 142.016 630.696 82.624 630.696 573.873"/>
      </g>
    </transition>
    <transition name="fade">
      <g v-if="show.small" id="Small_Module" class="module" data-name="Small Module">
        <polygon class="cls-2" points="654.968 498.594 764.747 451.821 764.747 621.022 654.968 676.948 654.968 498.594"/>
      </g>
    </transition>
    <g id="Laravel">
      <polygon class="cls-3" points="270.661 549.787 270.661 176.22 150.505 141.885 150.505 676.948 270.661 736.571 402.737 802.109 402.737 606.06 270.661 549.787"/>
      <polygon class="cls-4" points="654.968 676.948 402.737 802.109 402.737 606.06 654.968 498.594 654.968 676.948"/>
      <polygon class="cls-4" points="764.747 281.168 654.968 320.239 654.968 498.594 764.747 451.821 764.747 281.168"/>
      <polygon class="cls-5" points="654.968 498.665 521.495 451.21 270.661 549.787 402.829 606.099 654.968 498.665"/>
      <polygon class="cls-5" points="630.696 244.91 764.747 281.168 654.968 320.239 521.495 280.6 630.696 244.91"/>
      <polygon class="cls-5" points="282.067 110.67 402.426 141.966 270.661 176.22 150.814 141.973 282.067 110.67"/>
      <polygon class="cls-4" points="402.426 498.714 270.661 549.787 270.661 176.22 402.426 141.966 402.426 498.714"/>
      <polygon class="cls-3" points="654.968 498.665 521.495 451.21 521.495 280.6 654.968 320.239 654.968 498.665"/>
    </g>
    <transition name="fade-slow">
      <g v-if="show.medium" id="Medium_Module" class="module" data-name="Medium Module">
        <polygon class="cls-6" points="402.737 606.06 270.661 549.787 270.661 362.046 402.737 409.81 402.737 606.06"/>
        <polygon class="cls-2" points="654.968 498.594 402.737 606.06 402.737 409.81 654.968 320.239 654.968 498.594"/>
        <polygon class="cls-1" points="521.495 280.6 654.968 320.239 402.737 409.81 270.661 362.046 521.495 280.6"/>
      </g>
    </transition>
  </svg>
</template>

<script>

export default {
  name: 'Logo',
  data() {
    return {
      show: {
        small: false,
        medium: false,
        large: false,
      }
    }
  },
  mounted() {
    setTimeout(() => this.show.small = true, 1000)
    setTimeout(() => this.show.large = true, 1200)
    setTimeout(() => this.show.medium = true, 1400)
  }
}
</script>

<style lang="sass">
  svg#l5modular-logo
    width: 260px
    // .module
    //   opacity: 0

  .cls-1
    fill: #e5f9eb
    fill: #8ceaa4

  .cls-2
    fill: #c8edd3
    fill: #54b27e

  .cls-3
    fill: #e8957c
    fill: #c14023

  .cls-4
    fill: #eda391
    fill: #d35442

  .cls-5
    fill: #f4d3ce
    fill: #ed897e

  .cls-6
    fill: #bee5c8
    fill: #3ba06c

  .fade-enter-active, .fade-leave-active
    transition: opacity .15s ease
  .fade-slow-enter-active, .fade-slow-leave-active
    transition: opacity .3s ease
  .fade-enter, .fade-leave-to,
  .fade-slow-enter, .fade-slow-leave-to
    opacity: 0
</style>

<script lang="ts">
export default {
  props: ['color', 'size'],
  computed: {
    cssVars() {
      return {
        /* variables you want to pass to css */
        '--color': this.color,
        '--size': this.size,
        '--translate': this.translate
      }
    }
  },
  data() {
    return {
      translate: "1px"
    }
  },
  el: '#sphere',
  methods: {
    // mouseOver() {
    //   this.translate = "10px";
    // },
    move: function (e: Event, value: number) {
      const el = e.target as HTMLElement;
      console.log("El ", el);
      // el.style.background = `orange`;
      // el.style.transform = `translate-x(${value}px)`;
      this.translate = `${value}px`;
    }
  },

}

</script>

<template>
  <!-- <div class="sphere" :style="cssVars" @mouseover="mouseOver()"></div> -->
  <div id="sphere" class="sphere" :style="cssVars" v-on:click="move($event, 100)"></div>
</template >

<style scoped>
.sphere {
  cursor: pointer;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: var(--color);
  transform: translate(var(--translate), 0);
}
</style>

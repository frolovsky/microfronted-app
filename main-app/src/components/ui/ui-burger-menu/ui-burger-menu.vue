<!-- TODO: rewrite to functional component -->
<template>
  <span class="burger" :style="burgerComputedStyles">
    <span class="burger__stroke" :style="strokeComputedStyles"></span>
    <span class="burger__stroke" :style="strokeComputedStyles"></span>
    <span class="burger__stroke" :style="strokeComputedStyles"></span>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CSSProperties } from 'vue/types/jsx';

@Component({
  name: 'UiBurgerMenu',
})
export default class UiBurgerMenu extends Vue {
  @Prop({ type: Boolean, default: false }) isOpen!: boolean;
  @Prop({ type: Number, default: 30 }) width!: number;
  @Prop({ type: Number, default: 20 }) height!: number;

  get burgerComputedStyles(): CSSProperties {
    return {
      height: `${this.height}px`,
      width: `${this.width}px`,
    };
  }

  get strokeComputedStyles(): CSSProperties {
    const height = Math.floor(this.height / 5);
    return {
      width: `${this.width}px`,
      height: `${height}px`,
    };
  }
}
</script>

<style lang="scss" scoped>
.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    .burger__stroke {
      background-color: #4e5076;
    }
  }

  &__stroke {
    border-radius: 10px;
    background-color: #696ca0;
    transition: background-color 0.2s;
  }
}
</style>

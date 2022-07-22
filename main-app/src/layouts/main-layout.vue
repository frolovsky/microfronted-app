<!-- TODO: make component functional for grow performance -->
<template>
  <div class="main">
    <app-header />

    <div class="main__content">
      <router-view />
    </div>

    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const AppHeader = () =>
  import(
    /* webpackChunkName: 'app-header' */ '@/components/shared/app-header/app-header.vue'
  );

const AppFooter = () =>
  import(
    /* webpackChunkName: 'app-footer' */ '@/components/shared/app-footer/app-footer.vue'
  );

@Component({
  name: 'AuthLayout',
  components: {
    AppHeader,
    AppFooter,
  },
})
export default class MainLayout extends Vue {}
</script>

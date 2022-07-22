<!-- TODO: make component functional for grow performance -->
<template>
  <div class="auth">
    <auth-header />

    <div class="auth__content">
      <router-view />
    </div>

    <auth-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const AuthHeader = () =>
  import(
    /* webpackChunkName: 'auth-header' */ '@/components/auth/auth-header/auth-header.vue'
  );

const AuthFooter = () =>
  import(
    /* webpackChunkName: 'auth-footer' */ '@/components/auth/auth-footer/auth-footer.vue'
  );

@Component({
  name: 'AuthLayout',
  components: {
    AuthHeader,
    AuthFooter,
  },
})
export default class AuthLayout extends Vue {}
</script>

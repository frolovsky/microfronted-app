<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { IUser } from '@/store/user/types';

const AuthLayout = () =>
  import(/* webpackChunkName: 'auth-layout' */ '@/layouts/auth-layout.vue');
const MainLayout = () =>
  import(/* webpackChunkName: 'main-layout' */ '@/layouts/main-layout.vue');

@Component({
  name: 'App',
  components: {
    AuthLayout,
    MainLayout,
  },
})
export default class App extends Vue {
  @Getter('userData', { namespace: 'user' }) readonly userData!: IUser | null;

  get layout() {
    return this.userData ? MainLayout : AuthLayout;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

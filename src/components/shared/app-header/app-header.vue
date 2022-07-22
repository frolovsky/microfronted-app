<template>
  <header class="header">
    <button class="header__button">
      <ui-burger-menu />
    </button>

    <div v-if="userData" class="header__user-info user-info">
      <img
        v-if="userData.avatar"
        :src="userData.avatar"
        alt=""
        class="user-info__avatar"
      />
      <span class="user-info__name">{{ userData.username }}</span>
    </div>

    <div class="header__smart-feed smart-feed">
      <!-- try micro-fronted here -->
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { IUser } from '@/store/user/types';

const UiBurgerMenu = () =>
  import(
    /* webpackChunkName: 'ui-burger-menu' */ '@/components/ui/ui-burger-menu/ui-burger-menu.vue'
  );

@Component({
  name: 'AppHeader',
  components: {
    UiBurgerMenu,
  },
})
export default class AppHeader extends Vue {
  @Getter('userData', { namespace: 'user' }) readonly userData!: IUser | null;
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 30px 20px;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

  &__button {
    margin-right: 46px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  &__user-info {
    margin-right: 46px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      .user-info__avatar {
        opacity: 1;
      }

      .user-info__name {
        color: #4e5076;
      }
    }

    .user-info {
      &__avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #9599e2;
        margin-right: 16px;
        box-shadow: 0 0 5px #9599e2;
        opacity: 0.9;
        transition: opacity 0.2s;
      }

      &__name {
        color: #696ca0;
        font-weight: bold;
        transition: color 0.2s;
      }
    }
  }

  &__smart-feed {
    margin-left: auto;
  }
}
</style>

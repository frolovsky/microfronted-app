<template>
  <header class="header">
    <button class="header__button">
      <!-- put icon here -->
    </button>

    <div class="header__user-info user-info">
      <img src="" alt="" class="user-info__avatar" />
      <span class="user-info__name"></span>
    </div>

    <div class="header__smart-feed smart-feed">
      <!-- try micro-fronted here -->
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AppHeader',
})
export default class AppHeader extends Vue {}
</script>

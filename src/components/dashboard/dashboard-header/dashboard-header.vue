<template>
  <header class="dashboard-header">
    <button class="dashboard-header__button">
      <!-- put icon here -->
    </button>

    <div class="dashboard-header__user-info user-info">
      <img src="" alt="" class="user-info__avatar" />
      <span class="user-info__name"></span>
    </div>

    <div class="dashboard-header__smart-feed smart-feed"></div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'DashboardHeader',
})
export default class DashboardHeader extends Vue {}
</script>

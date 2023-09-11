<template>
  <div>
    <header class="header">
      <div class="controls">
        <button @click="add('first')">Add first</button>
        <button @click="add('second')">Add second</button>
      </div>
      <h1>Host application</h1>
      <ul class="tabs">
        <li v-for="tab in tabs" :key="tab.id" :class="['tabs__item', tab.isActive && 'tabs__item_active']" @click="change(tab)">{{ tab.name }}</li>
      </ul>
    </header>

    <main>
      <div v-for="tab in tabs" :key="tab.id" class="remote">
        <keep-alive>
          <component v-if="tab.isActive" :is="tab.remote"></component>
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";
import first from "remote_app/app";

type Remote = "first" | "second";

interface Tab {
  id: string;
  name: string;
  remote: Remote;
  isActive: boolean;
}

export default defineComponent({
  components: {
    first
  },
  setup() {
    const tabs: Tab[] = reactive([]);

    const change = (tab: Tab) => {
      tabs.forEach((t) => {
        t.isActive = t.id === tab.id;
      })
    };

    const add = (remote: Remote) => {
      tabs.forEach((tab) => {
        tab.isActive = false;
      });

      const unique = `ID_${Date.now()}`;
      tabs.push({
        id: unique,
        name: unique,
        remote,
        isActive: true
      })
    }

    return {
      tabs, add, change
    }
  }
})
</script>


<style scoped>

.header {
  padding-bottom: 20px;
  border-bottom: 2px solid orangered;
}

.tabs__item {
  cursor: pointer;
}
.tabs__item_active {
  color: orangered;
}
</style>

<script setup lang="ts">
import useMouseEvent from '@renderer/composables/useMouseEvent'

const { hd } = useMouseEvent()
hd()
</script>

<template>
  <Suspense>
    <router-view v-slot="{ Component }">
      <div class="drag">
        <component :is="Component" />
      </div>
    </router-view>
  </Suspense>
</template>

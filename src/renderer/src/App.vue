<script setup lang="ts">
import useMouseEvent from '@renderer/composables/useMouseEvent'
import Footer from '@renderer/components/footer.vue'

const { hd } = useMouseEvent()
hd()
</script>

<template>
  <Suspense>
    <router-view v-slot="{ Component }">
      <div class="drag">
        <component :is="Component" />
        <Footer />
      </div>
    </router-view>
  </Suspense>
</template>

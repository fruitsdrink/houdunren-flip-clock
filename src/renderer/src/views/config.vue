<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()

defineOptions({
  name: 'Config'
})
</script>

<template>
  <main
    class="p-3 drag text-white select-none bg-white bg-opacity-10 rounded-md h-full overflow-y-auto nodrag"
  >
    <div class="card mb-2">
      <h2>时钟颜色</h2>
      <div class="body">
        <div class="item">
          <span>背景颜色</span>
          <el-color-picker v-model="config.clock.bgColor" clearable />
        </div>
        <div class="item">
          <span>文字颜色</span>
          <el-color-picker v-model="config.clock.color" clearable />
        </div>
      </div>
    </div>

    <div class="card mb-2">
      <h2>倒计时</h2>
      <div class="body grid grid-cols-3 gap-1">
        <div class="item">
          <span>时</span>
          <el-input-number v-model="config.clock.timing.hour" :min="0" size="small" class="input" />
          <!-- <input v-model="config.clock.timing.hour" type="number" /> -->
        </div>
        <div class="item">
          <span>分</span>
          <el-input-number
            v-model="config.clock.timing.minute"
            :min="0"
            size="small"
            class="input"
          />
          <!-- <input v-model="config.clock.timing.minute" type="number" /> -->
        </div>
        <div class="item">
          <span>秒</span>
          <el-input-number
            v-model="config.clock.timing.second"
            :min="0"
            size="small"
            class="input"
          />
          <!-- <input v-model="config.clock.timing.second" type="number" /> -->
        </div>
      </div>
    </div>

    <div class="card">
      <h2>底部信息</h2>
      <div class="body flex-col">
        <div class="flex gap-1 justify-center">
          <div class="item">
            <span>背景颜色</span>
            <el-color-picker v-model="config.footer.bgColor" clearable />
          </div>
          <div class="item">
            <span>文字颜色</span>
            <el-color-picker v-model="config.footer.color" clearable />
          </div>
          <div class="item">
            <span>文字动画</span>
            <el-switch v-model="config.footer.animate" />
          </div>
        </div>
        <div>
          <span class="text-xs">文字内容</span>
          <el-input v-model="config.footer.text" size="small" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h2 {
  @apply text-sm opacity-80 font-bold text-center mb-2;
}
.card {
  @apply bg-[#344953] p-5 rounded-md;

  .body {
    @apply flex gap-2 justify-center bg-[#2c3e50] p-4 rounded-md;

    .item {
      @apply text-xs flex flex-col gap-1 justify-center items-center;
      -webkit-app-region: no-drag;

      .input {
        @apply w-20;
      }
    }
  }
}
</style>

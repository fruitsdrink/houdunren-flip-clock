import { defineStore } from 'pinia'
import { ref } from 'vue'

type UseConfigStoreOptions = {
  clock: {
    type: 'clock' | 'timing'
    timing?: {
      hour?: number
      minute?: number
      second?: number
    }
    bgColor?: string
    color?: string
  }
  footer?: {
    bgColor: string
    color: string
  }
}
export const useConfigStore = defineStore('config', () => {
  const config = ref<UseConfigStoreOptions>({
    clock: { type: 'clock', bgColor: '#f00', color: '#fff' },
    footer: {
      color: '#fff',
      bgColor: '#f00'
    }
  })

  return {
    config
  }
})

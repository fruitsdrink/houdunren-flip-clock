import { defineStore } from 'pinia'
import { ref } from 'vue'

type UseConfigStoreOptions = {
  clock: {
    type: 'clock' | 'timing'
    timing: {
      hour: number
      minute: number
      second: number
    }
    bgColor?: string
    color?: string
  }
  footer: {
    bgColor: string
    color: string
    text: string
    animate: boolean
  }
}
export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref<UseConfigStoreOptions>({
      clock: {
        type: 'clock',
        bgColor: '#f00',
        color: '#fff',
        timing: {
          hour: 0,
          minute: 0,
          second: 60
        }
      },
      footer: {
        color: '#fff',
        bgColor: '#f00',
        text: '水果饮料',
        animate: true
      }
    })

    return {
      config
    }
  },
  {
    persist: true
  }
)

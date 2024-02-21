import type { IgnoreMouseEventsOptions } from 'electron'
import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions) => void
    }
  }
}

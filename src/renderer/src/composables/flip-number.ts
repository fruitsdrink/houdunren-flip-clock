import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'

export interface FlipNumberOptions {
  el: string
  type: 'timing' | 'clock'
  style: string
  timing?: {
    hour?: number
    minute?: number
    second?: number
  }
}
export class FlipNumber {
  protected nums: number[] = []
  private endTime: Dayjs
  constructor(protected options: FlipNumberOptions) {
    this.options = Object.assign({ type: 'clock' }, options)
    this.endTime = dayjs()

    if (this.options.type !== 'clock' && this.options.timing) {
      Object.entries(this.options.timing).forEach(([key, value]) => {
        // console.log({ key, value })
        // console.log('test: ', this.endTime.add(value, 'second'))
        this.endTime = this.endTime.add(value, key as 'hour' | 'minute' | 'second')
      })
    }
  }

  // 获取下一个数字
  getNextNum(index: number) {
    return this.options.type === 'clock'
      ? this.getNextClockNums(index)
      : this.getNextTimingNums(index)
  }

  getNums() {
    this.options.type === 'clock' ? this.getClockNums() : this.getTimingNums()
  }

  // 获取时钟数字
  getClockNums() {
    this.nums = dayjs()
      .format('HHmmss')
      .split('')
      .map((n) => +n)
  }

  // 获取定时数字
  getTimingNums() {
    const now = dayjs()
    const hour = this.endTime.diff(now, 'hour')
    const minute = this.endTime.diff(now.add(hour, 'hour'), 'minute')
    const second = this.endTime.diff(now.add(hour, 'hour').add(minute, 'minute'), 'second')
    // 格式化数字为带前导0的字符串
    const hourStr = String(hour).padStart(2, '0')
    const minuteStr = String(minute).padStart(2, '0')
    const secondStr = String(second).padStart(2, '0')

    const len = hourStr === '00' ? 4 : 6
    this.nums = `${hourStr}${minuteStr}${secondStr}`
      .substring(6 - len)
      .split('')
      .map((n) => +n)
  }

  // 获取定时器下一个数字
  getNextTimingNums(index: number) {
    const before = this.nums[index]
    let after = before - 1
    if (index % 2) {
      after = after < 0 ? 9 : after
    } else {
      after = after < 0 ? 5 : after
    }
    return { before, after }
  }

  // 获取时钟下一个数字
  getNextClockNums(index: number) {
    const before = this.nums[index]
    let after = before + 1
    if (index % 2) {
      after = after > 9 ? 0 : after
    } else {
      after = after > 6 ? 0 : after
    }
    return { before, after }
  }
}

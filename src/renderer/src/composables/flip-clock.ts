import { FlipNumber, FlipNumberOptions } from './flip-number'

export class FlipClock extends FlipNumber {
  private main: HTMLElement
  private divs: NodeListOf<HTMLDivElement>[] = []
  private intervalId: NodeJS.Timeout | undefined = undefined

  constructor(options: FlipNumberOptions) {
    super(options)
    this.main = document.querySelector(options.el)!
    this.main.classList.add('flip-clock')
    this.addCssElement()
  }

  private addCssElement() {
    document.head.insertAdjacentHTML(
      'afterbegin',
      `
      <link rel="stylesheet" href="${this.options.style}.css" />
      `
    )
  }

  render() {
    this.clock()
    this.intervalId = setInterval(() => {
      this.getNums()
      this.updateDivNumber()
      // console.log('render...')
      // console.log(this.nums)
      if (this.nums.filter((n) => n > 0).length === 0) {
        clearInterval(this.intervalId)
      }
    }, 500)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  private updateDivNumber() {
    this.divs.forEach((divs, index) => {
      const div = divs[1]
      const { before, after } = this.getNextNum(index)
      if (Number(div.dataset.before) !== before) {
        div.classList.add('flipDown')
      }

      div.addEventListener('animationed', () => {
        divs.forEach((div) => {
          div.dataset.before = before.toString()
          div.dataset.after = after.toString()
        })

        div.classList.remove('flipDown')
      })
    })
  }

  private clock() {
    this.getNums()
    this.createSectionElement()
    this.getDivs()
  }

  private getDivs() {
    this.divs = Array.from(this.main.querySelectorAll('section')).map((section) =>
      section.querySelectorAll('div')
    )
  }

  private createSectionElement() {
    this.nums.forEach((_, index) => {
      const { before, after } = this.getNextNum(index)

      this.main.insertAdjacentHTML(
        'beforeend',
        `
      <section>
        <div data-before="${before}" data-after="${after}"></div>
        <div data-before="${before}" data-after="${after}"></div>
      </section>
      `
      )

      if (index % 2 && index !== this.nums.length - 1) {
        this.main.insertAdjacentHTML('beforeend', '<p></p>')
      }
    })
  }
}

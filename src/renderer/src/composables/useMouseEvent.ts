export default () => {
  const hd = () => {
    const app = document.querySelector('#app')! as HTMLDivElement
    app.addEventListener('mouseenter', () => {
      // 禁止鼠标穿透
      console.log('禁止穿透')
      window.api.setIgnoreMouseEvents(false)
    })

    document.body.addEventListener('mouseover', (e: MouseEvent) => {
      if (e.target === document.body) {
        // 开启鼠标穿透
        console.log('启用穿透')
        window.api.setIgnoreMouseEvents(true, {
          forward: true
        })
      }
    })
  }

  return { hd }
}

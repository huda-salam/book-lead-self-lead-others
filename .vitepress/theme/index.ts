import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './sky.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.bookStyle = 'sky'
    }
  }
}

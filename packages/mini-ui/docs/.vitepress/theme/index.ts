import Theme from 'vitepress/dist/client/theme-default'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件，自动生成的就是js，不引用也可以，需要自己手动引用注册插件组件
import { registerComponents } from './register-components.js'
import Tree from '../../../myui/tree'
export default {
    ...Theme,
    enhanceApp({ app }) {
        registerComponents(app),
        app.use(Tree)
    }
}

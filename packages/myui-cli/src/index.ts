import {Command} from 'commander'
import {onCreate} from './commands/create'
// 创建命令对象
const program = new Command()
// 注册命令、参数、回调
program.command('create')
.description('some msg')
// 添加命令参数 -t(别名) | --type <type> ，<type> 表示该参数必填，[type] 表示选填
.option('-t --type <type>','类型信息')
.action(onCreate)

// 执行命令参数解析，转换成可执行脚本
program.parse()
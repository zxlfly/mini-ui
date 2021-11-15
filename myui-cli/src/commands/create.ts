import inquirer from 'inquirer'
import { red } from 'kolorist'
// create type 支持项
const CREATE_TYPES: string[] = ['component', 'lib-entry']
// 文档分类
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据展示', '布局']
type cmdType = {
    type?: string
}
export async function onCreate(cmd?: cmdType) {
    let { type } = !!cmd ? cmd : { type: "" }
    // 如果没有在命令行参数里带入type
    if (!type) {
        const res = await inquirer.prompt([
            {
                name: 'type',
                //交互方式
                type: 'list',
                message: '(必填)请选择创建类型',
                choices: CREATE_TYPES,
                default: 0
            }
        ])
        //默认值
        type = res.type
    }
    // 如果输入的不再范围内，则输出错误提示信息并重新选择
    if (CREATE_TYPES.every((t) => type !== t)) {
        console.log(red(`当前类型仅支持：${CREATE_TYPES.join('，')}，请重新选择`));
        return onCreate()
    }
    // 合法
    try {
        switch (type) {
            case 'component':
                // 收集组件信息
                const info = await inquirer.prompt([
                    {
                        name: 'name',
                        type: 'input',
                        message: '（必填）请输入组件 name ，将用作目录及文件名：',
                        validate: (value?: string) => {
                            if (value.trim() === '') {
                                return '组件 name 是必填项！'
                            }
                            return true
                        }
                    },
                    {
                        name: 'title',
                        type: 'input',
                        message: '（必填）请输入组件中文名称，将用作文档列表显示：',
                        validate: (value?: string) => {
                            if (value.trim() === '') {
                                return '组件名称是必填项！'
                            }
                            return true
                        }
                    },
                    {
                        name: 'category',
                        type: 'list',
                        message: '（必填）请选择组件分类，将用作文档列表分类：',
                        choices: DOCS_CATEGORIES,
                        default: 0
                    }
                ])
                // 执行相关fs操作
                createComponent(info)
                break;

            case 'lib-entry':
                createLibEntry()
                break
            default:
                break
        }
    } catch (err) {
        console.log(red(`X`) + err.toString());
    }
}

function createComponent(info:object){
    // !todo
    console.log(info);
}
function createLibEntry(){
    // !todo
    console.log('createLibEntry');
}
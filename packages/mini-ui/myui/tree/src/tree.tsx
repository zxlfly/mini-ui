import { defineComponent, toRefs } from "vue"
import { treeProps, TreeProps, TreeItem } from "./tree-types"
import IconOpen from "./components/icon-open"
import IconClose from "./components/icon-close"
import useToggle from "./composables/use-toggle"
import "./tree.scss" //这样单元测试会报错
import useHighlightNode from "./composables/use-highlight"
// import './tree'


export default defineComponent({
	name: "Tree",
	props: treeProps,
	emits: [],
	setup(props: TreeProps, ctx) {
		const { data,checkable } = toRefs(props)
		const { openedData, toggle } = useToggle(data.value)
		const { nodeClassNameReflect, handleInitNodeClassNameReflect, handleClickOnNode } = useHighlightNode()
		console.log('test');
		// 增加缩进的展位元素
		const Indent = () => {
			return <span style="display: inline-block; width: 16px; height: 16px;"></span>
		}
		const renderIcon = (item: TreeItem) => {
			return item.children
				? <span onClick={() => toggle(item)} class={item.disableToggle && "toggle-disabled"}>
					{
						ctx.slots.icon
							? ctx.slots.icon(item)
							: item.open
								? <IconOpen class='mr-xs' />
								: <IconClose class='mr-xs' />
					}
				</span>
				: <Indent />
		}
		const renderNode = (item: TreeItem) => {
			const { key = "", label, disabled, open, level } = item
			const nodeId = handleInitNodeClassNameReflect(disabled, key, label) // 获取nodeId
			return (
				<div
					class={["devui-tree-node", open && "devui-tree-node__open"]}
					style={{ paddingLeft: `${24 * (level - 1)}px` }}
				>
					<div
						class={["devui-tree-node__content", nodeClassNameReflect.value[nodeId]]}
						onClick={() => handleClickOnNode(nodeId)}
					>
						<div class="devui-tree-node__content--value-wrapper">
							{
								renderIcon(item)
							}
							{ 
								checkable.value && <input type="checkbox" v-model={item.checked} />
							}
							<span class={["devui-tree-node__title", item.disabled && "select-disabled"]}>{label}</span>
						</div>
					</div>
				</div>
			)
		}


		return () => {
			return (
				<div class="devui-tree">
					{openedData.value.map((item: TreeItem) => renderNode(item))}
				</div>
			)
		}
	}
})


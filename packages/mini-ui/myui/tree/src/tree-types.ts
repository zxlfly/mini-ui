import type { PropType, ExtractPropTypes } from "vue"

export interface TreeItem {
  label: string
  children?: TreeData
  disableToggle?: boolean
  checked?: boolean
  [key: string]: any
}

export type TreeData = Array<TreeItem>;

export const treeProps = {
	data: {
		type: Array as PropType<TreeData>,
		default: () => [],
	},
	checkable: {
		type: Boolean,
		default: false
	},
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>


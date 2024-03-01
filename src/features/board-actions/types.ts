import { ReactNode } from 'react'
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'

export type Props = {
	children: ReactNode
	side?: DropdownMenuContentProps['side']
	sideOffset?: DropdownMenuContentProps['sideOffset']
	id: string
	title: string
}

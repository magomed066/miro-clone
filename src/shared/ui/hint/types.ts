import { ReactNode } from 'react'

export type Props = {
	label?: string
	children: ReactNode
	side?: 'top' | 'bottom' | 'left' | 'right'
	align?: 'start' | 'center' | 'end'
	sideOffset?: number
	alignOffset?: number
}

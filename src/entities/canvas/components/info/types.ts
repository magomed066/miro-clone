import { ReactNode } from 'react'

export type Props = {
	title: string
	boardId: string
	onEdit: (boardId: string, title: string) => void
	actions?: ReactNode
}

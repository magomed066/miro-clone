export interface Props {
	isFavorite: boolean
	disabled?: boolean
	onClick?: () => void
	userId?: string | null
	boardId: string
	orgId: string
}

import { ReactNode } from 'react'

export type Props = {
	id: string
	orgId: string
	title: string
	authorName: string
	authorId: string
	imageUrl: string
	createdAt: number
	userId?: string | null
	isFavorite: boolean
	actions?: ReactNode
}

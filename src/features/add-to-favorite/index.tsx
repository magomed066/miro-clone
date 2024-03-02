'use client'

import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import React, { FC, MouseEvent } from 'react'
import { Props } from './types'
import { useApiMutation } from '@/shared/hooks'
import { api } from '../../../convex/_generated/api'
import { toast } from 'sonner'

export const AddBoardToFavoriteFeature: FC<Props> = ({
	disabled = false,
	isFavorite = false,
	userId,
	boardId,
	orgId,
}) => {
	const { mutate: handleFavorite, pending: favoritePending } = useApiMutation(
		api.board.favorite,
	)
	const { mutate: handleUnfavorite, pending: unfavoritePending } =
		useApiMutation(api.board.unfavorite)

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (!isFavorite) {
			handleFavorite({ id: boardId }).catch(() => {
				toast.error('Failed to favorite')
			})
		} else {
			handleUnfavorite({ id: boardId }).catch(() => {
				toast.error('Failed to unfavorite')
			})
		}
	}

	return (
		<button
			disabled={favoritePending || unfavoritePending}
			onClick={handleClick}
			className={cn(
				'opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-blue-600',
				disabled && 'cursor-not-allowed opacity-75',
			)}
		>
			<Star
				className={cn('h-4 w-4', isFavorite && 'fill-blue-600 text-blue-600')}
			/>
		</button>
	)
}

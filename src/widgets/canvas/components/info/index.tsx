'use client'
import React, { FC } from 'react'
import { CanvasInfo, CanvasInfoSkeleton } from '@/entities'
import { Props } from './types'
import { useQuery } from 'convex/react'
import { api } from '../../../../../convex/_generated/api'
import { Id } from '../../../../../convex/_generated/dataModel'
import { useRenameModalStore } from '@/store'
import { BoardActionsFeature } from '@/features/board-actions'
import { Button, Hint } from '@/shared/ui'
import { Menu } from 'lucide-react'

export const InfoWidget: FC<Props> = ({ boardId }) => {
	const data = useQuery(api.board.get, {
		id: boardId as Id<'boards'>,
	})

	const { onOpen } = useRenameModalStore()

	if (!data) {
		return <CanvasInfoSkeleton />
	}

	return (
		<CanvasInfo
			boardId={data._id}
			title={data.title}
			onEdit={onOpen}
			actions={
				<Hint label="Main menu" side="bottom" sideOffset={10}>
					<Button size="icon" variant="board">
						<BoardActionsFeature title={data.title} id={data._id}>
							<Menu />
						</BoardActionsFeature>
					</Button>
				</Hint>
			}
		/>
	)
}

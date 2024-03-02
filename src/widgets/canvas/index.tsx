'use client'
import { Participants, Toolbar } from '@/entities'
import React, { FC } from 'react'
import { useSelf } from '../../../liveblocks.config'
import { Info } from './components'

type Props = {
	boardId: string
}

export const CanvasWidget: FC<Props> = ({ boardId }) => {
	// const info = useSelf((me) => me.info)

	return (
		<main className="h-screen w-full relative bg-neutral-100 touch-none">
			<Info boardId={boardId} />
			<Participants />

			<Toolbar />
		</main>
	)
}

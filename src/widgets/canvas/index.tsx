'use client'
import React, { FC } from 'react'
import { InfoWidget } from './components'
import { ParticipantsWidget } from './components/participants'
import { CanvasToolbarFeature } from '@/features'

type Props = {
	boardId: string
}

export const CanvasWidget: FC<Props> = ({ boardId }) => {
	return (
		<main className="h-screen w-full relative bg-neutral-100 touch-none">
			<InfoWidget boardId={boardId} />
			<ParticipantsWidget />

			<CanvasToolbarFeature />
		</main>
	)
}

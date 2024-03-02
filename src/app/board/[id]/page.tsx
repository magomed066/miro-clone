import { CanvasLoading, Room } from '@/entities'
import { CanvasWidget } from '@/widgets'
import React from 'react'

type Props = {
	params: {
		id: string
	}
}

const BoardIdPage = ({ params }: Props) => {
	return (
		<Room roomId={params.id} fallback={<CanvasLoading />}>
			<CanvasWidget boardId={params.id} />
		</Room>
	)
}

export default BoardIdPage

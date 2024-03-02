'use client'
import React, { FC, ReactNode } from 'react'
import { ClientSideSuspense } from '@liveblocks/react'
import { RoomProvider } from '../../../liveblocks.config'

type Props = {
	children: ReactNode
	roomId: string
	fallback: NonNullable<ReactNode> | null
}

export const Room: FC<Props> = ({ children, roomId, fallback }) => {
	return (
		<RoomProvider id={roomId} initialPresence={{}}>
			<ClientSideSuspense fallback={fallback}>
				{() => children}
			</ClientSideSuspense>
		</RoomProvider>
	)
}

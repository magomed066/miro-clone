'use client'

import { Participants, ParticipantsSkeleton } from '@/entities'
import React from 'react'
import { useOthers, useSelf } from '../../../../../liveblocks.config'
import { UserAvatar } from '@/entities/canvas/components/user-avatar'
import { connectionIdToColor } from '@/shared/lib/generate-colors'

const MAX_SHOWN_USERS = 2

export const ParticipantsWidget = () => {
	const users = useOthers()
	const currentUser = useSelf()

	const hasMoreUsers = users.length > MAX_SHOWN_USERS

	if (!users) {
		return <ParticipantsSkeleton />
	}

	return (
		<Participants>
			{users.slice(0, MAX_SHOWN_USERS).map((item) => (
				<UserAvatar
					borderColor={connectionIdToColor(item.connectionId)}
					key={item.connectionId}
					name={item?.info?.name || 'A'}
					src={item?.info?.picture}
					fallback={item.info?.name?.[0] || 'A'}
				/>
			))}

			{currentUser && (
				<UserAvatar
					borderColor={connectionIdToColor(currentUser.connectionId)}
					src={currentUser.info?.picture}
					name={`${currentUser.info?.name} (You)`}
					fallback={currentUser.info?.name?.[0] || 'Y'}
				/>
			)}

			{hasMoreUsers && (
				<UserAvatar
					name={`${users.length - MAX_SHOWN_USERS} more`}
					fallback={`+${users.length - MAX_SHOWN_USERS}`}
				/>
			)}
		</Participants>
	)
}

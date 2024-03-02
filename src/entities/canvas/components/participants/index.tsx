import React from 'react'

export const Participants = () => {
	return (
		<div className="absolute top-2 right-2 bg-white rounded-md p-3 shadow-md h-12 flex items-center">
			List of users
		</div>
	)
}

Participants.Skeleton = function ParticipantsSkeleton() {
	return (
		<div className="absolute top-2 right-2 bg-white rounded-md p-3 shadow-md h-12 flex items-center w-[100px]" />
	)
}

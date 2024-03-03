'use client'
import React, { FC } from 'react'
import { Props } from './types'

export const Participants: FC<Props> = ({ children }) => {
	return (
		<div className="absolute top-2 right-2 bg-white rounded-md p-3 shadow-md h-12 flex gap-2 items-center">
			{children}
		</div>
	)
}

export const ParticipantsSkeleton = () => {
	return (
		<div className="absolute top-2 right-2 bg-white rounded-md p-3 shadow-md h-12 flex items-center w-[100px]" />
	)
}

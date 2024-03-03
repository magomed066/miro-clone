'use client'
import React, { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage, Hint } from '@/shared/ui'
import { Props } from './types'

export const UserAvatar: FC<Props> = ({ src, name, fallback, borderColor }) => {
	return (
		<Hint label={name || 'Anonymous'} side="bottom" sideOffset={18}>
			<Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
				<AvatarImage src={src} />

				<AvatarFallback className="text-xs font-semibold">
					{fallback}
				</AvatarFallback>
			</Avatar>
		</Hint>
	)
}

import React, { FC } from 'react'
import { Props } from './types'
import Image from 'next/image'
import { cn } from '@/shared/lib/utils'
import { Hint } from '@/shared/ui'

export const OrganizationItem: FC<Props> = ({
	id,
	name,
	imageUrl,
	onClick,
	active,
}) => {
	return (
		<div className="aspect-square relative">
			<Hint label={name} side="right" align="start" sideOffset={18}>
				<Image
					fill
					src={imageUrl}
					alt={name}
					onClick={() => onClick?.(id)}
					className={cn(
						'rounded-md cursor-pointer opacity-75 hover:opacity-100 transition',
						active && 'opacity-100',
					)}
				/>
			</Hint>
		</div>
	)
}

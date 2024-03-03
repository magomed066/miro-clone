import React, { FC } from 'react'
import { Props } from './types'
import { Button, Hint } from '@/shared/ui'

export const ToolButton: FC<Props> = ({
	label,
	icon: Icon,
	onClick,
	isDisabled,
	isActive,
}) => {
	return (
		<Hint label={label} side="right" sideOffset={14}>
			<Button
				disabled={isDisabled}
				onClick={onClick}
				size="icon"
				variant={isActive ? 'boardActive' : 'board'}
			>
				<Icon />
			</Button>
		</Hint>
	)
}

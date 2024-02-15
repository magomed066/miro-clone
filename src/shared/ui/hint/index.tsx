import React, { FC } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '..'
import { Props } from './types'

export const Hint: FC<Props> = ({
	children,
	label,
	align,
	side,
	sideOffset,
	alignOffset,
}) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={100}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent
					className="text-white bg-black border-black"
					align={align}
					side={side}
					sideOffset={sideOffset}
					alignOffset={alignOffset}
				>
					<p className="font-semibold capitalize">{label}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

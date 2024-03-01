import React, { FC } from 'react'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

type Props = {
	createdAt: string
	isFavorite: boolean
	disabled: boolean
	author: string
	title: string
	onClick?: () => void
}

export const Footer: FC<Props> = ({
	title,
	createdAt,
	author,
	disabled,
	isFavorite,
	onClick,
}) => {
	return (
		<div className="relative bg-white p-3">
			<p className="text-[13px] truncate max-w-[100% - 20px]">{title}</p>
			<p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground">
				{author}, {createdAt}
			</p>

			<button
				disabled={disabled}
				onClick={onClick}
				className={cn(
					'opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-blue-600',
					disabled && 'cursor-not-allowed opacity-75',
				)}
			>
				<Star
					className={cn('h-4 w-4', isFavorite && 'fill-blue-600 text-blue-600')}
				/>
			</button>
		</div>
	)
}

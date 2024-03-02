import React, { FC, ReactNode } from 'react'

type Props = {
	createdAt: string
	isFavorite: boolean
	disabled: boolean
	author: string
	title: string
	onClick?: () => void
	favoriteAction?: ReactNode
}

export const Footer: FC<Props> = ({
	title,
	createdAt,
	author,
	favoriteAction,
}) => {
	return (
		<div className="relative bg-white p-3">
			<p className="text-[13px] truncate max-w-[100% - 20px]">{title}</p>
			<p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground">
				{author}, {createdAt}
			</p>

			{favoriteAction &&
				React.isValidElement(favoriteAction) &&
				React.cloneElement(favoriteAction, {})}
		</div>
	)
}

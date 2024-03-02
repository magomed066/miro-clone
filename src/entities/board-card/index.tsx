import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import { Overlay } from './components/overlay'
import { Props } from './types'
import { Footer } from './components/footer'
import { Skeleton } from '@/shared/ui'

export const BoardCard = ({
	id,
	title,
	imageUrl,
	authorId,
	authorName,
	orgId,
	userId,
	createdAt,
	isFavorite,
	actions,
	favoriteAction,
}: Props) => {
	const authorLabel = userId === authorId ? 'You' : authorName
	const date = formatDistanceToNow(createdAt, { addSuffix: true })

	return (
		<Link href={`/board/${id}`}>
			<div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
				<div className="relative flex-1 bg-amber-50">
					<Image src={imageUrl} alt={title} fill className="object-fit" />

					<Overlay />

					{actions}
				</div>

				<Footer
					favoriteAction={favoriteAction}
					isFavorite={isFavorite}
					title={title}
					author={authorLabel}
					createdAt={date}
					onClick={() => {}}
					disabled={true}
				/>
			</div>
		</Link>
	)
}

BoardCard.Skeleton = function BoardCardSkeleton() {
	return (
		<div className=" aspect-[100/127] rounded-lg overflow-hidden">
			<Skeleton className="h-full w-full" />
		</div>
	)
}

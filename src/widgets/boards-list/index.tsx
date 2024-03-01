'use client'

import React, { FC } from 'react'
import { Props } from './types'
import { BoardCard, EmptyBoards, EmptyFavorites, EmptySearch } from '@/entities'
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { useAuth } from '@clerk/nextjs'
import { NewBoardButtonFeature } from '@/features'

export const BoardsListWidget: FC<Props> = ({ organizationId, query }) => {
	const data = useQuery(api.boards.getBoards, { orgId: organizationId })
	const { userId } = useAuth()

	if (data === undefined) {
		return (
			<div>
				<h2 className="text-2xl">
					{query.favorites ? 'Favorite boards' : 'Team boards'}
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
					<NewBoardButtonFeature orgId={organizationId} disabled />

					{[...Array(9).keys()].map((el) => (
						<BoardCard.Skeleton key={el} />
					))}
				</div>
			</div>
		)
	}

	if (!data.length && query.search) {
		return <EmptySearch />
	}

	if (!data.length && query.favorites) {
		return <EmptyFavorites />
	}

	if (!data.length) {
		return <EmptyBoards />
	}

	return (
		<div>
			<h2 className="text-2xl">
				{query.favorites ? 'Favorite boards' : 'Team boards'}
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
				<NewBoardButtonFeature orgId={organizationId} />

				{data.map((el) => (
					<BoardCard
						key={el._id}
						id={el._id}
						orgId={el._id}
						title={el.title}
						authorId={el.authorId}
						authorName={el.authorName}
						imageUrl={el.imageUrl}
						userId={userId}
						createdAt={el._creationTime}
						isFavorite={false}
					/>
				))}
			</div>
		</div>
	)
}

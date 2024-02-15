'use client'

import React, { FC } from 'react'
import { Props } from './types'
import { EmptyBoards, EmptyFavorites, EmptySearch } from '@/entities'

export const BoardsListWidget: FC<Props> = ({ organizationId, query }) => {
	const data = []

	if (!data.length && query.search) {
		return <EmptySearch />
	}

	if (!data.length && query.favorites) {
		return <EmptyFavorites />
	}

	if (!data.length) {
		return <EmptyBoards />
	}

	return <div>{JSON.stringify(query)}</div>
}

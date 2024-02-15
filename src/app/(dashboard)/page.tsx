'use client'

import { EmptyOrganization } from '@/entities'
import { BoardsListWidget } from '@/widgets/boards-list'
import { useOrganization } from '@clerk/nextjs'
import React from 'react'

type Props = {
	searchParams: {
		search?: string
		favorites?: string
	}
}

const DashboardPage = ({ searchParams }: Props) => {
	const { organization } = useOrganization()

	return (
		<div className="flex-1 h-[calc(100vh - 80px)] p-6">
			{organization ? (
				<BoardsListWidget
					organizationId={organization.id}
					query={searchParams}
				/>
			) : (
				<EmptyOrganization />
			)}
		</div>
	)
}

export default DashboardPage

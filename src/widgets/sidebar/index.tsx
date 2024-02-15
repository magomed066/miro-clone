import React from 'react'
import { NewButtonFeature } from '@/features'
import { OrganizationsList } from '../organizations-list'

export const Sidebar = () => {
	return (
		<aside className="fixed z-[1] left-0 top-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4">
			<OrganizationsList />
			<NewButtonFeature />
		</aside>
	)
}

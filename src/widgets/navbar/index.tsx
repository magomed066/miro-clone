'use client'

import {
	InviteFeature,
	OrganizationSwitcherFeature,
	SearchFeature,
} from '@/features'
import { UserButton, useOrganization } from '@clerk/nextjs'
import React from 'react'

export const Navbar = () => {
	const { organization } = useOrganization()

	return (
		<div className=" flex items-center gap-x-4 p-5">
			<div className="hidden lg:flex lg:flex-1">
				<SearchFeature />
			</div>

			<div className="block lg:hidden flex-1">
				<OrganizationSwitcherFeature maxWidth={376} />
			</div>

			{organization ? <InviteFeature /> : null}
			<UserButton />
		</div>
	)
}

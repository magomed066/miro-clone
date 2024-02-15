'use client'

import { OrganizationItem } from '@/entities'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'

export const OrganizationsList = () => {
	const { userMemberships, setActive } = useOrganizationList({
		userMemberships: {
			infinite: true,
		},
	})

	const { organization } = useOrganization()

	const handleClick = (id: string) => {
		setActive?.({ organization: id })
	}

	if (!userMemberships.data?.length) {
		return null
	}

	return (
		<ul className="space-y-4">
			{userMemberships.data?.map((item) => (
				<OrganizationItem
					key={item.organization.id}
					id={item.organization.id}
					imageUrl={item.organization.imageUrl}
					onClick={handleClick}
					name={item.organization.name}
					active={organization?.id === item.organization.id}
				/>
			))}
		</ul>
	)
}

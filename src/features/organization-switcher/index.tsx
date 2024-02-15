import { FC } from 'react'
import { OrganizationSwitcher } from '@clerk/nextjs'
import { Props } from './types'

export const OrganizationSwitcherFeature: FC<Props> = ({ maxWidth }) => {
	return (
		<OrganizationSwitcher
			hidePersonal
			appearance={{
				elements: {
					rootBox: {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						...(maxWidth && { maxWidth: `${maxWidth}px` }),
					},
					organizationSwitcherTrigger: {
						padding: '6px',
						width: '100%',
						borderRadius: '8px',
						border: '1px solid #e5e7eb',
						justifyContent: 'space-between',
					},
				},
			}}
		/>
	)
}

import { Button, Dialog, DialogContent, DialogTrigger } from '@/shared/ui'
import { OrganizationProfile } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

export const InviteFeature = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">
					<Plus className="h-4 w-4 mr-2" />
					Invite members
				</Button>
			</DialogTrigger>

			<DialogContent className="p-0 bg-transparent border-none max-w-[800px]">
				<OrganizationProfile />
			</DialogContent>
		</Dialog>
	)
}

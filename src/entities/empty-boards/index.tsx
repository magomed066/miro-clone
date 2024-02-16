'use client'

import { Button } from '@/shared/ui'
import Image from 'next/image'
import { api } from '../../../convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { useApiMutation } from '@/shared/hooks'
import { toast } from 'sonner'

export const EmptyBoards = () => {
	const { mutate, pending } = useApiMutation(api.board.create)
	const { organization } = useOrganization()

	const handleClick = () => {
		if (!organization) return null

		mutate({
			orgId: organization.id,
			title: 'Untitled',
		})
			.then((id) => {
				toast.success('Board created')

				// Redirect to board
			})
			.catch(() => toast.error('Failed to create the board'))
	}

	return (
		<div className="h-full flex flex-col items-center justify-center">
			<Image src="/note.svg" height={110} width={110} alt="empty" />

			<h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
			<p className="text-muted-foreground text-sm mt-2">
				Start by creating a board for your organization
			</p>

			<div className="mt-6">
				<Button size="lg" disabled={pending} onClick={handleClick}>
					Create a board
				</Button>
			</div>
		</div>
	)
}

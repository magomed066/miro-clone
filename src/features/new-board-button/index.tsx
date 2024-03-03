'use client'
import React, { FC } from 'react'
import { Props } from './types'
import { cn } from '@/shared/lib/utils'
import { Plus } from 'lucide-react'
import { useApiMutation } from '@/shared/hooks'
import { api } from '../../../convex/_generated/api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const NewBoardButtonFeature: FC<Props> = ({ orgId, disabled }) => {
	const router = useRouter()
	const { mutate, pending } = useApiMutation(api.board.create)

	const handleClick = () => {
		mutate({
			title: 'Untitled',
			orgId,
		})
			.then((id) => {
				toast.success('Board created')

				router.push(`/board/${id}`)
			})
			.catch(() => {
				toast.error('Failed to create a board')
			})
	}

	return (
		<button
			onClick={handleClick}
			disabled={pending || disabled}
			className={cn(
				'col-span-1 aspect-[100/127] overflow-hidden bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6',
				(disabled || pending) &&
					'opacity-75 hover:bg-blue-600 cursor-not-allowed',
			)}
		>
			<div />

			<Plus className="h-20 w-20 text-white stroke-1" />

			<p className="text-sm text-white font-light">New board</p>
		</button>
	)
}

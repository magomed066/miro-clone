'use client'
import React, { FC } from 'react'
import { Link2, Pencil, Trash2 } from 'lucide-react'
import { Props } from './types'
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/shared/ui'
import { toast } from 'sonner'
import { useApiMutation } from '@/shared/hooks'
import { api } from '../../../convex/_generated/api'
import { ConfirmModalFeature } from '..'
import { useRenameModalStore } from '@/store'

export const BoardActionsFeature: FC<Props> = ({
	children,
	side,
	sideOffset,
	id,
	title,
}) => {
	const { onOpen } = useRenameModalStore()

	const { mutate, pending } = useApiMutation(api.board.remove)

	const copyLink = () => {
		navigator.clipboard
			.writeText(`${window.location.origin}/board/${id}`)
			.then(() => {
				toast.success('Link copied')
			})
			.catch(() => {
				toast.success('Failed to copy link')
			})
	}

	const handleDelete = () => {
		mutate({ id })
			.then(() => {
				toast.success('The board deleted')
			})
			.catch(() => {
				toast.error('Failed to delete the board')
			})
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent
				side={side}
				sideOffset={sideOffset}
				className="w-60"
				onClick={(e) => e.stopPropagation()}
			>
				<DropdownMenuItem className="p-3 cursor-pointer" onClick={copyLink}>
					<Link2 className="h-4 w-4 mr-2" />
					Copy board link
				</DropdownMenuItem>

				<DropdownMenuItem
					className="p-3 cursor-pointer"
					onClick={() => onOpen(id, title)}
				>
					<Pencil className="h-4 w-4 mr-2" />
					Rename
				</DropdownMenuItem>

				<ConfirmModalFeature
					header="Are you sure you want to delete the board?"
					description="This will delete the board and all of its content"
					disabled={pending}
					onConfirm={handleDelete}
				>
					<Button
						variant="ghost"
						className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
					>
						<Trash2 className="h-4 w-4 mr-2" />
						Delete
					</Button>
				</ConfirmModalFeature>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

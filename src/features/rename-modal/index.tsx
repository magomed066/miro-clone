import React, {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	useEffect,
	useState,
} from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogClose,
	DialogFooter,
	DialogTitle,
	Input,
	Button,
} from '@/shared/ui'
import { useRenameModalStore } from '@/store'
import { useApiMutation } from '@/shared/hooks'
import { api } from '../../../convex/_generated/api'
import { toast } from 'sonner'

export const RenameBoardModalFeature = () => {
	const { mutate, pending } = useApiMutation(api.board.update)

	const { isOpen, onClose, initialValues } = useRenameModalStore()

	const [title, setTitle] = useState(initialValues.title)

	useEffect(() => {
		setTitle(initialValues.title)
	}, [initialValues.title])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		mutate({ id: initialValues.id, title })
			.then(() => {
				toast.success('The board renamed')
				onClose()
			})
			.catch(() => {
				toast.error('Failed to change the title')
			})
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit board title</DialogTitle>
				</DialogHeader>

				<DialogDescription>Enter a new title for this board</DialogDescription>

				<form onSubmit={handleSubmit} className="space-y-4">
					<Input
						disabled={pending}
						required
						maxLength={60}
						value={title}
						onChange={handleChange}
						placeholder="Board title"
					/>

					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="outline">
								Cancel
							</Button>
						</DialogClose>
						<Button disabled={pending} type="submit">
							Save
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}

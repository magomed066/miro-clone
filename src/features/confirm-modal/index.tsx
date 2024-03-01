import React, { FC } from 'react'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/ui'
import { Props } from './types'

export const ConfirmModalFeature: FC<Props> = ({
	children,
	header,
	description,
	disabled,
	onConfirm,
}) => {
	const handleConfirm = () => {
		onConfirm()
	}

	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>{header}</AlertDialogTitle>
						<AlertDialogDescription>{description}</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction disabled={disabled} onClick={handleConfirm}>
							Confirm
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}

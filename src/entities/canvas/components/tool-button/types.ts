import { LucideIcon } from 'lucide-react'

export type Props = {
	label: string
	icon: LucideIcon
	onClick: () => void
	isActive?: boolean
	isDisabled?: boolean
}

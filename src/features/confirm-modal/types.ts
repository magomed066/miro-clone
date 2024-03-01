'use client'
import { ReactNode } from 'react'

export interface Props {
	children: ReactNode
	onConfirm: () => void
	disabled?: boolean
	header?: string
	description?: string
}

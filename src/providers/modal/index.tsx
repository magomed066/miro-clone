'use client'

import { RenameBoardModalFeature } from '@/features/rename-modal'
import React, { useEffect, useState } from 'react'

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<>
			<RenameBoardModalFeature />
		</>
	)
}

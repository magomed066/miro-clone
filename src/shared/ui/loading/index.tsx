import Image from 'next/image'
import React from 'react'

export const Loading = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<Image
				src={'/logo.svg'}
				width={120}
				height={120}
				className="animate-pulse duration-700"
				alt="Logo"
			/>
		</div>
	)
}

'use client'

import { Button, Dialog, DialogContent, DialogTrigger } from '@/shared/ui'
import { CreateOrganization } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export const EmptyOrganization = () => {
	return (
		<div className="h-[calc(100vh - 80px)] flex flex-col items-center justify-center">
			<Image src="/elements.svg" width={200} height={200} alt="Empty" />

			<h2 className="text-2xl font-semibold mt-6">Welcome to Board!</h2>
			<p className="text-muted-foreground text-sm mt-2">
				Create an organization to get started
			</p>

			<Dialog>
				<DialogTrigger asChild>
					<Button size="lg" className="mt-4">
						Create an organization
					</Button>
				</DialogTrigger>

				<DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
					<CreateOrganization />
				</DialogContent>
			</Dialog>
		</div>
	)
}

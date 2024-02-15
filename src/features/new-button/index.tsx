import { Dialog, DialogContent, DialogTrigger, Hint } from '@/shared/ui'
import { CreateOrganization } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

export const NewButtonFeature = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="aspect-square">
					<Hint
						label="Create organization"
						side="right"
						align="start"
						sideOffset={18}
					>
						<button className="bg-white/25 w-full h-full rounded-md flex justify-center items-center opacity-60 hover:opacity-100 transition">
							<Plus className="text-white" />
						</button>
					</Hint>
				</div>
			</DialogTrigger>

			<DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
				<CreateOrganization />
			</DialogContent>
		</Dialog>
	)
}

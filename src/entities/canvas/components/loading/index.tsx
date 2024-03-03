import { Loader } from 'lucide-react'
import React from 'react'
import { CanvasInfoSkeleton, ParticipantsSkeleton, ToolbarSkeleton } from '..'

export const CanvasLoading = () => {
	return (
		<main className="h-screen w-full relative bg-neutral-100 touch-none flex items-center justify-center">
			<Loader className="h-6 w-6 text-muted-foreground animate-spin" />
			<CanvasInfoSkeleton />
			<ParticipantsSkeleton />
			<ToolbarSkeleton />
		</main>
	)
}

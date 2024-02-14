import { Button } from '@/shared/ui'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-80 flex flex-col justify-center">
				<h2 className="text-center">This is an authenticated user</h2>

				<UserButton></UserButton>
			</div>
		</div>
	)
}

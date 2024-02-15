import { Navbar, OrgSidebar, Sidebar } from '@/widgets'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
	return (
		<main className="h-full">
			<Sidebar />
			<div className="pl-[60px] h-full">
				<div className="flex gap-x-3 h-full">
					<OrgSidebar />
					<div className="h-full flex-1">
						<Navbar />

						{children}
					</div>
				</div>
			</div>
		</main>
	)
}

export default DashboardLayout

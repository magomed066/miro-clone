'use client'

import React, { ChangeEvent, useEffect } from 'react'
import { Input } from '@/shared/ui'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import { useDebounceValue } from 'usehooks-ts'

export const SearchFeature = () => {
	// const [value, setValue] = useState('')
	const [value, setValue] = useDebounceValue('', 500)
	const router = useRouter()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	useEffect(() => {
		const url = qs.stringifyUrl(
			{
				url: '/',
				query: {
					search: value,
				},
			},
			{
				skipEmptyString: true,
				skipNull: true,
			},
		)

		router.push(url)
	}, [value, router])

	return (
		<div className="w-full relative flex">
			<Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />

			<Input
				className="w-full max-w-[516px] pl-9"
				placeholder="Search boards"
				onChange={handleChange}
			/>
		</div>
	)
}

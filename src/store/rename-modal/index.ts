import { create } from 'zustand'

const defaultValues = { id: '', title: '' }

interface RenameState {
	isOpen: boolean
	initialValues: typeof defaultValues
	onOpen: (id: string, title: string) => void
	onClose: () => void
}

export const useRenameModalStore = create<RenameState>((set) => ({
	isOpen: false,
	initialValues: defaultValues,

	onOpen(id, title) {
		set((prev) => ({ ...prev, isOpen: true, initialValues: { id, title } }))
	},
	onClose() {
		set((prev) => ({ ...prev, initialValues: defaultValues, isOpen: false }))
	},
}))

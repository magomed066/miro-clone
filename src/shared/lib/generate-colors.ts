import { hexColors } from '../const/colors'

export const connectionIdToColor = (id: number): string => {
	return hexColors[id % hexColors.length]
}

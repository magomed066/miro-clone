import { auth, currentUser } from '@clerk/nextjs'
import { Liveblocks } from '@liveblocks/node'
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../../../../convex/_generated/api'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

const liveBlocks = new Liveblocks({
	secret:
		'sk_dev_S8smZEPaQF40SIT6cN7pkfEcFK8kp9tQ08l3BZEfXOxkUxk_AhkibwSQJ8mOkZx8',
})

export async function POST(request: Request) {
	const authorization = await auth()
	const user = await currentUser()

	console.log('AUTH_INFO', {
		authorization,
		user,
	})

	if (!authorization || !user) {
		return new Response('Unauthorized', { status: 403 })
	}

	const { room } = await request.json()

	const board = await convex.query(api.board.get, { id: room })

	if (board?.orgId !== authorization.orgId) {
		return new Response('Unauthorized', { status: 403 })
	}

	const userInfo = {
		name: user.firstName || 'Anonymous',
		picture: user.imageUrl,
	}

	const session = liveBlocks.prepareSession(user.id, { userInfo })

	if (room) {
		session.allow(room, session.FULL_ACCESS)
	}

	const { status, body } = await session.authorize()

	return new Response(body, { status })
}

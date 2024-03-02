import { v } from 'convex/values'
import { query } from './_generated/server'

export const getBoards = query({
	args: {
		orgId: v.string(),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity()

		if (!identity) {
			throw new Error('Unauthorized')
		}

		const data = await ctx.db
			.query('boards')
			.withIndex('by_org', (q) => q.eq('orgId', args.orgId))
			.order('desc')
			.collect()

		const withFavoriteRelations = data.map((board) => {
			return ctx.db
				.query('userFavorites')
				.withIndex('by_user_board', (q) =>
					q.eq('userId', identity.subject).eq('boardId', board._id),
				)
				.unique()
				.then((favorite) => {
					return {
						isFavorite: !!favorite,
						...board,
					}
				})
		})

		const withFavoriteBoolean = Promise.all(withFavoriteRelations)

		return withFavoriteBoolean
	},
})

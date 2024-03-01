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

		return data
	},
})

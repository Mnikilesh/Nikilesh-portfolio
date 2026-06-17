import { Redis } from '@upstash/redis'

// Works with either an Upstash-native integration (UPSTASH_REDIS_REST_*)
// or a Vercel Marketplace Redis integration that injects KV_REST_API_*.
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
})

const VIEWS_KEY = 'resume:views'
const DOWNLOADS_KEY = 'resume:downloads'

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const [views, downloads] = await redis.mget(VIEWS_KEY, DOWNLOADS_KEY)
      return res.status(200).json({
        views: Number(views) || 0,
        downloads: Number(downloads) || 0,
      })
    }

    if (req.method === 'POST') {
      const { type } = req.body || {}

      if (type !== 'view' && type !== 'download') {
        return res.status(400).json({ error: 'type must be "view" or "download"' })
      }

      const key = type === 'view' ? VIEWS_KEY : DOWNLOADS_KEY
      const newCount = await redis.incr(key)

      return res.status(200).json({
        [type === 'view' ? 'views' : 'downloads']: newCount,
      })
    }

    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('resume-stats error:', err)
    return res.status(500).json({ error: 'Internal error' })
  }
}

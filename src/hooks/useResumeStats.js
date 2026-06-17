import { useState, useEffect, useCallback } from 'react'

export function useResumeStats() {
  const [stats, setStats] = useState({ views: null, downloads: null })

  useEffect(() => {
    fetch('/api/resume-stats')
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => {
        // Stats are a nice-to-have — fail silently if the API/DB isn't set up yet.
      })
  }, [])

  const track = useCallback((type) => {
    const field = type === 'view' ? 'views' : 'downloads'

    // Optimistic update so the count feels instant.
    setStats((prev) => ({ ...prev, [field]: (prev[field] ?? 0) + 1 }))

    fetch('/api/resume-stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type }),
    })
      .then((r) => r.json())
      .then((data) => setStats((prev) => ({ ...prev, ...data })))
      .catch(() => {})
  }, [])

  return { stats, track }
}

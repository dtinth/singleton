const map = ((globalThis as any)[Symbol.for('singletons')] ??= new Map())

/**
 * Returns a singleton instance with the given key, or creates one using the factory function.
 */
export function singleton<T>(key: string, factory: () => T): T {
  if (map.has(key)) return map.get(key)
  const value = factory()
  map.set(key, value)
  return value
}

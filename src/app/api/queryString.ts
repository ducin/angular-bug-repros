type Criteria = { [k: string]: number | string }

export const queryString = (criteria: Criteria) =>
  Object.entries(criteria)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

export const applyQueryString = (criteria: Criteria) => {
  const query = queryString(criteria)
  return query.length ? '?' + query : ''
}

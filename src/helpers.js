export function parseQueryString(queryString) {
  const queries = queryString.slice(1).split('&')

  const queryObj = {};

  queries.forEach(query => {
    queryObj[query.split('=')[0]] = query.split('=')[1]
  });

  return queryObj;
}
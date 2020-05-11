/**
 * encode url params
 * @param  {Object} query object
 * @return {String}
 */
const encodeUrlParams = (query) => {
  if (query === null || query === undefined) {
    return '';
  }
  return Object.keys(query).filter(key => query[key] !== undefined && query[key] !== null)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
    .join('&');
};

export default encodeUrlParams;

export const timeDifference = (current, previous) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const MS_MAP = {
    second: msPerMinute,
    minute: msPerHour,
    hour: msPerDay,
    day: msPerMonth,
    month: msPerYear,
  }

  const elapsed = current - previous;
  let timeAgo = `${Math.round(elapsed / msPerYear)} ${Math.round(elapsed / msPerYear) > 1 ? 'years' : 'year'} ago`;
  Object.entries(MS_MAP).every(([key, msPer],index, array) => {
    if(elapsed < msPer) {
      const perDiv = key === 'second' ? 1000 : array[index - 1][1];
      const rounded = Math.floor(elapsed / perDiv);
      timeAgo = `${rounded} ${rounded > 1 ? key + 's' : key} ago`;
      return false;
    } else {
      return true;
    }
  })

  return timeAgo;
}

export const formatURL = url => {
  if(!url) return url;
  const match = url.match(/(?!w{1,}\.)(\w+\.?)(\w+)(\.\w+)/g);
  return match.length ? match[0] : url;
}

export const getScrollYFromElementOrWindow = el => (
  el.scrollTop
  || el.scrollY
  || 0
)

export const isNull = o => o === null
export const isUndef = o => typeof o === 'undefined' || o === undefined
export const isFunc = o => {
  return !(isNull(o) || isUndef(o)) && typeof o === 'function'
}

export const tryUntil = (
  handler,
  tryTime,
  interval,
  callback,
) =>{
  // Create each try function
  const tryEach = (index, tryTime) => {
    const isDone = handler(index, tryTime)
    if (isDone) {
      // Invoke success callback
      isFunc(callback) && callback(true)
    } else if (index + 1 === tryTime) {
      // Invoke failed callback
      isFunc(callback) && callback(false)
    } else {
      // Invoke next try
      setTimeout(() => tryEach(index + 1, tryTime), interval)
    }
  }

  // Invoke recursive function
  tryEach(0, tryTime)
}

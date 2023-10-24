export function formatAppraisalPriceUSD(price: string) {
  let value = parseFloat(price);

  if (value >= 1000000) {
    return `$${truncate(value / 1000000, 1)}M`;
  } else if (value >= 1000) {
    return `$${truncate(value / 1000, 1)}K`;
  }
  return `$${value}`;
}

export function currentSingleUnitPriceUSD(price: string) {
  let value = parseFloat(price);

  return `US$${(Math.ceil(value * 100) / 100).toFixed(2)}`;
}

export function formatPriceChange(currentPrice: string, lastestPrice: string) {
  let current = parseFloat(currentPrice);
  let lastest = parseFloat(lastestPrice);

  return `${roundUp(current - lastest)} (${percentageDifference(current, lastest)})`;
}

function truncate(number: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  return Math.floor(number * factor) / factor;
}

function roundUp(num: number, precision = 2) {
  const multiplier = Math.pow(10, precision);

  if (num < 0) {
    return `-$${Math.ceil(-num * multiplier) / multiplier}`;
  }

  return `+$${Math.ceil(num * multiplier) / multiplier}`;
}

function percentageDifference(current: number, lastest: number, precision = 2) {
  const multiplier = Math.pow(10, precision);

  if (current - lastest < 0) {
    // return `-$${Math.ceil(-num * multiplier) / multiplier}`;

    return `-${Math.ceil(((100 * (lastest - current)) / lastest) * multiplier) / multiplier}%`;
  }

  return `+${Math.ceil(((100 * (current - lastest)) / lastest) * multiplier) / multiplier}%`;
}

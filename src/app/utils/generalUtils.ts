export function formatAppraisalPriceUSD(price: string) {
  let value = parseFloat(price);

  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(2)}K`;
  }
  return `$${value.toFixed(2)}`;
}

export function currentSingleUnitPriceUSD(price: string) {
  let value = parseFloat(price);

  return `US$${value.toFixed(2)}`;
}

export function formatPriceChange(currentPrice: string, lastestPrice: string) {
  let current = parseFloat(currentPrice);
  let lastest = parseFloat(lastestPrice);

  return `${roundNumber(current - lastest)} (${percentageDifference(current, lastest)})`;
}

function roundNumber(num: number) {
  if (num < 0) {
    let result = parseFloat((-num).toFixed(2));

    if (result === 0) {
      return '';
    }
    return `-$${parseFloat((-num).toFixed(2))}`;
  }

  let result = parseFloat((-num).toFixed(2));

  if (result === 0) {
    return '';
  }
  return `+$${parseFloat(num.toFixed(2))}`;
}

function percentageDifference(current: number, lastest: number) {
  if (current - lastest < 0) {
    return `-${parseFloat(((100 * (lastest - current)) / lastest).toFixed(2))}%`;
  }

  return `+${parseFloat(((100 * (current - lastest)) / lastest).toFixed(2))}%`;
}

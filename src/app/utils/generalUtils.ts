export function formatAppraisalPriceUSD(price: string) {
  let value = parseFloat(price);

  if (value >= 1000000) {
    return `$${truncate(value / 1000000, 1)}M`;
  } else if (value >= 1000) {
    return `$${truncate(value / 1000, 1)}K`;
  }
  return `$${value}`;
}

function truncate(number: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  return Math.floor(number * factor) / factor;
}

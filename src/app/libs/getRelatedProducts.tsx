interface RelatedProductData {
  id: number;
  thumbnail: string;
  brand: string;
  model: string;
  appraisalPriceUSD: string;
  currentSingleUnitPriceUSD: string;
  lastTradePriceUSD: string;
}

export interface ApiResponse {
  data: RelatedProductData[];
}

export default async function getRelatedProducts(): Promise<ApiResponse> {
  const response = await fetch('https://treasurer.zikto.com/api/treasurerWeb/items/related', {
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error('failed to fetch data');
  }

  return response.json();
}

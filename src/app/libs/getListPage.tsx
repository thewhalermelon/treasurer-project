export interface Item {
  id: number;
  category: string;
  thumbnail: string;
  brand: string;
  model: string;
  appraisalPriceUSD: string;
  currentSingleUnitPriceUSD: string;
  lastTradePriceUSD: string;
}

export interface ApiResponse {
  data: Item[];
}

export default async function getListPage(): Promise<ApiResponse> {
  const response = await fetch('https://treasurer.zikto.com/v2/market', { cache: 'no-cache' });

  if (!response.ok) {
    throw new Error('failed to fetch data');
  }

  return response.json();
}

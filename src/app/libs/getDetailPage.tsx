export interface ProductData {
  count: {
    likeCount: number;
  };
  data: {
    id: number;
    [key: `image${number}`]: string;
    brand: string;
    model: string;
    appraisalPriceUSD: string;
    currentSingleUnitPriceUSD: string;
    lastTradePriceUSD: string;
    basicInformationEN: string;
    materialEN: string;
    descriptionEN: string;
    periodEN: string;
    estimatedReturn: number,
    riskEN: string;
  };
}

export default async function getDetailPage(id: number): Promise<ProductData> {
  const response = await fetch(`https://treasurer.zikto.com/api/treasurerWeb/items/detail/${id}`, {
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error('failed to fetch data');
  }

  return response.json();
}

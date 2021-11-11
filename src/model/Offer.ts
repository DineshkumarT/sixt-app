interface CarGroupInfo {
  bodyStyleKey: string;
  bodyStyle: string;
  airCondition: boolean;
  automatic: boolean;
  navigationSystem: boolean;
  modelGuaranteed: boolean;
  maxPassengers: number;
  doors: number;
  modelExample: {
    name: string;
    imageUrl: string;
  };
}

interface Price {
  prefix: string;
  amount: {
    value: number;
    display: string;
    currency: string;
  };
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

interface Prices {
  basePrice: Price;
  totalPrice: Price;
  dayPrice: Price;
  crossedOutTotalPrice: Price;
  crossedOutDayPrice: Price;
}

export interface Offer {
  id: string;
  status: string;
  onRequest: boolean;
  unlimited: boolean;
  description: string;
  carGroupInfo: CarGroupInfo;
  prices: Prices;
  headlines: {
    description: string;
  };
}

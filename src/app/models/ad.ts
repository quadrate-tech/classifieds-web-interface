export class Ad {
  id: number;
  name: string;
  type?: number;
  price?: number;
  status?: number;
  images?: Array<string>;
  duration?: number;
  is_ad_promoted?: Boolean;
  promotion_duration?: Boolean;
  ad_posted_date: Date;
  ad_posted_by: string;
  city: number;
  ad_category: number;
}

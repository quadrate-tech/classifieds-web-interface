export class Ad {
  id: number;
  name: string;
  type: number; //component
  price: number;
  status: number;
  images: Array<string>;
  duration: number;
  is_ad_promoted: Boolean;
  promotion_duration: Boolean;
  ad_posted_date: Date;
  ad_posted_by: string; //this.user.id;
  city: number; //get all cities
  ad_category: number; //get all sub categories of a parent category
}

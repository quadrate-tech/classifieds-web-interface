export class PromotedAdDetails {
  public pa_ad_id: number;
  public ad_id: number;
  public promotion_id: number;
  public starting_date: string;
  public status: string;
  public is_deleted: boolean;

  constructor( Pa_ad_id: number, ad_id: number, promotion_id: number, starting_date: string, status: string, is_deleted: boolean) {
    this.pa_ad_id = Pa_ad_id;
    this.ad_id = ad_id;
    this.promotion_id = promotion_id;
    this.starting_date = starting_date;
    this.status = status;
    this.is_deleted = is_deleted;
  }
}

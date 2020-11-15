export class Promotion {
  public promotion_id: number;
  public promotion_name: string;
  public promotion_cost: number;
  public duration: number;
  public is_deleted: boolean;

  constructor( promotion_id: number, promotion_name: string, promotion_cost: number, duration: number,  is_deleted: boolean) {
    this.promotion_id = promotion_id;
    this.promotion_name = promotion_name;
    this.promotion_cost = promotion_cost;
    this.duration = duration;
    this.is_deleted = is_deleted;
  }
}

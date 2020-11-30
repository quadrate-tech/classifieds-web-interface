export class Payment {
  id: number;
  promoted_ad_id: number;
  payment_date: string;
  payment_time: number;
  paid_amount: number;
  payment_status: boolean;

  constructor(id: number, promoted_ad_id: number, payment_date: string, payment_time: number, paid_amount: number, payment_status: boolean) {
    this.id = id;
    this.promoted_ad_id = promoted_ad_id;
    this.payment_date = payment_date;
    this.payment_time = payment_time;
    this.paid_amount = paid_amount;
    this.payment_status = payment_status;
  }
}

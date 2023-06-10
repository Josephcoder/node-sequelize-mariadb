import { ComplaintEnum } from "../../config";

export interface District {
  district_code: string;
  district_name: string;
}
export interface Country {
  country_code: string;
  country_name: string;
}
export interface Customer__Interface {
  customer_id: string;
  names: string;
  phone_number: string;
  email: string;
  gender: string;
  age: string;
  country_code: string;
  district_code: string;
}
export interface ProductComplaint__Interface {
  product_complaint_id: string;
  complaint_reason: string;
  customer_id: string;
  document_version_id: string;
  service_id: string;
  service_category_id: string;
  unit_id: string;
  short_reason: string;
  product_name: string;
  purchase_date: string;
  supplier_name: string;
  manufacturer_name: string;
  batch_number: string;
  manufacturing_date: string;
  description: string;
  product_image_name: string;
  country_code: string;
  district_code: string;
  complaint_tracking_code: string;
  complaint_status: ComplaintEnum;
  progress_reason: string;
  progress_date: string;
  completed_reason: string;
  completed_date: string;
  rejected_reason: string;
  rejected_date: string;
  customer_feedback: string;
  customer_feedback_date: string;
  complaint_lang: string;
  create_at: string;
  submitted_by:string;
  communication_channel_id:string
}
export interface ServiceComplaint__Interface {
  service_complaint_id: string;
  complaint_reason: string;
  customer_id: string;
  document_version_id: string;
  short_reason: string;
  service_id: string;
  service_category_id: string;
  unit_id: string;
  service_render_date: string;
  rfd_offer_name: string;
  description: string;
  support_doc_name: string;
  country_code: string;
  district_code: string;
  complaint_tracking_code: string;
  complaint_status: ComplaintEnum;
  progress_reason: string;
  progress_date: string;
  completed_reason: string;
  completed_date: string;
  rejected_reason: string;
  rejected_date: string;
  submitted_by:string;
  customer_feedback: string;
  customer_feedback_date: string;
  complaint_lang: string;
  create_at: string;
  communication_channel_id:string
}

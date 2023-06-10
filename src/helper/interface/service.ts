import { BooleanEnum, LanguageEnum } from "../../config";

export interface CategoryLanguage__Interface {
  lang: LanguageEnum;
  category: string;
}
export interface ServiceCategory__Interface {
  service_category_id: string;
  service_category: CategoryLanguage__Interface[];
}
export interface ServiceLanguage__interface {
  lang: LanguageEnum;
  service: string;
}
export interface ServiceCost__Interface {
  currency: string;
  fee: string;
}
export interface Service__Interface {
  service_id: string;
  service_category_id: string;
  unit_id: string;
  service_name: ServiceLanguage__interface[];
  cost: ServiceCost__Interface[];
  is_product: BooleanEnum;
}

export enum ApiType {
  Admin = 'Admin',
  Storefront = 'Storefront',
}

export interface ShopifyApiPresetConfig {
  apiType: ApiType;
  module?: string;
}

export interface ShopifyApiProjectOptions {
  apiType: ApiType;
  apiVersion?: string;
  outputDir?: string;
  documents?: string[];
  module?: string;
  declarations?: boolean;
}

export type ShopifyApiTypesOptions = ShopifyApiProjectOptions;

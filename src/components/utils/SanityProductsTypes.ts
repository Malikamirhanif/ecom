export interface slugType {
  _type: string,
  current: string,
};

export interface assetImageType {
  _type: string,
  _ref: string,
};
export interface Category1 {
  _ref: string,
  _type: string,
};
export interface imagesType {
  asset: assetImageType,
  _type: string,
  alt: string,
  _key: string,
}


export interface oneProductType {
  slug:slugType,
  quantity: number,
  _rev: string,
  _type: string,
  name: string,
  _createdAt: string,
  _id: string,
  _updatedAt: string,
  image: Array<imagesType>
  description: any,
  productTypes: Array<string>,
  sizes: Array<string>,
  price: number,
  Category:Category1,
}

export interface responseType {
  result: Array<oneProductType>
}
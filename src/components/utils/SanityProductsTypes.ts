export interface Root {
    response: Response[]
  }
  
  export interface Response {
    price: number
    name: string
    _id: string
    _rev: string
    sizes: string[]
    description: Description[]
    _updatedAt: string
    image: Image[]
    Category: Category
    slug: Slug
    quantity: number
    productType: string[]
    _type: string
    _createdAt: string
  }
  
  export interface Description {
    markDefs: any[]
    children: Children[]
    _type: string
    style: string
    _key: string
  }
  
  export interface Children {
    _type: string
    marks: any[]
    text: string
    _key: string
  }
  
  export interface Image {
    _key: string
    asset: Asset
    _type: string
    alt: string
  }
  
  export interface Asset {
    _ref: string
    _type: string
  }
  
  export interface Category {
    _ref: string
    _type: string
  }
  
  export interface Slug {
    current: string
    _type: string
  }
  export interface responseType{
    result:Array<Response>
  } 
type ColorVariant = {
  name?: string;          
  hexCode: string;      
  images?: string[];    
  stock: number;
  lowStockThreshold?: number,       
  sku?: string;        
  reserved?: number;     
  sold?: number;        
  price?: number;      
  status: "active" | "discontinued"; 
}

type SizeOption = {
  value: string;        
  code?: string; 
  images?: string[];    
  stock: number; 
  lowStockThreshold?: number,      
  reserved?: number;     
  sku?: string;        
  sold?: number;        
  price?: number;      
  status: "active" | "discontinued";      
  weightAdjustment?: number; 
};

type MaterialOption = {
  name: string;         
  code?: string;         
  isRecyclable?: string;
  images?: string[];    
  stock: number;  
  lowStockThreshold?: number,     
  reserved?: number;     
  sku?: string;        
  sold?: number;        
  price?: number;      
  status: "active" | "discontinued";   
};

type Dimension = {
  width?: number;       
  height?: number;
  depth?: number;
  dimensionUnit?: "cm" | "inch";  
  weightValue: number;
  weightUnit: "g" | "kg" | "oz" | "lb"; 
  shippingClass: "light" | "fragile" | "standard" | "fragileHeavy";
}

type Discount = {
  discountTitle?: string;
  discountAmount: number;
  discountType: "percentage" | "fixed",
  discountEndDate?: Date,
}


export type Product = {
  sku: string;           
  barcode?: string;    
  slug: string;  
  taxCode?: string;        

  title: string;
  subtitle?: string;    
  description?: string;
  collection: string;
  categories?: string[]; 
  tags?: string[];   
  features?: string[];
  warranty?: number;    
  warrantyType?: string; 
  origin?: string;   

  basePrice: number;     
  sellingPrice: number; 
  originalPrice?: number; 
  costPrice?: number;   
  hasDiscount?: boolean;
  discount?: Discount;

  stock: number;      
  lowStockThreshold?: number;
  moq?: number;         
  allowBackorder?: boolean;
  reservedStock?: number;
  status: "draft" | "active" | "outOfStock" | "archived" | "discontinued"; 

  mainImage?: string;     
  gallery?: string[];  

  hasDimension?: boolean;
  dimension: Dimension;   

  hasVariants?: boolean;  
  colors?: ColorVariant[];
  sizes?: SizeOption[];
  materials?: MaterialOption[];
  reviews?: Review[];


  averageRating?: number;
  reviewCount?: number;
  viewCount?: number;
  wishlistCount?: number;
  
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  
  version?: number;      
  metadata?: Record<string, any>; 
  
} 


export type Review = {
    id: number;
    name: string;
    email: string;
    message: string;
    images: string[];
    productId: number;
    rating: number;
    createdAt: Date; 
  }
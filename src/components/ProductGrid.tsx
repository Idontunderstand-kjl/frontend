import React from 'react';
import './ProductGrid.css';

export interface Product {
  id: string;
  subtitle?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttons?: {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary';
  }[];
}

interface ProductGridProps {
  products: Product[];
  columnsPerRow?: 2 | 3 | 4;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.imageAlt} loading="lazy" />
      </div>
      <div className="product-card__content">
        {product.subtitle && (
          <p className="product-card__subtitle">{product.subtitle}</p>
        )}
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        {product.buttons && product.buttons.length > 0 && (
          <div className="product-card__buttons">
            {product.buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`product-card__button product-card__button--${button.variant || 'primary'}`}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  columnsPerRow = 2 
}) => {
  return (
    <div className={`product-grid product-grid--${columnsPerRow}-col`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

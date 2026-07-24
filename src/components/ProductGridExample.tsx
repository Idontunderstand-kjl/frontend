import React from 'react';
import { ProductGrid, Product } from './ProductGrid';
import './ProductGridExample.css';

// 示例产品数据 - 基于苹果官网风格
const exampleProducts: Product[] = [
  {
    id: 'ipad-air',
    subtitle: '强势动力现来自',
    title: 'iPad Air',
    description: '搭载 M4 芯片的 iPad Air，提供强大的性能和流畅的多任务处理体验。',
    image: 'https://via.placeholder.com/600x600?text=iPad+Air',
    imageAlt: 'iPad Air',
    buttons: [
      {
        text: '进一步了解',
        link: '/ipad-air',
        variant: 'primary'
      },
      {
        text: '购买',
        link: '/shop/ipad-air',
        variant: 'secondary'
      }
    ]
  },
  {
    id: 'macbook-pro',
    subtitle: '强势动力现来自',
    title: 'MacBook Pro',
    description: 'M5、M5 Pro 和 M5 Max 芯片现已集结，为专业工作带来无与伦比的性能。',
    image: 'https://via.placeholder.com/600x600?text=MacBook+Pro',
    imageAlt: 'MacBook Pro',
    buttons: [
      {
        text: '进一步了解',
        link: '/macbook-pro',
        variant: 'primary'
      },
      {
        text: '购买',
        link: '/shop/macbook-pro',
        variant: 'secondary'
      }
    ]
  },
  {
    id: 'apple-watch',
    subtitle: '满手高招，时刻照看好你的健康',
    title: 'Apple Watch Series 11',
    description: '全新的健康功能和睡眠追踪，助你更好地了解自己。',
    image: 'https://via.placeholder.com/600x600?text=Apple+Watch',
    imageAlt: 'Apple Watch Series 11',
    buttons: [
      {
        text: '进一步了解',
        link: '/apple-watch',
        variant: 'primary'
      },
      {
        text: '购买',
        link: '/shop/watch',
        variant: 'secondary'
      }
    ]
  },
  {
    id: 'iphone-privacy',
    title: '力保个人信息安全，这很 iPhone',
    description: '业界领先的隐私保护功能，让你的数据始终掌握在自己手中。',
    image: 'https://via.placeholder.com/600x600?text=iPhone+Privacy',
    imageAlt: 'iPhone 隐私保护',
    buttons: [
      {
        text: '进一步了解',
        link: '/iphone/privacy',
        variant: 'primary'
      }
    ]
  },
  {
    id: 'ipad-pro',
    subtitle: '先进的 AI 表现，突破性的强大实力',
    title: 'iPad Pro',
    description: '全新 M4 芯片与超大屏幕的完美结合，为专业创意工作而生。',
    image: 'https://via.placeholder.com/600x600?text=iPad+Pro',
    imageAlt: 'iPad Pro',
    buttons: [
      {
        text: '进一步了解',
        link: '/ipad-pro',
        variant: 'primary'
      },
      {
        text: '购买',
        link: '/shop/ipad-pro',
        variant: 'secondary'
      }
    ]
  },
  {
    id: 'trade-in',
    title: 'Apple Trade In 换购计划',
    description: '用 iPhone 13 或后续机型来换购，可享预计为 RMB 900 至 RMB 5350 的折抵优惠。',
    image: 'https://via.placeholder.com/600x600?text=Apple+Trade+In',
    imageAlt: 'Apple Trade In',
    buttons: [
      {
        text: '获取折抵估价',
        link: '/trade-in',
        variant: 'primary'
      }
    ]
  }
];

export const ProductGridExample: React.FC = () => {
  return (
    <div className="product-grid-example">
      <section className="product-grid-example__section">
        <h2 className="product-grid-example__heading">Featured Products</h2>
        <ProductGrid products={exampleProducts} columnsPerRow={2} />
      </section>
    </div>
  );
};

export default ProductGridExample;

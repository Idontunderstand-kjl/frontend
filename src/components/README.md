# ProductGrid 组件使用指南

## 概述

`ProductGrid` 是一个灵活的 React 组件，用于展示三行两列（或其他列数）的产品卡片网格，设计风格模仿苹果官网。

## 功能特性

✨ **响应式设计** - 自动适配不同屏幕尺寸
🎨 **Apple 风格** - 简洁、高端的设计美感
♿ **无障碍支持** - 标准的 HTML 语义和属性
⚡ **高性能** - 使用 `loading="lazy"` 进行图片懒加载
🎯 **灵活配置** - 支持自定义列数和按钮

## 安装

组件已在 `src/components/ProductGrid.tsx` 中创建。

## 基础用法

### 1. 导入组件

```typescript
import { ProductGrid, Product } from './components/ProductGrid';
```

### 2. 准备数据

```typescript
const products: Product[] = [
  {
    id: 'product-1',
    subtitle: '可选的小标题',
    title: '产品名称',
    description: '产品描述文本',
    image: 'https://example.com/image.jpg',
    imageAlt: '图片描述',
    buttons: [
      {
        text: '了解更多',
        link: '/product/1',
        variant: 'primary' // 'primary' 或 'secondary'
      },
      {
        text: '购买',
        link: '/shop/product/1',
        variant: 'secondary'
      }
    ]
  },
  // 更多产品...
];
```

### 3. 使用组件

```typescript
import React from 'react';
import { ProductGrid } from './components/ProductGrid';

export const MyPage: React.FC = () => {
  return (
    <div>
      <h1>我们的产品</h1>
      <ProductGrid products={products} columnsPerRow={2} />
    </div>
  );
};
```

## API 文档

### ProductGrid Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `products` | `Product[]` | 必需 | 产品数据数组 |
| `columnsPerRow` | `2 \| 3 \| 4` | `2` | 每行显示的列数 |

### Product 接口

```typescript
interface Product {
  id: string;                    // 唯一标识
  subtitle?: string;             // 可选的副标题（通常是橙色）
  title: string;                 // 产品标题
  description: string;           // 产品描述
  image: string;                 // 产品图片 URL
  imageAlt: string;              // 图片 alt 文本（SEO + 无障碍）
  buttons?: {
    text: string;                // 按钮文字
    link: string;                // 按钮链接
    variant?: 'primary' | 'secondary'; // 按钮样式
  }[];
}
```

## 示例

### 三行两列布局（默认）

```typescript
<ProductGrid products={products} columnsPerRow={2} />
```

### 两行三列布局

```typescript
<ProductGrid products={products} columnsPerRow={3} />
```

### 单行四列布局

```typescript
<ProductGrid products={products} columnsPerRow={4} />
```

## 响应式行为

组件自动处理不同屏幕尺寸：

- **大屏幕（>1024px）** - 显示指定的列数
- **平板（640px - 1024px）** - 3 列和 4 列自动变为 2 列
- **手机（<640px）** - 所有布局变为单列

## 样式定制

### 方法 1：全局覆盖 CSS

编辑 `ProductGrid.css` 或在全局样式中添加：

```css
.product-card {
  border-radius: 1.5rem; /* 增加圆角 */
}

.product-card__title {
  font-size: 2rem; /* 增加标题尺寸 */
}
```

### 方法 2：使用 CSS 变量（可选扩展）

可以修改组件以支持 CSS 变量，例如：

```css
:root {
  --product-card-gap: 1rem;
  --product-card-radius: 1rem;
  --product-button-color: #0071e3;
}

.product-grid {
  gap: var(--product-card-gap);
}

.product-card {
  border-radius: var(--product-card-radius);
}
```

## 完整示例

查看 `ProductGridExample.tsx` 了解完整的使用示例，包括真实的产品数据。

```typescript
import ProductGridExample from './components/ProductGridExample';

export default function App() {
  return <ProductGridExample />;
}
```

## 常见用途

- 📱 产品展示页面
- 🛍️ 电商网站
- 📝 功能介绍板块
- 🎯 作品集展示
- 📰 内容卡片网格

## 性能优化

- ✅ 使用 `loading="lazy"` 进行图片懒加载
- ✅ 动画使用 `ease-out` 和适当的动画时长
- ✅ 使用 CSS Grid 实现高效布局

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 未来增强

考虑添加的功能：

- [ ] 滑动轮播变体
- [ ] 瀑布流布局选项
- [ ] 自定义悬停效果
- [ ] 加载骨架屏
- [ ] 深色模式支持
- [ ] 国际化多语言支持

## 贡献

如有改进建议，欢迎与队友讨论！

## 许可证

MIT

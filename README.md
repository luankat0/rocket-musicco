# 🎵 Musicco - E-commerce de Instrumentos Musicais

<div align="center">

![Musicco Logo](./src/assets/Logo.png)

**Uma plataforma moderna e intuitiva para compra de instrumentos musicais**

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📦 Pré-requisitos](#-pré-requisitos)
- [🚀 Instalação e Execução](#-instalação-e-execução)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎨 Design System](#-design-system)
- [🧪 Scripts Disponíveis](#-scripts-disponíveis)
- [📱 Responsividade](#-responsividade)
- [💾 Persistência de Dados](#-persistência-de-dados)
- [🔧 Configurações](#-configurações)
- [📚 Documentação de Componentes](#-documentação-de-componentes)

---

## 🎯 Sobre o Projeto

A **Musicco** é um e-commerce especializado em instrumentos musicais, desenvolvido como projeto frontend com foco na experiência do usuário. A aplicação oferece uma interface moderna e intuitiva para navegação, seleção e compra de instrumentos musicais diversos.

### 🎭 Contexto do Desenvolvimento

Este projeto foi desenvolvido como parte de um desafio frontend, com o objetivo de criar um sistema de compras online completo que demonstra habilidades em:

- Desenvolvimento de interfaces modernas com React e TypeScript
- Gestão de estado complexo com Context API
- Implementação de funcionalidades de e-commerce
- Design responsivo e acessível
- Persistência de dados no lado cliente

---

## ✨ Funcionalidades

### 🏠 **Funcionalidades Principais**

- **📋 Catálogo de Produtos**: Visualização de lista completa de instrumentos musicais
- **🔍 Detalhes do Produto**: Páginas individuais com informações detalhadas
- **🛒 Carrinho de Compras**: Sistema completo de adição/remoção de produtos
- **💰 Cálculo em Tempo Real**: Atualização automática de valores e quantidades
- **✅ Finalização de Compra**: Processo completo de checkout

### 🚀 **Funcionalidades Avançadas**

- **💾 Persistência**: Dados do carrinho salvos no LocalStorage
- **📱 Design Responsivo**: Interface adaptável para todos os dispositivos
- **🎨 Tema Customizado**: Paleta de cores profissional para instrumentos musicais
- **⚡ Performance**: Carregamento rápido com Vite e otimizações
- **🔍 Navegação SPA**: Single Page Application com React Router
- **📊 Mock Data**: Dados realistas gerados com Faker.js

---

## 🛠️ Tecnologias Utilizadas

### **🔧 Core Technologies**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 19.1.0 | Biblioteca para construção de interfaces |
| **TypeScript** | 5.8.3 | Superset do JavaScript com tipagem estática |
| **Vite** | 6.3.5 | Build tool rápida e moderna |

### **🎨 UI & Styling**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **CSS Modules** | - | Estilização component-scoped |
| **React Icons** | 5.5.0 | Ícones SVG para React |
| **Styled Components** | 6.1.18 | CSS-in-JS (opcional) |

### **🔄 State Management & Routing**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React Router DOM** | 7.6.0 | Roteamento para Single Page Application |
| **Context API** | - | Gerenciamento de estado global |

### **📊 Data & Utilities**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Faker.js** | 9.8.0 | Geração de dados falsos realistas |
| **Phosphor React** | 1.4.1 | Biblioteca de ícones |

### **⚙️ Development Tools**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **ESLint** | 9.25.0 | Linter para JavaScript/TypeScript |
| **TypeScript ESLint** | 8.30.1 | Regras ESLint específicas para TypeScript |

---

## 📦 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

### **🔧 Requisitos do Sistema**

```bash
Node.js >= 18.0.0
npm >= 9.0.0 ou yarn >= 1.22.0
Git >= 2.0.0
```

### **✅ Verificação de Versões**

```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version

# Verificar versão do Git
git --version
```

---

## 🚀 Instalação e Execução

### **📥 1. Clone o Repositório**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/musicco.git

# Entre no diretório do projeto
cd musicco
```

### **📦 2. Instale as Dependências**

```bash
# Usando npm
npm install

# OU usando yarn
yarn install
```

### **🔥 3. Execute o Projeto**

```bash
# Modo de desenvolvimento
npm run dev

# OU usando yarn
yarn dev
```

### **🌐 4. Acesse a Aplicação**

A aplicação estará disponível em: **http://localhost:5173**

> **📝 Nota**: Se a porta 5173 estiver ocupada, o Vite automaticamente usará a próxima porta disponível.

### **🔨 5. Build para Produção**

```bash
# Gerar build de produção
npm run build

# Visualizar build local
npm run preview
```

---

## 📁 Estrutura do Projeto

```
musicco/
│
├── 📁 public/                      # Arquivos públicos
│   └── vite.svg
│
├── 📁 src/                         # Código fonte
│   ├── 📁 assets/                  # Imagens e recursos
│   │   ├── Logo.png
│   │   ├── fender-strato-guitar-eletric.jpg
│   │   ├── yamaha-digital-piano-p125.webp
│   │   └── ... (outros instrumentos)
│   │
│   ├── 📁 components/              # Componentes reutilizáveis
│   │   ├── 📁 Header/              # Cabeçalho da aplicação
│   │   ├── 📁 ProductCard/         # Card de produto
│   │   ├── 📁 ProductList/         # Lista de produtos
│   │   ├── 📁 ProductDetail/       # Detalhes do produto
│   │   ├── 📁 Cart/                # Componente do carrinho
│   │   └── 📁 CartItem/            # Item do carrinho
│   │
│   ├── 📁 contexts/                # Context API
│   │   └── CartContext.tsx         # Contexto do carrinho
│   │
│   ├── 📁 pages/                   # Páginas da aplicação
│   │   ├── 📁 HomePage/            # Página inicial
│   │   ├── 📁 ProductsPage/        # Lista de produtos
│   │   ├── 📁 ProductPage/         # Página do produto
│   │   ├── 📁 CartPage/            # Página do carrinho
│   │   └── 📁 AboutPage/           # Página sobre
│   │
│   ├── 📁 types/                   # Definições TypeScript
│   │   ├── Product.ts              # Tipo do produto
│   │   └── CartItem.ts             # Tipo do item do carrinho
│   │
│   ├── 📁 mocks/                   # Dados mock
│   │   └── productsData.ts         # Dados dos produtos
│   │
│   ├── 📁 utils/                   # Funções utilitárias
│   │   └── format.ts               # Formatação de valores
│   │
│   ├── App.tsx                     # Componente principal
│   ├── main.tsx                    # Ponto de entrada
│   └── index.css                   # Estilos globais
│
├── 📄 package.json                 # Dependências do projeto
├── 📄 tsconfig.json               # Configuração TypeScript
├── 📄 vite.config.ts              # Configuração Vite
├── 📄 eslint.config.js            # Configuração ESLint
└── 📄 README.md                   # Este arquivo
```

---

## 🎨 Design System

### **🎨 Paleta de Cores**

```css
:root {
  /* Cores Principais */
  --primary-bg: #18181b;          /* Fundo principal */
  --secondary-bg: #0f172a;        /* Fundo secundário */
  --accent-color: #22d3ee;        /* Cor de destaque */
  --accent-hover: #0ea5e9;        /* Cor de destaque hover */
  
  /* Cores de Texto */
  --text-primary: #fafafa;        /* Texto principal */
  --text-secondary: #d4d4d8;      /* Texto secundário */
  --text-muted: #a1a1aa;          /* Texto esmaecido */
  
  /* Cores de Estado */
  --success: #10b981;             /* Sucesso */
  --error: #ef4444;               /* Erro */
  --warning: #f59e0b;             /* Aviso */
}
```

### **📱 Breakpoints Responsivos**

```css
/* Mobile First Approach */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

### **🎭 Tipografia**

```css
font-family: 'Inter', 'Segoe UI', Arial, sans-serif;

/* Hierarchy */
h1: 3rem (48px)
h2: 2rem (32px)
h3: 1.5rem (24px)
h4: 1.2rem (19.2px)
body: 1rem (16px)
```

---

## 🧪 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **Desenvolvimento** | `npm run dev` | Inicia servidor de desenvolvimento |
| **Build** | `npm run build` | Gera build de produção |
| **Preview** | `npm run preview` | Visualiza build local |
| **Lint** | `npm run lint` | Executa verificação de código |

### **🔧 Scripts Detalhados**

```bash
# Desenvolvimento com hot reload
npm run dev

# Build otimizado para produção
npm run build

# Preview do build de produção
npm run preview

# Linting do código
npm run lint

# Linting com correção automática
npm run lint -- --fix
```

---

## 📱 Responsividade

A aplicação foi desenvolvida seguindo a abordagem **Mobile First** e é totalmente responsiva:

### **📊 Dispositivos Suportados**

| Dispositivo | Resolução | Layout |
|-------------|-----------|--------|
| **Mobile** | 320px - 767px | Stack vertical, menu colapsado |
| **Tablet** | 768px - 1023px | Layout em grid, navegação adaptada |
| **Desktop** | 1024px+ | Layout completo, todas as funcionalidades |

### **🎯 Pontos de Quebra**

- **Mobile**: Layout em coluna única, cards empilhados
- **Tablet**: Grid de 2 colunas, navegação horizontal
- **Desktop**: Grid de 3-4 colunas, layout completo

---

## 💾 Persistência de Dados

### **🗃️ LocalStorage**

O projeto utiliza LocalStorage para persistir dados do carrinho:

```typescript
// Salvar carrinho
localStorage.setItem('musicco-cart', JSON.stringify(cartItems));

// Recuperar carrinho
const savedCart = localStorage.getItem('musicco-cart');
const cartItems = savedCart ? JSON.parse(savedCart) : [];
```

### **📊 Dados Persistidos**

- **Itens do Carrinho**: Produtos e quantidades
- **Preferências do Usuário**: Configurações de interface
- **Histórico de Navegação**: Últimos produtos visualizados

---

## 🔧 Configurações

### **⚙️ Vite Configuration**

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
```

### **📏 TypeScript Configuration**

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 📚 Documentação de Componentes

### **🧩 Componentes Principais**

#### **ProductCard**
```typescript
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}
```

#### **CartContext**
```typescript
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getDistinctItemsCount: () => number;
}
```

### **📝 Tipos TypeScript**

```typescript
// Product.ts
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  brand: string;
  inStock: boolean;
}

// CartItem.ts
interface CartItem {
  product: Product;
  quantity: number;
}
```

---
</div>

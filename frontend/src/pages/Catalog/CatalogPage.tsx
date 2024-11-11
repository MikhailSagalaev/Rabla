import React, { useState } from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ProductGrid from '../../components/Product/ProductGrid';
import { catalogProducts } from '../../data/products';
import { ViewMode } from '../../types/product.types';

const CatalogPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-100 min-h-screen">
      <Header 
        title="Акриловые ванны"
        breadcrumbs={[
          { label: 'Главная', path: '/' },
          { label: 'сантехника', path: '/santehnika' },
          { label: 'ванны' }
        ]}
      />
      <main className="w-full max-w-[1169px] mt-14 px-4 max-md:mt-10 max-md:max-w-full">
        {/* Панель управления */}
        <section className="flex gap-5 justify-between w-full mb-8 max-md:flex-col max-md:max-w-full">
          <div className="flex gap-8 items-start">
            <button className="flex gap-3 items-center hover:opacity-80 transition-opacity">
              <div className="flex flex-col">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/01833597fbf080bff1276f058ff2e3a252637a380fbfe4c0f0fcbfd9e20c446f" 
                  alt="Filter icon" 
                  className="object-contain aspect-[2.72] w-[19px]" 
                />
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b68bd1d44ced7781171a574001d613ede7f9836a93e25264e34650442d020d7" 
                  alt="Filter icon" 
                  className="object-contain aspect-[2.72] w-[19px]" 
                />
              </div>
              <span>фильтры</span>
            </button>

            <button className="flex gap-4 mt-2 text-base leading-snug text-black items-center hover:opacity-80 transition-opacity">
              <span>по популярности</span>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/913bae8d5f98d31da368b92abac1be142e3fc5169456ffd1998b5ad421aafe25" 
                alt="Sort icon" 
                className="object-contain w-2.5 aspect-[1.67]" 
              />
            </button>
          </div>

          <span className="text-base leading-snug text-black">
            {catalogProducts.length} продуктов
          </span>

          <div className="flex gap-3 items-center">
            <span>вид каталога</span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1 hover:bg-gray-100 rounded transition-colors ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
              >
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447979988488a8c3f82638c7eb8a01ab294a3e234ecfdf2300ec4285c705590d" 
                  alt="Grid view" 
                  className="w-[17px] aspect-square" 
                />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1 hover:bg-gray-100 rounded transition-colors ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
              >
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba09f992e2fa9ea742f7d38a452ca29568aa5fcfcfe30b82e8b87a2de82a9232" 
                  alt="List view" 
                  className="w-[13px] aspect-[0.76]" 
                />
              </button>
            </div>
          </div>
        </section>

        {/* Сетка продуктов */}
        <ProductGrid 
          products={catalogProducts}
          viewMode={viewMode}
          loading={loading}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
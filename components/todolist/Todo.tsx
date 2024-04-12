import React, { useEffect, useState } from 'react';
import { Pagination } from '@/components/ui/pagination';
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TodoList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const itemsPerPage = 5;

  // При изменении списка продуктов или текущей страницы обновляем отображаемые продукты
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    setDisplayedProducts(currentItems);
  }, [products, currentPage]);

  // Меняем страницу
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Обработчик изменения состояния продукта
  const handleProductChange = (index) => {
    const updatedProducts = [...products]; // Создаем копию массива продуктов
    updatedProducts[index].completed = !updatedProducts[index].completed; // Изменяем состояние completed
    setProducts(updatedProducts); // Обновляем состояние продуктов
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <ul className='flex flex-col gap-2'>
        {displayedProducts.map((product, index) => (
          <li key={index} className="p-2 border-[#E6E6E65e] border-solid border-[1px] rounded-sm items-center flex">
            <Checkbox
              checked={product.completed}
              onChange={() => handleProductChange(index)}
            />
            <div className="w-full flex justify-between">
              <span style={{ marginLeft: '8px' }}>{product.name}</span>
              {product.quantity ? (
                <span style={{ marginLeft: '8px' }}>Количество: {product.quantity}</span>
              ) : (
                <span></span>
              ) }
            </div>
          </li>
        ))}
      </ul>
      {products.length > itemsPerPage && (
        <div className='h-full items-end flex justify-center'>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <ChevronLeft/>
          </button>
          <span style={{ margin: '0 10px' }}>Страница {currentPage}</span>
          <button onClick={() => paginate(currentPage + 1)} disabled={displayedProducts.length < itemsPerPage}>
            <ChevronRight/>
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;

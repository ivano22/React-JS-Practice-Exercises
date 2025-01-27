const ProductCard = ({ product }) => {
    const { name, price, description, imageUrl, inStock } = product;
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-48 object-cover"
          />
          <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm font-medium ${
            inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              sh.{price}
            </span>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!inStock}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
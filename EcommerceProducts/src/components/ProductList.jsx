
import ProductCard from '../components/ProductCard';
function ProductList() {
    
 
    // Sample product data - in a real app, this would be passed as props
 const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 50000,
      description: "Premium wireless headphones with noise cancellation and 20-hour battery life.",
      imageUrl: "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/194069/1.jpg?6051",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 650000,
      description: "Feature-rich smartwatch with health tracking and notifications.",
      imageUrl: "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/50824/1.jpg?6981",
      inStock: false
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 75000,
      description: "Water-resistant laptop backpack with multiple compartments.",
      imageUrl: "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/71/4645532/1.jpg?7928",
      inStock: true
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 35000,
      description: "RGB mechanical keyboard with customizable switches.",
      imageUrl: "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/84/31135/1.jpg?9937",
      inStock: true
    },
    {
      id: 5,
      name: "Wireless Mouse",
      price: 40000,
      description: "Ergonomic wireless mouse with precision tracking.",
      imageUrl: "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/99/0886801/4.jpg?3819",
      inStock: false
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 100000,
      description: "7-in-1 USB-C hub with 4K HDMI and power delivery.",
      imageUrl: "https://ug.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/679304/1.jpg?5471",
      inStock: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
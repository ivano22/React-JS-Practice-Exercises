import { useState } from 'react';
import { Search } from 'lucide-react';
function NewsFeed() {
  // Sample news data
  const initialPosts = [
    {
      id: 1,
      title: 'The Future of AI Technology',
      author: 'Sarah Johnson',
      category: 'Technology',
      excerpt:
        "Recent developments in artificial intelligence are pushing the boundaries of what's possible...",
      content:
        "Recent developments in artificial intelligence are pushing the boundaries of what's possible. Machine learning models are becoming increasingly sophisticated, leading to breakthroughs in natural language processing, computer vision, and autonomous systems. These advancements are not just theoretical – they're already being implemented in various industries, from healthcare to finance, transforming how we work and live.",
    },
    {
      id: 2,
      title: 'Sustainable Living in 2025',
      author: 'Michael Chen',
      category: 'Environment',
      excerpt:
        'As climate change concerns grow, more people are adopting sustainable lifestyle practices...',
      content:
        'As climate change concerns grow, more people are adopting sustainable lifestyle practices. From zero-waste homes to renewable energy solutions, individuals are taking concrete steps to reduce their environmental impact. Community initiatives are springing up worldwide, demonstrating that collective action can make a significant difference in protecting our planet for future generations.',
    },
    {
      id: 3,
      title: 'The Rise of Remote Work',
      author: 'Emily Rodriguez',
      category: 'Business',
      excerpt:
        'Companies worldwide are embracing remote work as the new normal...',
      content:
        'Companies worldwide are embracing remote work as the new normal. This shift has led to increased productivity, better work-life balance, and reduced operational costs. However, it also presents new challenges in maintaining team cohesion and company culture. Organizations are developing innovative solutions to address these challenges while maximizing the benefits of distributed teams.',
    },
  ];
  // Tracking the state of posts
  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPosts, setExpandedPosts] = useState(new Set());

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setPosts(initialPosts);
    } else {
      const filtered = initialPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.category.toLowerCase().includes(term)
      );
      setPosts(filtered);
    }
  };

  // Toggle post expansion
  const togglePost = (id) => {
    setExpandedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                  <div className="text-sm text-gray-500">
                    Author: {post.author} | Category :{post.category}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 mb-4">
                  {expandedPosts.has(post.id) ? post.content : post.excerpt}
                </p>
                <button
                  onClick={() => togglePost(post.id)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  {expandedPosts.has(post.id) ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;

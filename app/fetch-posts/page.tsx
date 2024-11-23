
'use client';

import { useEffect, useState } from 'react';

const FetchPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/external');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="text-xl font-semibold animate-pulse text-gray-300">Loading Posts...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="text-lg font-semibold text-red-600">Error: {error}</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-100">
          Explore the Posts ✨
        </h1>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="bg-blue-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {/* Post Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2 hover:text-blue-600 transition duration-300">
                {post.title}
              </h2>
              {/* Post Body */}
              <p className="text-gray-600 line-clamp-3 mb-4">{post.body}</p>
              {/* Action */}
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchPostsPage;

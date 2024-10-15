
import React from 'react';
import { Search } from 'lucide-react';

const PracticalsPage = () => {
  const categories = [
    { name: 'Knitting', icon: '🧶', color: 'bg-pink-500', description: 'Scarf' },
    { name: 'Modelling', icon: '🏠', color: 'bg-red-700', description: 'House' },
    { name: 'Cooking', icon: '🍲', color: 'bg-gray-700', description: 'Rice' },
    { name: 'Environment', icon: '🌳', color: 'bg-green-400', description: 'Tree' },
    { name: 'Agriculture', icon: '🌱', color: 'bg-green-500', description: 'Maize' },
    { name: 'Art & Craft', icon: '🎨', color: 'bg-red-500', description: 'Painting' },
  ];

  return (
    <div className="max-w-full mx-auto p-16">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-purple-700 rounded-l-full"></div>
          <div className="w-12 h-12 bg-pink-500 rounded-r-full -ml-6"></div>
          <span className="ml-2 text-3xl font-bold">Ubora CBC</span>
        </div>
        <ul className="flex space-x-6 text-3xl">
          <li>Home</li>
          <li className="text-pink-500 font-bold">Practicals</li>
          <li>Q & A</li>
          <li>Assignment</li>
        </ul>
      </nav>
      <h1 className="text-12xl font-bold text-pink-500 mb-16">Practicals</h1>
      
      <p className="text-gray-600 text-xl mb-12">
        Kindly select your area of interest below to help us tailor make it for you
      </p>
      
      <div className="relative mb-16">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-6 pl-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-2xl"
        />
        <Search className="absolute left-6 top-5 text-gray-400 w-8 h-8" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex items-center space-x-6">
            <div className={`${category.color} w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl`}>
              {category.icon}
            </div>
            <div>
              <span className="text-gray-800 font-semibold text-2xl">{category.name}</span>
              <p className="text-gray-500 text-lg">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticalsPage;



import React from 'react';

const PostAuthorFooter = () => {
  return (
    <div className="mt-12 border-t pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-gray-800">
          <p className="font-semibold text-lg">Mathias Mwaromboso</p>
          <p className="text-gray-600">📚 Learner, Builder, and Innovator in Tech</p>
          <a
            href="mailto:mattymatty9372@gmail.com"
            className="text-blue-500 hover:underline mt-1 inline-block"
          >
            ✉️ mattymatty9372@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostAuthorFooter;

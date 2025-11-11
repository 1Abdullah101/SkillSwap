import { useState } from 'react';

export default function HelloWorld({ msg = 'Welcome to SkillSwap' }) {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{msg}</h1>

      <div className="card bg-white p-6 rounded-lg shadow-md mb-4">
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">components/HelloWorld.jsx</code> to test HMR
        </p>
      </div>

      <p className="text-gray-600 mb-2">
        Check out{' '}
        <a
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-500"
        >
          React Docs
        </a>
        , the official React documentation
      </p>
      <p className="text-gray-600 mb-2">
        Learn more about{' '}
        <a
          href="https://vitejs.dev/guide/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-500"
        >
          Vite
        </a>
        , the build tool that powers this app
      </p>
      <p className="text-gray-500 mt-4">Click on the Vite and React logos to learn more</p>
    </div>
  );
} 
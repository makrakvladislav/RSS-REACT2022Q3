import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NotFound = memo(() => {
  return (
    <div>
      <h1>
        404 page not found :(
        <Link to="/" className="text-blue-700 font-medium">
          Go to home page
        </Link>
      </h1>
    </div>
  );
});

export default NotFound;

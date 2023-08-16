import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');
    let accumulatedPath = '';

    const updatedBreadcrumbs = pathSegments.map((segment) => {
      accumulatedPath += `/${segment}`;

      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: accumulatedPath
      };
    });

    setBreadcrumbs(updatedBreadcrumbs);
  }, [location]);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/home" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#ff6f61] dark:text-gray-400 dark:hover:text-white ms-10">
            User
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <div className="flex items-center">/
              <Link
                to={breadcrumb.path}
                className={`ml-1 text-sm font-medium text-gray-700 hover:text-[#ff6f61] md:ml-2 dark:text-gray-400 dark:hover:text-white ${breadcrumb.path === location.pathname ? 'active2' : ''}`}
                style={breadcrumb.path === location.pathname ? { color: "#ff6f61" } : {}}
              >
                {index === breadcrumbs.length - 1 ? 
                breadcrumb.label : 
                <Link to="/UIElement/chart">
                UI Element
                </Link>
                } {/* Add space before capital letters */}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
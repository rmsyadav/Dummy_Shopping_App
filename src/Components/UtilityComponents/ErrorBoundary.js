import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, useLocation, Routes, Route } from "react-router-dom";
import MyErrorBoundary from "./MyErrorBoundary";

function ErrorBoundary({children}) {
    const [hasError, setHasError] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (hasError) {
        setHasError(false);
      }
    }, [location.key]);
    return (
      /**
       * NEW: The class component error boundary is now
       *      a child of the functional component.
       */
      <MyErrorBoundary 
        hasError={hasError} 
        setHasError={setHasError}
      >
        {children}
      </MyErrorBoundary>
    );
  }
  export default ErrorBoundary;
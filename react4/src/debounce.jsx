    import React, { useState, useEffect } from 'react';
    import useDebounce from '../hooks/useDebounce.js'; // Assuming useDebounce is in a separate file

    function SearchComponent() {
      const [searchTerm, setSearchTerm] = useState('');
      const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce for 500ms
      const [searchResults, setSearchResults] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        if (debouncedSearchTerm) { // Only fetch if there's a debounced search term
          setLoading(true);
          const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:3000/?q=${debouncedSearchTerm}`);
              const data = await response.json();
              setSearchResults(data);
            } catch (error) {
              console.error("Error fetching data:", error);
            } finally {
              setLoading(false);
            }
          };
          fetchData();
        } else {
          setSearchResults([]); // Clear results if search term is empty
        }
      }, [debouncedSearchTerm]); // Re-run effect when debouncedSearchTerm changes

      const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
      };

      return (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          {loading && <p>Loading...</p>}
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.msg}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default SearchComponent;
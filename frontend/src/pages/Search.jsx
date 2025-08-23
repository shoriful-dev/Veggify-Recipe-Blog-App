import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import Card from '../components/Card';

const Search = () => {
  const searchtext = useParams();
  console.log(searchtext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('query');
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/items`, {
          params: { q: query },
        });
        setResults(response.data);
      } catch (err) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [query]);

  const handleSearch = e => {
    setQuery(e.target.value);
  };
  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10  font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center ">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          value={query}
          onChange={handleSearch}
          className="outline-none w-full placeholder:text-[##1b2629]"
          name="query"
          placeholder="Search for items..."
          type="search"
          id="search"
          required=""
        />
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results && results?.map(item => <Card key={item._id} item={item} />)}
      </ul>
    </div>
  );
}

export default Search;

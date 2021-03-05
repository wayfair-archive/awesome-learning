import React, {useState} from 'react';
import {useStaticQuery} from 'gatsby';
import Input from '@material-ui/core/Input';
import { useFlexSearch } from 'react-use-flexsearch';

const SearchBar = () => {
  const queryData = useStaticQuery(graphql`
  query {
    localSearchTechtalks {
      index
      store
    }
  }
`);
  const [query, setQuery] = useState('');
  const {index, store} = queryData.localSearchTechtalks;
  
  const results = useFlexSearch(query, index, store);
  return (
    <>
      <Input 
        defaultValue="Search Tech Talks" 
        inputProps={{ 'aria-label': 'description' }} 
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {results.map(result => (
          <li>
            {result.template} - {result.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;

import React, {useState} from 'react';
<<<<<<< HEAD
import {useStaticQuery} from 'gatsby';
=======
import {useStaticQuery, Link} from 'gatsby';
>>>>>>> upstream/main
import Input from '@material-ui/core/Input';
import { useFlexSearch } from 'react-use-flexsearch';
import {Typography, Card, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginBottom: theme.spacing(4),
  },
  classTitle: {
    display: 'block',
    width: 'fit-content',
    margin: theme.spacing(1, 0, 2),
    textDecoration: 'underline',
    textTransform: 'none',
    '&:hover, &:focus': {
      textDecoration: 'none',
    },
  },
  card: {
    marginTop: theme.spacing(2),
  },
  input: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  }
}));

const renderResultType = template => {
  switch (template) {
    case 'techtalk':
      return 'Tech Talk';
    case 'lesson':
      return 'Lesson';
    default:
      return '';
  }
};

const SearchBar = () => {
  const classes = useStyles();

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
      <Typography variant="h1" color="textPrimary" className={classes.pageTitle}>
        Search
      </Typography>
      <Input 
        defaultValue="Search Tech Talks" 
        inputProps={{ 'aria-label': 'description' }} 
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className={classes.input}
      />
      {results.map(result => (
        <Card 
          className={classes.card} 
        >
          <CardContent>
            <Typography variant="body1">
              {renderResultType(result.template)}
            </Typography>
            <Typography
              variant="h2"
              component={Link}
              color="primary"
              to={result.slug} 
              className={classes.classTitle}
            >
              {result.title}
            </Typography>
            <Typography variant="body1" noWrap>
              {result.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default SearchBar;

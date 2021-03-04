import React from 'react';
import {Typography, Button, Box} from '@material-ui/core';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const NotFoundTemplate = () => (
  <Layout title="Not Found">
    <Page title="Not Found">
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column" mb={3}>
          <Typography variant="h1" align="center">
            Page not found!
          </Typography>
        </Box>
        <Typography variant="body1" align="center">
          You just hit a route that doesn't exist.
        </Typography>
        <Box my={4} textAlign="center">
          <Button variant="contained" color="secondary" href={'/awesome-learning/'}>
            Go back home
          </Button>
        </Box>
      </Box>
    </Page>
  </Layout>
);

export default NotFoundTemplate;

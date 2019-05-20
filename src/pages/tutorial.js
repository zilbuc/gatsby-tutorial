import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { Button } from '../components/button';

const Tutorial = () => (
  <Layout>
    <div>Tutorial</div>
    <Button>
      <Link to='/'>Homepage</Link>
    </Button>
  </Layout>
);

export default Tutorial;

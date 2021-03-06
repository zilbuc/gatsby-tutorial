import React from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Info from '../components/info';

import { Button } from '../components/button';
import { FaCannabis } from 'react-icons/fa';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <Info />
    </div>
    <div>
      <FaCannabis className='icon' />
      <Button>I'm a styled button</Button>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/tutorial/">Tutorial</Link>
    <Link to="/images/">Images</Link>
    <Link to="/bikes/"><strong>Bikes</strong></Link>
  </Layout>
)


export default IndexPage

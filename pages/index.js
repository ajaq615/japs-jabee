import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://api-jollibee-menu.vercel.app/menu');
  const data = await response.json();

  return {
    props: {
      meetups: data.data.map((menu) => ({
        id: menu.id,
        category: menu.category,
        image: menu.image,
        param: menu.param,
      })),
    },
  };
}

export default HomePage;

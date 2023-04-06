import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';

const HomePage = (props) => {
  const isEmpty = JSON.stringify(props.meetups) === '{}';
  console.log(isEmpty);
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of react meetups'
        ></meta>
      </Head>
      <h1>Home Page</h1>
      {isEmpty ? (
        <h2>No meetups found!</h2>
      ) : (
        <MeetupList meetups={props.meetups} />
      )}
      {/* <MeetupList meetups={props.meetups} /> */}
    </>
  );
};

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

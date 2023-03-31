import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import MenuList from '../../components/MenuList'

const Home = (props) => {
  const isEmpty = JSON.stringify(props.menu) === '{}';
  console.log(isEmpty);
  return (
    <>
      <Head>
        <title>Jabilee Menu</title>
        <meta
          name='description'
          content='Jabillee langhap sarap meals'
        ></meta>
      </Head>
      <h1>Home Page</h1>
      {isEmpty ? (
        <h2>No menu found!</h2>
      ) : (
        <MenuList menu={props.menu} />
      )}
      {/* <MeetupList meetups={props.meetups} /> */}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch('https://api-jollibee-menu.vercel.app/menu');
  const menu = await response.json();
  const items = menu.data

  return {
    props: {
      menu: items.map((item) => ({
        id: item.id,
        category: item.category,
        image: item.image,
        param: item.param,
      })),
    },
  };
}

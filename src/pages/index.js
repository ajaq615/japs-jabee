import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import MenuList from '../../components/menu/MenuList';

const Home = (props) => {
  const isEmpty = JSON.stringify(props.menu) === '{}';
  return (
    <>
      <Head>
        <title>Jabilee Menu</title>
        <meta name='description' content='Jabillee langhap sarap meals'></meta>
      </Head>
      <div>
        <img
          src='https://jb-ph-cdn.tillster.com/prod/Carousel/Project%20Panama%20Desktop%20Banner_Justin%20Vicente%20Matha.jpg_04a62d40-097f-4e2a-9b1e-87477818ecaa.jpg'
          alt='.'
        />
      </div>
      {isEmpty ? <h2>No menu found!</h2> : <MenuList menu={props.menu} />}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch('https://api-jollibee-menu.vercel.app/menu');
  const menu = await response.json();
  const items = menu.data;

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

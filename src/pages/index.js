import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { getMenu } from './api/getMenu';

const Home = (props) => {
  return (
    <>
      <div>
        <h1>HOME</h1>
        <ul></ul>
      </div>
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

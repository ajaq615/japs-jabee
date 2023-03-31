import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import MenuList from '../../components/MenuList'

const Home = (props) => {
  const isEmpty = JSON.stringify(props.menu) === '{}';
  return (
    <>
      <Head>
        <title>Jabilee Menu</title>
        <meta
          name='description'
          content='Jabillee langhap sarap meals'
        ></meta>
      </Head>
      <div>
      <img src='https://jb-ph-cdn.tillster.com/prod/Carousel/Project%20Panama%20Desktop%20Banner_Justin%20Vicente%20Matha.jpg_04a62d40-097f-4e2a-9b1e-87477818ecaa.jpg' />
      </div>
      <div className='menu_items'>
      <img height="240" src='https://jb-ph-cdn.tillster.com/prod/Carousel/FA-JB_PH_INCREASE_SPOTLIGHT_TILE_792x240_opt.jpg_c6a6a29b-bdcd-4980-9f29-bc7e92977b20.jpg'></img>
      <img height="240" src='https://jb-ph-cdn.tillster.com/qa/Carousel/JB_PH_INCREASE_FAMILY_MEALS_TILE_FA_736x490_opt.jpg_0f513f1c-9b7a-49ee-8c66-f4ddf0e06266.jpg'></img>
      <img height="240" src='https://jb-ph-cdn.tillster.com/prod/Carousel/FA-JB_PH_INCREASE_CHICKENJOY_TILE_384x240_opt.jpg_cf81a220-9c12-4ffa-ac62-cd26708fe922.jpg'></img>
      <img height="240" src='https://jb-ph-cdn.tillster.com/qa/Carousel/JB_PH_INCREASE_BURGER_TILE_FA_736x490_opt.jpg_0bca19df-8933-445c-8b2b-9a8a1f23d796.jpg'></img>
      <img height="240" src='https://jb-ph-cdn.tillster.com/prod/Carousel/JBPH_THUMBNAIL_JANUARY-UPDATE_736x490px_FA_opt.jpg_d3b57903-46d8-405b-b755-5dede7d263ab.jpg'></img>
      </div>
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

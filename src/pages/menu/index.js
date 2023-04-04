import MenuList from "../../../components/menu/MenuList";

const itemPage = (props) => {
  return (
    <MenuList menu={props.menu} />
  )
}

export default itemPage

export async function getStaticProps() {
    const res = await fetch('https://api-jollibee-menu.vercel.app/menu');
    const menu = await res.json();
    const items = menu.data
  
    return {
      props: {
        menu: items.map((item) => ({
          id: item.id,
          category: item.category,
          image: item.image,
          param: item.param,
        })),
        items: {
            id: 90
        }
      }, 
    };
  }
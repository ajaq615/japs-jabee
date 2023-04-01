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
import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import MenuItem from './MenuItem';

function MenuList(props) {
  return (
    <ul>
      {props.menu.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          image={item.image}
          category={item.category}
          param={item.param}
        />
      ))}
    </ul>
  );
}

export default MenuList;

import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import MenuItem from './MenuItem';
import classes from './MenuList.module.css'

function MenuList(props) {
  return (
    <ul className={classes.list}>
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

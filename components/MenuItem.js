
import { useRouter } from 'next/router';

function MenuItem(props) {
  const router = useRouter();
  
  const showDetailHandler = () => {
    router.push('/' + props.id)
  }
  
  return (
    <li>
      <>
        <div>
          <img src={props.image} alt={props.id} />
        </div>
        <div>
          <h3>{props.id}</h3>
          <address>{props.category}</address>
        </div>
        <div>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </>
    </li>
  );
}

export default MenuItem;

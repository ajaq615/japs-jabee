import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>
          <img src='/logo.png' width={80}/>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

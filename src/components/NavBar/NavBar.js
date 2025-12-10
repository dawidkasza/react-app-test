import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
      <nav>
         <div className={styles.container}>
            <a href="/"><span className="fa fa-tasks"/></a>
            <ul className={styles.list}>
               <li><a href="/">Home</a></li>
               <li><a href="/favorite">Favorite</a></li>
               <li><a href="/about">About</a></li>
            </ul>
         </div>
      </nav>
   );
};

  export default NavBar;
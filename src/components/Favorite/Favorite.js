import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const favorites = useSelector(getFavoriteCards);
  if (!favorites.length) {
    return <PageTitle children='No cards'/>;
  }
    return (
      <div>
        <PageTitle children='Favorite'/>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {favorites.map(card => (
              <Card 
                key={card.id} 
                id={card.id} 
                title={card.title} 
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default Favorite;
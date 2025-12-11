import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearSearchString, updateSearchString } from '../../redux/store';
const SearchForm = () => {
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
        useEffect(() => {
        dispatch(clearSearchString());
        setSearchString('');
    }, [dispatch]);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
    }
    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search" value={searchString} onChange={e => setSearchString(e.target.value)}/>
            <Button><span className="fa fa-search" /></Button> 
        </form>
    );
  };

  export default SearchForm;
import { useState,useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './charList.scss';

const CharList = () => {
    const marvelService = new MarvelService();
    const [loading , setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [list,setList] = useState([])
     
    useEffect(() => {
        marvelService.getAllCharacters()
            .then(onCharListLoaded)
            .catch(onError)
    },[])

    const onCharListLoaded = (charList) => {
        setList(charList);
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(false)
    }

    const elem =  list.map((item, index) =>{
        let {name,thumbnail} = item;
        let imgStyle = {'objectFit' : 'cover'};
        if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'unset'};
        }
        return (
            <li className="char__item" key={index}>
                <img src={thumbnail} alt={item.name} style={imgStyle}/>
                <div className="char__name">{name}</div>
             </li>
        )
    })

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? elem : null;

    return (
        <div className="char__list">
            <ul className="char__grid">
                {errorMessage}
                {spinner}
                {content}
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;
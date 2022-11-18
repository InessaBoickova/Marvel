import './comicsList.scss';
import { useState, useEffect,useRef } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

const ComicsList = () => {
    const [newItemLoading , setNewItemLoading] = useState(false);
    const [list,setList] = useState([]);
    const [offset,setOffset] = useState(2);
    const [charEnded,setCharEnded] = useState(false);

    const {loading,error,getComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    },[])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getComics(offset)
            .then(onCharListLoaded)
    }  

    const onCharListLoaded = (newList) => {
        if(newList.length < 8 ){
           setCharEnded(true)
        }
        setList(list => [...list,...newList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
    }
    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }
    const elem =  list.map((item,index) =>{
        let thumbnail = item.thumbnail.path + '.' + item.thumbnail.extension;
        let price = item.prices[0].price ? item.prices[0].price + '$': '';
        let {title,id} = item;
        let imgStyle = {'objectFit' : 'cover'};
        if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'unset'};
        }

        return (
            <li className='comics__list'
                    key={id}
                    onClick = {()=> {
                        focusOnItem(index);}
                    }
                    tabindex = {0}
                    ref={el => itemRefs.current[index] = el}>
                <img className='comics__item-img' src={thumbnail} alt={title} style={imgStyle}/>
                <div className="comics__item-name">{title}</div>
                <div className="comics__item-price">{price}</div>
            </li>
        )
    })

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {errorMessage}
                {spinner}
                {elem}
            </ul>
            <button className="button button__main button__long"
                disabled = {newItemLoading} 
                style = {{'display': charEnded ? 'none' : 'block'}}
                onClick = {() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;
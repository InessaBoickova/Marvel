import { useState,useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './charList.scss';

const CharList = ({onCharCelected}) => {
    const [newItemLoading , setNewItemLoading] = useState(false);
    const [list,setList] = useState([]);
    const [offset,setOffset] = useState(210);
    const [charEnded,setCharEnded] = useState(false);

    const {loading,error,getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    },[])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }  

    const onCharListLoaded = (newList) => {
        if(newList.length < 9){
           setCharEnded(true)
        }

        setList(list => [...list,...newList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
    }
    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }
    
    const elem =  list.map((item,index) =>{
        let {name,thumbnail,id} = item;
        let imgStyle = {'objectFit' : 'cover'};
        if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'unset'};
        }

        return (
            <li className={'char__item'}
                key={id}
                onClick = {()=> {
                    onCharCelected(id);
                    focusOnItem(index);}
                }
                tabindex = {0}
                ref={el => itemRefs.current[index] = el}>
                <img src={thumbnail} alt={item.name} style={imgStyle}/>
                <div className="char__name">{name}</div>
             </li>
        )
    })

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="char__list">
            <ul className="char__grid">
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

CharList.propTypes =  {
    onCharCelected: PropTypes.func.isRequired,
}

export default CharList;
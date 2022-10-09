import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './charList.scss';

const CharList = (props) => {
    const {onCharCelected} = props;
    const [loading , setLoading] = useState(true);
    const [newItemLoading , setNewItemLoading] = useState(false);
    const [error,setError] = useState(false);
    const [list,setList] = useState([]);
    const [offset,setOffset] = useState(210);
    const [charEnded,setCharEnded] = useState(false);
    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest()
    },[])

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }  

    const onCharListLoading = () =>{
        setNewItemLoading(true);
    }

    const onCharListLoaded = (newList) => {
        if(newList.length < 9){
           setCharEnded(true)
        }

        setList([...list,...newList]);
        setLoading(false);
        setNewItemLoading(false);
        setOffset(offset + 9);
    }

    const onError = () => {
        setError(true);
        setLoading(false)
    }
    const itemRefs = [];

    const setRef = (ref) => {
        itemRefs.push(ref);
    }

    const focusOnItem = (id) => {
        itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs[id].classList.add('char__item_selected');
        itemRefs[id].focus();
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
                ref={setRef}>
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
import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleItem = (item) => {
        dispatch(addItem(item));
    };
    return (
        <div>
            {items.map(item => (
                <div key={item.card.info.id} className='p-2 m-2 border-blue-200 border-b-2 text-left flex justify-between' >
                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span>{item.card.info.name}</span>
                            <span>
                                {" "}
                                {" "}-₹{item.card.info.price || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12'>
                        <div className='absolute'>
                            <button
                                className='p-2 bg-slate-400 rounded-lg shadow-lg mx-10'
                                onClick={() => handleItem(item)}
                            >
                                Add+</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className='w-36' />

                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList

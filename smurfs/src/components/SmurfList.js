import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchSmurfs } from '../actions'

const SmurfList = () => {

    //defining state from redux
    const state = useSelector(state => state);
   
    //defining dispatch
    const dispatch = useDispatch();
    console.log(state)

    //useEffect fpr initial data
    useEffect(() => {
        dispatch(fetchSmurfs())
    }, [dispatch])
    return (
        <div>
            <h1>Smurfs: </h1>
            {state.smurfs.map(smurf => {
                return  <div key={smurf.id}>
                            <h1>{smurf.name}</h1>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
            })}
        </div>
    )
}

export default SmurfList;
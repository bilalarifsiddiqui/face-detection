import React from 'react';

const Rank = ({name, Rank}) => {
    return (
        <div>
            <div className='white f3'>
                {`${ name }, Your Rank Is`}
            </div>
            <div className='white f1'>
                {`${Rank}`}
            </div>
        </div>
    )
}

export default Rank;
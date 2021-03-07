import React from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons'

const ScorePreview = ({count}) => {
    const skeleton = [1, 2, 3, 4, 5];

    return (
        <div>
           {
               skeleton.map(item => {
                if(item > count) {
                    return <StarOutlined key={`score-item-${item}`} />
                } else {
                    return <StarFilled key={`score-item-${item}`} />
                }
            })
           }
        </div>
       
    )
}

export default ScorePreview;
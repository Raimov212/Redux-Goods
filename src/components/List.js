import React from 'react'

const List = (data) => {
    console.log('======');
    console.log(data);
    console.log('======');
    return (
        <div>
            {
                data.goods.map(item=><li key={item.id}>{item.title}<img src={item.img} style={{width : '80px'}}/></li>)
            }
        </div>
    )
}

export default List

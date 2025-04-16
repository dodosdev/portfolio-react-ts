import React from 'react';
import { Category } from '@interfaces/common';

type Category2Props = {
    category: Category;
    style: string;
    click: (name: string) => void;
}

const Category2: React.FC<Category2Props> = ({category, style, click}) => {
    const {name, count} = category;
    return (
        <button className={style}
                onClick={()=>{click(name)} }
        >{name}<span className="category__count">{count}</span></button>
    );
}

export default Category2;
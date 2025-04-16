import React, { useState, useEffect } from 'react';
import Category2 from './Category2';
import axios from 'axios';

type Category = {
    name: string;
    count: number;
}

const Categories2: React.FC = () => {
    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const [selected, setSelected] = useState('All');    

    useEffect(()=> {
        axios("data/category.json")
            .then((res)=> setCategoryList(res.data))
            .catch(error=> console.log(error));
    }, []);

    const handleSelected = (name: string) => {
        setSelected(name);
    }
    
    return (
        <ul className="categories">
            {categoryList && categoryList.map((category) =>  
                <li>
                    <Category2 
                            category={category}
                            click={handleSelected}
                            style={ category.name === selected ? //category.name 값을 사용하는 경우 타입정의!
                                    'category category--selected'
                                    : 'category'
                            }
                            />
                </li>
            )}
        </ul>
    );
}

export default Categories2;
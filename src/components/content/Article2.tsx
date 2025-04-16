import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Article2: React.FC<{type: string}> = ({type}) => {
    const [tools, setTools] = useState([]);
    const [etc, setEtc] = useState([]);

    useEffect(()=>{
        axios("data/article.json")
            .then(res => {
                setTools(res.data.tools)
                setEtc(res.data.etc);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <article className="skills__tools">
            <h3 className="skill__title">{type}</h3>
            <ul>
                {type === 'Tools' ? 
                    tools.map(item =>
                        <li>{item}</li>
                    )
                    : etc.map(item => 
                        <li>{item}</li>
                    )
                }                
            </ul>
        </article>
    );
}

export default Article2;
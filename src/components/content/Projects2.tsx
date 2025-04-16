import React, {useState, useEffect} from 'react';
import Project2 from './Project2';
import axios from 'axios';

const Projects2: React.FC = () => {
    const [projectList, setProjectList] = useState([]); 
    useEffect(()=> {
        axios("data/project.json")
            .then((res)=> setProjectList(res.data))
            .catch(error=> console.log(error));
    }, []);

        return (
            <ul className="projects">
                {projectList && projectList.map((project) => 
                    <li className="project">
                        <Project2 project={project}  />
                    </li>            
                )}
            </ul>
        );
}

export default Projects2;
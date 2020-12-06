import React from 'react';
import ListItem from './ListItem/ListItem';
import Masonry from 'react-mason';
import './List.css';

const list = (props) => {
    return(

        
        <div className="list">
            <Masonry className="list">
            {

                props.projects.map(project => {
                    return( 
                       
                            <ListItem 
                                key={project.id} 
                                title={project.title}
                                link={project.link} />
                        
                    )
                })
            }
            </Masonry>
        </div>
    );
};

export default list;
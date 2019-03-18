import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';

function RenderLeader(props){
    return(
        <Media>
            <Media left href="#">
                <Media object src={props.leader.image}/>
            </Media>
            <Media body>
                <Media heading>
                    {props.leader.name}
                </Media>
                <div>{props.leader.designation}</div>
                {props.leader.description}
            </Media>
        </Media>
    );

}

export default RenderLeader;
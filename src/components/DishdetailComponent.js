import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component{
    constructor(props){
        super(props)

    }
    render(){
        const comments = this.props.dish.comments.map((c)=>{
            return(
                <div className="">
                    <div>{c.comment}</div>
                    <div>--{c.author}, {c.date}</div>
                </div>
            )
        });
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    { comments }
                </div>
                
            </div>
            
            
        )
    }
}

export default DishdetailComponent;
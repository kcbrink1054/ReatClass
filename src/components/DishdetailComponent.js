import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props)

    }
    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                </Card>        
            </div>
            
        )
    }
    renderComments(comments){

        const cts = comments.map((c)=>{
            return(
                    <div className="">
                        <div className="m-1">{c.comment}</div>
                        <div>--{c.author}, {new Intl.DateTimeFormat('en-us',{year: 'numeric',month: 'short', day:'2-digit'}).format(new Date(Date.parse(c.date)))}</div>
                    </div>                
            )
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                { cts }
            </div>
        )
    }
    render(){
        if(this.props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>   
            )
        } else{
            return(<div></div>)
        }
        
    }
}

export default DishDetail;
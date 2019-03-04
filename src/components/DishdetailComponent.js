import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>        
            </div>
            
        )
    }
    function RenderComments({comments}){

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
    const DishDetail = (props) => {
        if(props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>   
            )
        } else{
            return(<div></div>)
        }
        
    }


export default DishDetail; 
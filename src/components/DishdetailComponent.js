import React, { Component } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Col, Row, Label } from 'reactstrap';
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
    function toggleModal(){

    }
    function RenderComments({comments, addComment, dishId}){

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
                <CommentForm
                dishId={dishId}
                addComment={addComment}
                />
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
                        <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                        />
                        
                    </div>
                    
                </div>   
            )
        } else{
            return(<div></div>)
        }
        
    }

    
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const required = (val) => val && val.length;

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(values){
        this.toggleModal()
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){
        return(
            <div className="row">
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm
                        onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select
                                        model=".rating"
                                        className="form-control"
                                        id="rating"
                                        name="rating"
                                        type="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select> 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12}>Your Name</Label>
                                <Col md={12}>
                                <Control.text
                                    model=".author"
                                    className="form-control"
                                    placeholder="Your Name"
                                    id="author"
                                    name="author"
                                    type="text"
                                    validators={{
                                        required, minLength:minLength(3), maxLength:maxLength(15)
                                    }}
                                />
                                <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: "Required",
                                    minLength: 'Must be greater than 3 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12}>Comment</Label>
                                <Col md={12}>
                                <Control.textarea
                                    model=".comment"
                                    className="form-control"
                                    id="comment"
                                    name="comment"
                                    type="textarea"
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default DishDetail; 
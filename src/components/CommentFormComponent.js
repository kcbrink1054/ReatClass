import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Row, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const required = (val) => val && val.length;

export default class CommentForm extends Component{
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
        alert(JSON.stringify(values))
        console.log(JSON.stringify(values))
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
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
                                    model=".yourname"
                                    className="form-control"
                                    placeholder="Your Name"
                                    id="yourname"
                                    name="yourname"
                                    type="text"
                                    validators={{
                                        required, minLength:minLength(3), maxLength:maxLength(15)
                                    }}
                                />
                                <Errors
                                className="text-danger"
                                model=".yourname"
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
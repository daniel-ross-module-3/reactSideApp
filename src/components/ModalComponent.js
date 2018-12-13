import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "react-bootstrap";
import axios from "axios";


class ModalComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    console.log("-0-00-0--0", this.state)
    this.setState({ show: false });
  }

  handleShow() {
    console.log("ahoy", this.state)
    this.setState({ show: true });
  }

  render() {
    return <div className="iconSize">
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <h1>Hello</h1>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}

export default ModalComponent;
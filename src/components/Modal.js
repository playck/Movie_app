import React, { Component } from 'react';
import './Modal.scss'

class Modal extends Component {
    render() {
        const {flg , onClose, findData} = this.props
        return (
            <div className={`Modal ${flg && 'on'}`} >
                <h2>{findData.title}</h2>
                <div>
                <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + findData.key} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="close" onClick={onClose}>X</div>
            </div>
        );
    }
}

export default Modal;
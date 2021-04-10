import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class CampsiteInfoComponent extends Component {
    renderCampsite(campsite) {
        if (campsite) {
            return (
                <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        return <div />;
    }
    renderComments(campsites) {
        if (campsites) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {campsites.map(campsites => {
                        return (
                            <div key={campsites.id}>{campsites.text} <br /> -- {campsites.author} {new Intl.DateTimeFormat('en-US', 
                            { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(campsites.date)))}</div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }
}
export default CampsiteInfoComponent;
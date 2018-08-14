import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Messenger from './messenger'



export default class MyClass extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{height: '300px'}}
      >
        <AnyReactComponent
          lat={28.5880482}
          lng={77.3161076}
          text={'Google Map'}
        />
      </GoogleMapReact>
    );
  }
}
MyClass.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 11
};

export default MyClass;
import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showing: 'button',
          showingImg: false
        }
    }

    showImage() {
      this.setState({
        showing: 'image'
      });
    }

    showImage2(showBool) {
      this.setState({
        showingImg: showBool
      })
    }

    render() {

      // if(this.state.showing === 'button') {
      //   // Show the button to start with
      //   return <SurpriseButton onClick={() => this.showImage()} />;
      // }
      // else if(this.state.showing === 'image') {
      //   return <SurpriseImage />
      // }

      if(!this.state.showingImg) {
        return <SurpriseButton onClick={(showBool) => this.showImage2(showBool)} />;
      }
      else if(this.state.showingImg) {
        return <SurpriseImage />
      }
      
    }
}

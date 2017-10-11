import React from 'react';

export default function SurpriseButton(props) {
  // onClick(event) {
  //   event.preventDefault();

  //   if(this.props.onClick) {
  //     this.props.onClick(true);
  //   }
  // }

  // onClick(event) {
  //       event.preventDefault();
  //       if (this.props.onClick) {
  //           this.props.onClick(true);
  //       }
  //   }

  // why function onClick instead of onClick
  function onClick(event) {
    event.preventDefault();
    if(props.onClick) {
      props.onClick(true);
    }
  }

    // why can't i use this.props, because it's not a stateful component
    // return <button onClick={props.onClick}>Surprise!</button>;

    // why not this.onClick
    return <button onClick={(e) => onClick(e)}>Surprise!</button>;
}


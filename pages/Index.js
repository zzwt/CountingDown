import React from 'react';
import css from "./index.css"

export default class Index extends React.Component {

  static getInitialProps(){
    return {
      bg: 'test1.jpg'
    }
  }

  render(){
    return (
    <div className='bg-image' style={
      { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
                          url('/static/${this.props.bg}')`
      }}
      >12 : 12 : 04
      </div>
    )
  }
}
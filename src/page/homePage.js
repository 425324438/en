import React, { Component } from 'react';

/*
  所有的页面都要走这个页面过啊一遍
*/
const Home = (props) => {
  const { children, location, routerDirection } = props
  return (
    <div>
      {
        React.cloneElement(children, {
          key: location.pathname
        })
      }
    </div>
  )
}

export default Home

import React from 'react';
import Header from './header'
/*
  所有的页面都要走这个页面过啊一遍
*/
const Home = (props) => {
  const { children, location } = props
  return (
    <div>
      <Header />
      {
        React.cloneElement(children, {
          key: location.pathname
        })
      }
    </div>
  )
}

export default Home

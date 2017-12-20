import React from 'react';
import { Menu, Icon,Button } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

function Header({ dispatch,  location ,param}) {
	function changeUrl(){
	     dispatch({
	               type: 'headUrl/fetch'  
	         }).then(result=>{
	           if(result[0].key){
	                window.open(result[0].url);
	           }
	         })
	}
	return (
                  <Menu
	      selectedKeys={[location.pathname]}
	      mode="horizontal"
	      theme="dark"
	    >
	      <Menu.Item key="/user">
	        <Link to="/user"><Icon type="bars" />user</Link>
	      </Menu.Item>
	      <Menu.Item key="/">
	        <Link to="/"><Icon type="home" />Home</Link>
	      </Menu.Item>
	      <Menu.Item key="/antd">
	         <Button onClick={changeUrl}>dva</Button>
	      </Menu.Item>
	        <Menu.Item key="/images">
                         <Link to="/images"><Icon type="smile" />MyGrils</Link>
                   </Menu.Item>
	    </Menu>
	);
}


export default connect()(Header);
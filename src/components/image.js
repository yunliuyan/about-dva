import React from 'react';
import { Carousel } from 'antd';
import { connect } from 'dva';
require('./image.less');


function image(props){
       //console.log(props.list);
       const arrList = props.list; 
     //  console.log(arrList);
	return (
              <Carousel autoplay>
                    {
                           arrList.map(function(item){
                                return <div key={item.key}><img key={item.key} src={require("../assets/img/"+item.url)} width="500" height="260" alt={item.name} /></div>
                           })
                    }
  	       </Carousel>
	 )
}


function mapStateToProps(state) {
    const {list} = state.images;
    return {
        list
    }
}


export default connect(mapStateToProps)(image);
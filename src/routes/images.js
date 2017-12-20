import React from "react";
import  { connect } from "dva";
import Images from "../components/image";
import Header from "../components/MainLayout/MainLayout";


function MyGrils({ location }) {
	return (
	   <Header location={ location }>
                  <div><Images /></div>
                  </Header>
	)
};

MyGrils.propTypes={
	
};

export default connect()(MyGrils);
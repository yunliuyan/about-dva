import React from 'react';
import { connect } from 'dva';
import { Table, Icon, Popconfirm} from 'antd';




function User (props) {

//componentDidMount(){
 // const {dispatch} =props;

   // dispatch({ type: 'fetch'});
//}
          
     //console.log(props.list)
          const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
          }, {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                    <Popconfirm title="Confirm to delete?">
                      <a href="">Delete</a>
                    </Popconfirm>
                  </span>
            ),
          }];

	  return(
                      <div>
                      <div>
                      <Table dataSource={props.list} columns={columns} />
                      </div>
                      </div>
	  )
	
}

function mapStateToProps(state) {
    const {list} = state.user;
    return {
        list
    }
}

export default connect(mapStateToProps)(User);

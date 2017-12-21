import React from 'react';
import ReactTable from "react-table";
import {Route, Link} from 'react-router-dom';

export default class UsersTable extends React.Component{
constructor(props){
  super(props);
  this.state={
    data: this.makeData(),

  }
  this.makeData=this.makeData.bind(this);
  this.range=this.range.bind(this);
  this.newPerson = this.newPerson.bind(this);

}

makeData(len = 5553) {
  return this.range(len).map(d => {
    return {
      ...this.newPerson(),
      children: this.range(10).map(this.newPerson)
    };
  });
}
range(len){
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
newPerson(){
  const statusChance = Math.random();
  return {
  username: (<Link to='/admin/users/details/1'>bob</Link>),
    email: "bob@email.com",
    auth: statusChance > 0.66
      ? "reddit"
      : statusChance > 0.33 ? "reddit, twitter" : "twitter",
    joined: Math.floor(Math.random() * 100),
    level: Math.round(statusChance*100),
    tier:
      statusChance > 0.66
        ? "T1"
        : statusChance > 0.33 ? "T2" : "T3"
  };
};


render(){
  const { data } = this.state;

return(
  <div>
    <div>
        <ReactTable
          data={data}
          columns={[
                {
                  Header: "Username",
                  accessor: "username"
                },
                {
                  Header: "Email",
                  accessor: "email"
                },
                {
                  Header: "Auth service",
                  accessor: "auth"
                },
                {
                  Header: "Time Joined",
                  accessor: "joined"
                },
                {
                  Header: "Level",
                  accessor: "level"
                },
                {
                  Header: "Tier",
                  accessor: "tier"
                }

          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          filterable
        />
        <br />
      </div>


</div>
)

  }
}

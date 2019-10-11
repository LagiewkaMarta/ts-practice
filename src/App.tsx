import * as React from 'react';
import { connect } from 'react-redux';

import { User, fetchUsers } from "./redux/actions";
import { StoreState } from "./redux/reducers/rootReducer";
import './App.css';

interface AppProps {
  users: User[];
  fetchUsers: () => void;
}

class _App extends React.Component<AppProps> {

  onButtonClick = () => {
    this.props.fetchUsers();
  }

  renderList(): JSX.Element[] {
    return this.props.users.map((user: User, idx) => {
      return <div key={idx}>{user.name}</div>
    })
  }
  render() {

    return (
      <>
        <button onClick={this.onButtonClick}>Fetch users</button>
        {this.renderList()}
      </>
    );
  }

}

const mapStateToProps = ({ users }: StoreState): { users: User[] } => {
  return { users }
}

export const App = connect(mapStateToProps, { fetchUsers })(_App);

import React, { Component } from "react";
import { connect } from "react-redux";
import { peopleSelectors, peopleOperations } from "./redux/people";

import "./App.module.css";

import Filters from "./Components/Filters";
import ListOfPeole from "./Components/ListOfPeople";

class App extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    const { listOfPeople } = this.props;
    return (
      <>
        {listOfPeople && (
          <>
            <Filters />
            <ListOfPeole />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfPeople: peopleSelectors.getFilteredPeople(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(peopleOperations.fetchPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

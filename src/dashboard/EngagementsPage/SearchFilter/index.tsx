import React, { FC } from "react";
import { connect } from "react-redux";

const SearchFilter: FC = props => {
  return <div>SearchFilter</div>;
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(SearchFilter);

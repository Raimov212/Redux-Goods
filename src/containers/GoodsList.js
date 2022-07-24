import { connect } from "react-redux";
import List from "../components/List";

const mapStateProps = state => {
  const { goods } = state;
  return { goods: goods };
};

export default connect(mapStateProps, null)(List);

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsersProfile } from "../../redux/actions/profile-actions";

const Dashboard = ({ getUsersProfile, auth, profile }) => {
  useEffect(() => {
    getUsersProfile();
  }, []);

  return <div> Dashboard </div>;
};

Dashboard.propTypes = {
  getUsersProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getUsersProfile }
)(Dashboard);

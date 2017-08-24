import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { projectsFetchData } from '../actions/projects';
import MessageList from './MessageList';

class Projects extends Component {
    componentDidMount() {
      this.props.fetchData('https://api.proworkflow.net/projects?apikey=9ZVM-873H-3JPK-C55Q-PWFE7MN-TR86485');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
          <div className="container">
            <div className="panel panel-primary">
              <div className="panel-heading clearfix">
                <div className="header-logo pull-left" />
                <div className="pull-right heading">
                  <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                  &nbsp;Project Messages
                </div>
               </div>
              <div className="panel-body secondry">
                {this.props.projects.map((item) => (
                  <div className="media" key={item.id}>
                    <div className="media-body">
                      <h4 className="media-heading"><i>{item.companyname}</i></h4>
                      <p><i>{item.title}</i></p>
                      <MessageList projectId={item.id}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}
Projects.propTypes = {
    fetchData: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        hasErrored: state.projectsHasErrored,
        isLoading: state.projectsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(projectsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

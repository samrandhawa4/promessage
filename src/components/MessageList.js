import React, { Component } from 'react';
import axios from 'axios';

class MessageList extends Component {
  constructor() {
     super();
     this.state = {
       messages: [],
     };
   }
    componentDidMount() {
      let projectId = this.props.projectId;
      this.fetchData(`https://api.proworkflow.net/projects/${projectId}/messages?apikey=9ZVM-873H-3JPK-C55Q-PWFE7MN-TR86485`);
    }
    fetchData(url) {
            axios.get(url, {
                  headers: { 'Accept': 'application/json' },
                  auth :{ username: 'Harinder', password: '@Harinder' }
                })
                .then((response) => {
                    this.setState({messages: response.data.messages});
                })
                .catch((error) => {
                  console.log(error);
                });
    }
    render() {
        return (
          <div className="media-container">
            {this.state.messages.map((item) => (
            <div className="media" key={item.id}>
              <div className="media-left">
                <a role="button">
                  <img className="media-object img-circle" src="http://www.gravatar.com/avatar/8c2f99e721ce7c2e8968ae2eec40c4dc?s=80&d=mm" alt="..."/>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{item.authorname}</h4>
                <p dangerouslySetInnerHTML={{__html: item.content}}/>
              </div>
            </div>
            ))}
          </div>
        );
    }
}
export default MessageList;

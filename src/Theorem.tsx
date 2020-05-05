import * as React from 'react';
import { Component } from 'react';
import firebase from "./firebase";
import Card from '@material-ui/core/Card';

interface TheoremProps {
  fbKey: string,
}

interface TheoremState {
  fbKey: string,
  name: string,
  statement: string,
  dependencies?: object
}


class Theorem extends Component<TheoremProps, TheoremState> {

      componentDidMount() {
          firebase.database().ref(`Theorems/${this.props.fbKey}`).once('value').then( (snap) => {
          let dependencies = snap.val().dependencies;
          let name = snap.val().name;
          let statement = snap.val().statement;
          this.setState({
            fbKey: this.props.fbKey,
            name: name,
            statement: statement,
            dependencies: dependencies
            });
        });
    }
    
    

    render() {
      return (
        <Card>
          {(this.state)?
            <div className='theorem'>
            <header>
                <div className='wrapper'>
                  <h1>{this.state.name}</h1>
                  
                </div>
            </header>
            <div className='about'>
              <p>{this.state.statement}</p>
              {(this.state.dependencies)
              //<ul>
              ?  (Object.keys(this.state.dependencies).map((key:string)=> {
                  return <div>{key}</div>
                }
                ))
              //</ul>
              :
              ""}
            </div>
          </div>
          :
          <h1>loading...</h1>
          }
        </Card>
      );
    }
  }
  export default Theorem;
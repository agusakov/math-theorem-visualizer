import * as React from 'react';
import { Component } from 'react';
import firebase from "./firebase";
import Card from '@material-ui/core/Card';

interface FormProps {
  fbkey?: string,
}

interface FormState {
  fbKey: string,
  name: string,
  statement: string,
  dependencies?: string
}


class Theorem extends Component<FormProps, FormState> {
    /*constructor(props: FormProps) {
        super(props);
      }*/

      componentDidMount() {
          firebase.database().ref(`Theorems/${this.props.fbkey}`).once('value').then( (snap) => {
          let dependencies = snap.val().dependencies;
          let name = snap.val().name;
          let statement = snap.val().statement;
          /*Object.keys(snap.val()).forEach((key)=>{
            if(key.substring(0,4)==="lead"){
              faculty[key] = snap.val()[key].split(",");
            }
          });*/
          //console.log(faculty);
          this.setState({
            //data: snap.val(),
            name: name,
            statement: statement,
            dependencies: dependencies
            });
        });
    }
    
    

    render() {
      return (
        <Card>
        <div className='theorem'>
          <header>
              <div className='wrapper'>
                <h1>{this.state.name}</h1>
                
              </div>
          </header>
          <div className='about'>
            <ul>
                <item>{this.state.statement}</item>
                <item>{this.state.dependencies[0]}</item>
            </ul>
          </div>
        </div>
        </Card>
      );
    }
  }
  export default Theorem;
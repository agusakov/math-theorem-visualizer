import React, { Component } from 'react';
import firebase from "./firebase";
import Card from '@material-ui/core/Card';


class Theorem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fbkey: this.props.theoremId,
            name: '',
            statement: '',
            dependencies: ''
        }
      }

      componentDidMount() {
          firebase.database().ref(`Theorems/${this.state.fbkey}`).once('value').then( (snap) => {
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
            data: snap.val(),
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
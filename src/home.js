import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class RightSide extends Component{
    render(){
        return(
            <div className="RightSide">
                <img src="images/path1.png" class="path1"></img>
                <img src="images/path2.png" class="path2"></img>
                <img src="images/path3.png" class="path3"></img>
            </div>
        )
    }
}

export class Home extends Component {
    render() {
      return (
      <div className="mainv">
        <RightSide />
      </div>  
      );
    }
  }
  
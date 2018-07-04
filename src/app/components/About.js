
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);

        // state is a keyword
        this.state = {
            members: [
                {
                    name: 'Sunil',
                    likes: 0
                },
                {
                    name: 'Vipin',
                    likes: 0
                }
            ],
            show: true
        }
    }

    increment(i) {
        // BAD, mutability
        //this.state.likes ++;

        // BAD
        // force fully calls render method
        //this.forceUpdate();

        console.log("before set state", this.state.members[i], i);

        // Good way
        // calls render after merge state
        // setState is async
        this.setState({
            likes: this.state.members[i].likes++
         });
        

        console.log("after set state", this.state.members);
    }

    showhide() {
        this.setState({
            show: !this.state.show
        }, ()=>{
            console.log("in call back", this.state);
        });
    }

    addMember () {
        this.setState({
            members: [...this.state.members, "Memeber " + Math.random()]
        })
    }
    
    render() {

        console.log ("About");

        return (
            <div> 
                <hr/>
            <h2>About</h2>
            
            
            {/* <button onClick = { () => this.increment()} >
             {+1}
            </button> */}

            <button onClick = { () => this.showhide()} >
             Show/Hide
            </button>

            <button onClick = { () => this.addMember()} >
             Add Member
            </button>

            {/* <h2> Likes {this.state.likes} </h2> */}

            { this.state.show &&
            <ul>
            {
                this.state.members.map( (m, i) => (<li key={i}> <img src={`/assets/${m.name}.jpg`} alt='photo'/> 
                <button onClick = { () => this.increment(i)} >
             For {m.name} likes are {m.likes}
            </button></li>))
            }
            </ul>
            }
            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}
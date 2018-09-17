import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age:props.innitialAge
        }
    }
    onMakeOlder() {
        this.setState({
           age:this.state.age + 3
        });
    }
    render() {
        console.log(this.props);
        // let content = '';
        // if (true){
        //     content = 'content = Yes!';
        // }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <h1>Home</h1>
                        {/*{content}*/}
                        {/*{true ? 'Yes' : 'NO'}*/}
                        <div>home name is {this.props.name}, home age is {this.state.age} </div>
                        <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>


                        {/*<div>*/}
                            {/*<h4>Hobbies</h4>*/}
                            {/*<ul>*/}
                                {/*{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                            {/*{this.props.children}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
Home.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
};
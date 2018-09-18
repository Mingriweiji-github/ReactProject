import React, {Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeLink:"home"
        }
    }
    onChangeLinkName(newName) {
        this.setState({
            homeLink:newName
        });
    }
    onGreet(age) {
        alert(age);
    }
    render() {
        const user = {
            name:'Anner',
            hobbies: ['sports','reading'],
        };
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <h1>App</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <Home
                            name={'Max'}
                            innitialAge={12}
                            user={user}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Input from './input';
var socket = require('socket.io-client')('http://localhost:3005');

// import Menu from '../Menu/menu';
// import background from '../../images/background.jpg';
// import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                name: 'farmer',
                type: 'farmer',
                id: 'F1'
            },
            userInput: "",
            experts: [
                {
                    id: 'E1',
                    message: ""
                },
                {
                    id: 'E2',
                    message: ""
                },
                {
                    id: 'E3',
                    message: ""
                },
                {
                    id: 'E4',
                    message: ""
                },
                {
                    id: 'E5',
                    message: ""
                },
                {
                    id: 'E6',
                    message: ""
                }
            ],
            companies: [
                {
                    id: 'C1',
                    message: ""
                },
                {
                    id: 'C2',
                    message: ""
                },
                {
                    id: 'C3',
                    message: ""
                },
                {
                    id: 'C4',
                    message: ""
                },
                {
                    id: 'C5',
                    message: ""
                },
                {
                    id: 'C6',
                    message: ""
                }
            ]
        }
    }

    componentDidMount() {
        let { experts } = this.state;
        socket.on('connect', function () {
            console.log('now you are connected with socket io', experts);
            for (let i = 0; i < experts.length; i++) {
                console.log(experts[i])
                socket.on(`F1${experts[i].id}`, function (data) {
                    console.log('data come from someone', data);
                })
            }
        });
    }

    updataData = (e, i) => {
        let { experts } = this.state;
        experts[i].message = e.target.value;
        this.setState({ experts });
    }

    sendMessage = (i) => {
        let { experts, currentUser } = this.state;
        console.log('message sended');
        let obj = {
            message: experts[i].message,
            reciverId: experts[i].id,
            senderId: currentUser.id,
            senderType: currentUser.type,
            reciverType: 'expert'
        }
        //if currUsr is farmer
        socket.emit(`${currentUser.id}${obj.reciverId}`, obj);
    }
    render() {
        return (
            <div>
                {
                    this.state.experts.map((data, i) => {
                        return (
                            <div key={i} className="each-element">
                                <div>
                                    {data.id}
                                </div>
                                <div>
                                    <input type="text" onChange={(e) => this.updataData(e, i)} value={data.message} />
                                    <button onClick={this.sendMessage(i)}>
                                        Send
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
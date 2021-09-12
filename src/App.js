import React from 'react';

import DeveloperList from './DeveloperList.js';

class App extends React.Component {

    state = {
        developerlist: [
            {
                id: 'DevJr1',
                name: 'Ullas Kunder',
                email: "ullaskunder3@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            },
            {
                id: 'DevJr2',
                name: 'Captain',
                email: "example@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            },
            {
                id: 'DevJr3',
                name: 'America',
                email: "userDevmail@gmail.com",
                "avatarUrl": "https://randomuser.me/api/portraits/med/men/1.jpg"
            }
        ]
    }
    removeDev = (del)=>{
        this.setState((currentState)=>({
            developerlist: currentState.developerlist.filter((user)=> user.id !== del.id )
        }))
    }

    render() {
        return (
            <div>
                {/* passing state */}
                <DeveloperList 
                onDeleteDev = {this.removeDev}
                developerlist={ this.state.developerlist } 
                />
            </div>
        )
    }
}
export default App
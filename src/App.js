import React from 'react';

import DeveloperList from './DeveloperList.js';

const developerlist = [
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
class App extends React.Component{
    render(){
        return(
            <div>
                {/* passing array of object to component */}
                <DeveloperList developerlist={developerlist}/>
            </div>
        )
    }
}
export default App
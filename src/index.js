import React from "react";
import ReactDOM  from "react-dom";
import profile1 from './images/micheal.jpg';
import profile2 from './images/dwight.jpg';
import profile3 from './images/jimAndPam.jpg';
import profile4 from './images/andy.PNG';
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
    return(
        <div className="ui comments">
            <UserCard
            headername='Micheal Gary Scott'>
                <SingleComment 
                name='Micheal'
                time='Today at 5:00PM' 
                text='Thats what she said'
                picture={profile1}
                />
            </UserCard>
            <UserCard
            headername='Dwight Schurte'>
            <SingleComment 
            name='Dwight'
            time='Today at 6:00PM'
            text='Do you want to form an alliance with me?'
            picture={profile2}
            />
            </UserCard>
            <UserCard
            headername='Jim and Pam Halpert'>
            <SingleComment
            name='Jim Pam'
            time='Today at 7:00PM'
            text='Absolutely I do'
            picture={profile3}
            />
            </UserCard>
            <UserCard
            headername='Andrew Banies Bernard'>
            <SingleComment
            name='Andy'
            time='Today at 8:00PM'
            text='I havent proposed to anyone in years'
            picture={profile4}
            />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
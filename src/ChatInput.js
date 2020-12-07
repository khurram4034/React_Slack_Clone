import React, { useState } from 'react';
import db from './firebase';
import './ChatInput.css';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        console.log("Chal rha ha ==>")
        e.preventDefault();

        if (channelId) {
            db.Collection("rooms").doc(channelId).Collection ({
            message: input,
            timestamp: firebase.firestore.FieldValue.server(),
            user: user.displayName,
            userImage: user.photoURL,
            })
        }
    };

    return (
        <div className='chatInput'>
        <form>
            <input  
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message # ${channelId?.toLowerCase()}`} 
            />
            <button type="submit" onClick={sendMessage}>
                SEND
            </button>
        </form>
        </div>
    )
}

export default ChatInput

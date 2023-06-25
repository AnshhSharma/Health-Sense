import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function ChatBot(props) {
  document.title = 'Health Sense - Chat Bot';
  const { isAuthenticated } = useAuth0();
  const chatBotUrl_1 = `https://webchat.botframework.com/embed/healthbot1234-bot?s=${props.key1}`
  const chatBotUrl_2 = `https://webchat.botframework.com/embed/healthbot1234-bot?s=${props.key2}`

  const [isKey1Working, setIsKey1Working] = useState(false);
  useEffect(() => {
    const checkKeyStatus = async () => {
      try {
        const response = await fetch(chatBotUrl_1);
        if (response.ok) {
          setIsKey1Working(true);
        } else {
          setIsKey1Working(false);
        }
      } catch (error) {
        setIsKey1Working(false);
      }
    };

    checkKeyStatus();
  }, []);
  return (
    <>
      <div className='chatBot-container'>
        <h3>HEALTH SENSE CHAT-BOT</h3>
        {isAuthenticated?
        <>
          {isKey1Working ?
            (<iframe className='chatBot' src={chatBotUrl_1} />)
            :
            (<iframe className='chatBot' src={chatBotUrl_2} />)
          }
        </> 
        :
        <div>
          <>You must be logged in to access the Health-Sense Chat Bot</>
        </div>
          }
      </div>

    </>
  )
}

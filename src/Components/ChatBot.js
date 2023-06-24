import React, { useEffect, useState } from 'react';

export default function ChatBot(props) {
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
    <div className='chatBot-container'>
      <h3>HEALTH SENSE CHAT-BOT</h3>
      {isKey1Working ? (
        <iframe className='chatBot'
          src={chatBotUrl_1}
        ></iframe>
      ) : (
        <iframe className='chatBot'
          src={chatBotUrl_2}
        ></iframe>
      )}
    </div>
  )
}

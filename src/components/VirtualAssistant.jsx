import React from 'react'
import {AiChat} from '@nlux/react';
import {useChatAdapter} from '@nlux/langchain-react';
import '@nlux/themes/nova.css';

const adapterOptions = {
    url: 'https://pynlux.api.nlux.ai/pirate-speak'
};

const VirtualAssistant = () => {

    const langServeAdapter = useChatAdapter(adapterOptions);
    
  return (
    <AiChat
            adapter={langServeAdapter}
            promptBoxOptions={{
                placeholder: 'How can I help you today?'
            }}
        />
  )
}

export default VirtualAssistant

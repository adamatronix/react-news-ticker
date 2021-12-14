import React from 'react';
import styled from 'styled-components';
import NewsTicker from './NewsTicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NewsTicker',
  component: NewsTicker,
};

const Text = styled.div`
  width: auto;
  height: 300px;
  box-sizing: border-box;
  padding: 0 60px;
  font-size: 60px;
  white-space: pre;
`

export const Default = () => {
  
  return (
    <>
      <NewsTicker speed={20}><Text>Praesent in suscipit.</Text><Text>Praesent in suscipit.</Text><Text>Praesent in suscipit.</Text><Text>Praesent in suscipit.</Text><Text>Praesent in suscipit.</Text></NewsTicker>
    </>
  );

}


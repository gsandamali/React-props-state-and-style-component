import React, { useState } from 'react';
import styled from 'styled-components';
// Components
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 2px solid white;
  margin: 0 auto;
`;

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Gradient = styled.div`
  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 305}, 64%, 60%)
  );
  height: 100%;
  width: 100%;
`;

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RangeInput = styled.input.attrs({
  type: "range"
})``;
const Text = styled.h1`
  color: white;
  font-family: sans-serif;
  margin-bottom: 16px;
`;

function App() {
  const [hue, setHue] = React.useState(340);
  // Lamp one
  const [isLampOneOn, setIsLampOneOn] = useState(false);
  // Lamp two
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return (
    <h1>
    Lamp On Off
    </h1>,
    <>
    <FullScreen>
      <Centered>
        <Room>
          <Lamp lampOn={isLampOneOn} position='left' />
          <Lamp lampOn={isLampTwoOn} position='right' />
          <LightSwitch
            name='one'
            callback={handleLightSwitchOne}
            switchOn={isLampOneOn}
            position='left'
          />
          <LightSwitch
            name='two'
            callback={handleLightSwitchTwo}
            switchOn={isLampTwoOn}
            position='right'
          />
        </Room>
        <Text>💅 styled-Background</Text>
        <RangeInput
          value={hue}
          onChange={evt => setHue(evt.target.value)}
          min="0"
          max="360"
        />
      </Centered>
      <Gradient hue={hue} />
    </FullScreen>
  </>
  );
}

export default App;

import React from "react";
import "./App.css";
import styled from "styled-components";
import logo from "./Rectangle1.png";

type BtnPropsType = {
  buttoncolor?: string;
  color?: string;
};

function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Picture src={logo}></Picture>
          <Title>Headline</Title>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <BtnDiv>
            <Btn buttoncolor={"#4E71FE"} color={"snow"}>
              See more
            </Btn>
            <Btn>Save</Btn>
          </BtnDiv>
        </Card>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 1000vh;
  display: flex;
  position: relative;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  width: 280px;
  height: 330px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 317px;
  left: 409px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 10px;
`;

const Picture = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin-left: 10px;
  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const Text = styled.p`
  color: rgb(171, 179, 186);
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
  line-height: 20px;
`;

const BtnDiv = styled.div`
  display: flex;
`;

const Btn = styled.button<BtnPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 10px;
  border: 2px solid #4e71fe;
  font-size: 12px;
  color: ${(props) => props.color || "#4e71fe"};
  font-weight: 700;
  background-color: ${(props) => props.buttoncolor || "snow"};

  &:hover {
    background-color: #0027c2;
    color: snow;
  }
`;

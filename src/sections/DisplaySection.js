import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);

  &>:nth-child(even){
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
  }

  &>:nth-child(odd){
    margin-left: 4rem;
  }
`;
const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextBlockRight = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 50%;
`

const TextBlockLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 50%;
`

const Title = styled.div`
font-size: var(--fontlg);
margin-bottom: 1rem;
`

const Text = styled.div`
font-size: var(--fontxs);
color: var(--greyLight);
margin-bottom: 0.5rem;
width: 55%
`

const TextContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transform: rotate(-25deg);
z-index: 1;
margin-bottom: 4rem;
`

const MovingText = styled.h1`
font-size: var(--fontBig);
font-family: var(--fontL);

background-image: linear-gradient(-45deg, var(--gradient));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const DisplaySection = () => {
    const container = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);
  
    useLayoutEffect(() => {
      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top-=500 top",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(textOne.current, { x: 0 }, { x: "20%" }, "key1")
        .fromTo(textTwo.current, { x: 0 }, { x: "-20%" }, "key1");
  
        return () => {
          if (tl) tl.kill();
        }
    }, []);
  return (
    <Section >
      <MainTitle>
        Immersive <br />
        Display
      </MainTitle>
      <TextBlockRight>
        <Title>Super Retina XDR Display</Title>
        <Text>
          loremDo labore voluptate pariatur esse aliqua eiusmod dolore consequat
          dolor et est deserunt Lorem.
        </Text>
      </TextBlockRight>

      <TextBlockLeft ref={container}>
        <Title>Big is Better</Title>
        <Text>
          loremDo labore voluptate pariatur esse aliqua eiusmod dolore consequat
          dolor et est deserunt Lorem.
        </Text>
      </TextBlockLeft>

      <TextContainer>
        <MovingText ref={textOne}>
            Tougher Than Ever!
        </MovingText>
        <MovingText ref={textTwo}>
            Every Touch Matters...
        </MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;

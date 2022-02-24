import React, { useEffect, useState, useRef, ReactChild } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";

/**
 * NewsTicker is a wrapper component to create an infinite scrolling effect.
 * @version 0.0.1
 * @author Adam Gee
 */

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
`

const Inner = styled.div`
  box-sizing: border-box;
  padding: 20px 0;
  position: relative;
  display: inline-flex;
`

const Set = styled.div`
  display: inline-flex;
`

 const Item = styled.div`
  margin: 0 10px;
`

const NewsTicker = (props:any) => {
  const { speed, children } = props;
  const set = useRef(null);
  const set2 = useRef(null);
  const myTween = useRef(null);
  const myTween2 = useRef(null);

  useEffect(() => {
    executeAnimations();

    return () => {
      myTween.current.kill();
      myTween2.current.kill();
    }
  },[]);


  const onMouseEnter = () => {
    myTween.current.paused(true);
    myTween2.current.paused(true);
  }

  const onMouseLeave = () => {
    myTween.current.paused(false);
    myTween2.current.paused(false);
  }

  const executeAnimations = () => {
    myTween.current = gsap.to(set.current,{duration: speed , x: "-100%", y: 0, ease: "linear", repeat: -1})

    myTween2.current = gsap.to(set2.current,{duration: speed, x: "-100%", y: 0, ease: "linear", repeat: -1, });
  }

  const createNewsItemSet = (children:any, ref:number) => {
    const items = React.Children.map(children, (child, i) => {
      return <Item>{child}</Item>;
    });

    return (ref === 0) ?  <Set ref={set}>{items}</Set> : <Set ref={set2}>{items}</Set>;
  }

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <Inner>
        { createNewsItemSet(children, 0) }
        { createNewsItemSet(children, 1) }
      </Inner>
    </Wrapper>
  );
}

export default NewsTicker;

import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
  text-align: center;
  background-color: #00000087;

`
const Unix = () => {
let time = Math.floor(Date.now() / 1000)
const [curTime , setTime] =  useState(time)

const UpdateTime = () => {
    time = Math.floor(Date.now() / 1000)
    setTime(time)
}

setInterval(UpdateTime , 1000)
  return (
    <Container><>
    <h1>Current Unix timestamp</h1>
    <h2>{curTime}</h2>
    </></Container>
  )
}

export default Unix;
import React ,{useState , useCallback , useEffect} from 'react'
import axios from "axios"
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100;
 display: flex;
 justify-content: center;
`
const Time = styled.div`
  margin: 10px;
  color: #000;
`
const Text = styled.div`
background-color: #e9f3ad;
padding: 10px;
`

const Data = ({url , link}) => {
  const [data , setData]   = useState([])
  const start = Math.floor(Date.now() / 1000)
  console.log(start)

const handleEffect = useCallback(async () => {
  axios.get(url).then(res => {
    setData(res.data)
})
.catch(err => console.log(err))  
}, [url , setData])

useEffect(() => {
  return () => {
    
   handleEffect()
  };
}, [handleEffect])

const timeEnd= Math.floor(Date.now() / 1000);

const saveStartTime = Math.floor(Date.now() / 1000)
localStorage.setItem('testObject', JSON.stringify(data));
const saveEndTime= Math.floor(Date.now() / 1000);

  return (
    <Wrapper>
      <Time>
    <Text>Request Start time: {start}</Text>
    <Text>Request End time: {timeEnd}</Text>
    <Text>Save Start time: {saveStartTime}</Text>
    <Text>Save End time: {saveEndTime}</Text>
    
   <button onClick={handleEffect}>{link}</button>
   </Time>
    </Wrapper>
  )
}

export default Data;
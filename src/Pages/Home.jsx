import React from 'react'
import Banner from '../Components/Banner'
import Data from '../Components/Data'
import Unix from '../Components/Unix'
import styled from 'styled-components';

const Wrapper = styled.div`
  
`
const Home = () => {
  return (
    <Wrapper>
<Banner/>

<Data url={"https://jsonplaceholder.typicode.com/photos"} link={"Photos"}/>
<Data url={"https://jsonplaceholder.typicode.com/comments"} link={"Comments"}/>
<Data url={"https://jsonplaceholder.typicode.com/posts"} link={"Posts"}/>
<Data url={"https://jsonplaceholder.typicode.com/todos"} link={"Todos"}/>
      <Unix/>
    </Wrapper>
  )
}

export default Home
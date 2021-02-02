import React from 'react'

import { Instruction, Title, Wrapper } from '~pages/Home.styles'

const Home = () => {
  return (
    <Wrapper>
      <main>
        <Title>Tasky</Title>
        <Instruction>
          <p>Input your tasks down bellow:</p>
        </Instruction>
      </main>
    </Wrapper>
  )
}

export default Home

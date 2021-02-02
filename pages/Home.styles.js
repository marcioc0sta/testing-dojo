import styled from 'styled-components'

import colors from '~/utils/colors'
import marginCalc from '~/utils/margins'

export const Wrapper = styled.div`
  padding: ${marginCalc(10)};
`

export const Title = styled.h1`
  border-bottom: solid 1px ${colors.CONCRETE};
  color: ${colors.BELIZE};
  padding-bottom: ${marginCalc()};
`

export const Instruction = styled.div`
  margin: ${marginCalc(2)} 0;
`

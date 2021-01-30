import styled from 'styled-components'

import colors from '~/utils/colors'
import marginCalc from '~/utils/margins'

export const Wrapper = styled.div`
  padding: ${marginCalc(5)};
`

export const Title = styled.h1`
  border-bottom: solid 1px ${colors.CONCRETE};
  color: ${colors.RIVER};
  padding-bottom: ${marginCalc()};
`

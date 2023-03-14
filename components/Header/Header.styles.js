import styled from "styled-components"

export const HeaderWrapper = styled.header`
  text-align: center;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => 32 / theme.fontSizes.root + "rem"};
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 8px;
`

export const Subtitle = styled.p`
  font-size: ${({ theme }) => 18 / theme.fontSizes.root + "rem"};
`

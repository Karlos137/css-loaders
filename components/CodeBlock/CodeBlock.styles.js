import styled from "styled-components"

export const CodeBlockWrapper = styled.div``

export const Label = styled.div`
  font-size: ${({ theme }) => 15 / theme.fontSizes.root + "rem"};
  color: ${({ theme }) => theme.colors.dialog.text};
  font-weight: 500;
`

export const Code = styled.code`
  font-size: ${({ theme }) => 14 / theme.fontSizes.root + "rem"} !important;

  @media (${({ theme }) => theme.queries.tabletAndUp}) {
    font-size: ${({ theme }) => 15 / theme.fontSizes.root + "rem"} !important;
  }
`

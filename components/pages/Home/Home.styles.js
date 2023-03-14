import styled from "styled-components"

export const HomeWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (${({ theme }) => theme.queries.tabletAndUp}) {
    padding-top: 64px;
  }
`

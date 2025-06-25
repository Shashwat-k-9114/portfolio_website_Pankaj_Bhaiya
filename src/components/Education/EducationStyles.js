import styled from 'styled-components';

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    margin: 24px auto;
    max-width: 500px;
  }
`;

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: auto;
  padding: 24px;

  @media ${props => props.theme.breakpoints.lg} {
    padding: 28px;
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const BoxNum = styled.h5`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const BoxText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
  }
`;

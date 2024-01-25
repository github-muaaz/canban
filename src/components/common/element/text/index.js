import styled from "styled-components";

const TextStyled = styled.p`
  color: ${({color}) => color ? color : 'var(--black, #000112)'};
  
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: ${({fs}) => fs ? fs : '18px'};
  letter-spacing: ${({lSpace}) => lSpace ? lSpace : ''};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: ${({margin}) => margin ? margin : 0};
  text-decoration: ${({highlight}) => highlight ? 'line-through' : ''};
`

const Index = ({content, ...rest}) => {

    return <TextStyled {...rest}>{content}</TextStyled>
}

export default Index;
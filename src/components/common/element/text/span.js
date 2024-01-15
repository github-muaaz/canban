import styled from "styled-components";

const SpanStyled = styled.span`
  color: ${({color}) => color ? color : 'var(--medium-grey, #828FA3)'};
  font-size: ${({fs}) => fs ? fs : '12px'};
  letter-spacing: ${({lSpace}) => lSpace ? lSpace : ''};
  font-feature-settings: 'clig' off, 'liga' off;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Span = ({content, ...rest}) => {

    return(
        <SpanStyled {...rest}>
            {content}
        </SpanStyled>
    )
}

export default Span;
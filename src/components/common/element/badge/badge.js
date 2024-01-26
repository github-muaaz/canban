import styled from "styled-components";

const DivStyled = styled.div`
  padding: 5px;
  border-radius: 6px;
  background: ${({danger, success}) => danger ? 'rgb(221, 139, 145)' : success ? '' : ''};
  border: solid 1px ${({danger, success}) => danger ? 'rgb(122, 40, 44)' : success ? '' : ''};
`

const TextStyled = styled.p`
    color: ${({danger, success}) => danger ? 'rgb(122, 40, 44)' : success ? '' : ''};
  font-size: 10px;
  font-weight: 800;
`

const Badge = ({content, danger, success, ...rest}) => {

    return (
        <DivStyled danger={danger} success={success} {...rest}>
            <TextStyled danger={danger} success={success}>
                {content}
            </TextStyled>
        </DivStyled>
    )
}

export default Badge;
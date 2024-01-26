import {createGlobalStyle, css} from "styled-components";
import "../assets/css/colors.css";
import "../assets/css/icons.css";

export default createGlobalStyle(css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  
  a{
    text-decoration: none;
  }

  .center--v--g{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  circle{
    transition: .4s;
  }
  
  .flex--column {
    display: flex;
    flex-direction: column;
  }

  .flex--row {
    display: flex;
    flex-direction: row;
  }

  .align--itm--center {
    align-items: center !important;
  }
  .align--itm--start {
    align-items: flex-start !important;
  }

  .justify--s--between {
    justify-content: space-between !important;
  }

  .g--8{
    gap: 8px !important;
  }
  
  .g--25 {
    gap: 25px !important;
  }
  
  .red{
    background-color: red;
  }

  .g--24 {
    gap: 24px !important;
  }

  .g--12 {
    gap: 12px !important;
  }

  .g--16 {
    gap: 16px !important;
  }
  
  .m--top--40{
    margin-top: 40px;
  }

  .h--100 {
    height: 100% !important;
  }

  .w--100 {
    width: 100% !important;
  }
  
  .p--25{
    padding: 25px !important;
  }
  
  .p--15--25{
    padding: 15px 25px !important;
  }
  
  .f--size--24 {
    font-size: 24px !important;
  }
  
  .font--weight--5{
    font-weight: 500 !important;
  }
  
  .l--height--23{
    line-height: 23px !important;
  }
  
  .medium--grey{
    color: var(--medium-grey, #828FA3) !important;
  }
  
  .board--subtitle {
    margin-left: 35px;
    margin-bottom: 19px;
  }
  
  
  @media screen and(max-width: 1440px) and(min-width: 768px){
    
  }
  
  @media screen and (max-width: 768px){
    .f--size--24{
      font-size: 18px;
    }
  }
`);

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

  .justify--s--between {
    justify-content: space-between !important;
  }

  .g--25 {
    gap: 25px !important;
  }

  .g--12 {
    gap: 12px !important;
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
  
  .f--size--15{
    font-size: 15px !important;
  }
  
  .f--size--24 {
    font-size: 24px !important;
  }
  
  .f--size--12 {
    font-size: 12px !important;
  }
  
  .letter--spc--24{
    letter-spacing: 2.4px !important;
  }
  
  .medium--grey{
    color: var(--medium-grey, #828FA3) !important;
  }
  
  .my--text{
    color: var(--black, #000112);
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .board--subtitle {
    color: var(--medium-grey, #828FA3);
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.4px;
    margin-left: 35px;
    margin-bottom: 19px;
  }

`);

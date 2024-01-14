import {createGlobalStyle, css} from "styled-components";
import "../assets/css/colors.css";

export default createGlobalStyle(css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
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
    align-items: center;
  }

  .justify--s--between {
    justify-content: space-between;
  }

  .g--25 {
    gap: 25px;
  }

  .h--100 {
    height: 100%;
  }

  .w--100 {
    width: 100%;
  }
  
  .p--25{
    padding: 25px;
  }
  
  circle{
    transition: .4s;
  }


  .tab--title {
    color: var(--black, #000112);
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 24px;
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

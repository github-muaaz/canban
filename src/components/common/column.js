import styled from "styled-components";
import Icon from "./element/icon/icon";
import Task from "./task";

const ColumnStyled = styled.div`
  width: 280px;
  flex-shrink: 0;
`

const Column = ({column}) => {

    return(
        <ColumnStyled className={'flex--column g--25'}>
            <div className={'flex--row align--itm--center g--12'} style={{color: column.color}}>
                <Icon icon={'circle'}/>
                <span className={'my--text medium--grey f--size--12 letter--spc--24'}>
                    {column.title + ' (' + column.tasks.length + ')'}
                </span>
            </div>

            {column.tasks.map(task =>
                <Task task={task} key={task.id}/>
            )}
        </ColumnStyled>
    )
}

export default Column;
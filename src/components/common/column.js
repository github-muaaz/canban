import styled from "styled-components";
import Icon from "./element/icon/icon";
import Task from "./task";
import Span from "./element/text/span";

const ColumnStyled = styled.div`
  width: 280px;
  flex-shrink: 0;
`

const ListStyled = styled.div`
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: ${({shadow}) => shadow >= 7 ? '6px -236px 30px -255px rgba(0,0,0,0.45) inset' : ''};
  padding-bottom: 10px;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`

const Column = ({column}) => {

    return (
        <ColumnStyled className={'flex--column g--25'}>
            <div className={'flex--row align--itm--center g--12'} style={{color: column.color}}>
                <Icon icon={'circle'}/>

                <Span content={`column.title (${column.tasks.length})`}/>
            </div>


            <ListStyled shadow={column.tasks.length} className={'flex--column g--25'}>
                {column.tasks.map(task =>
                    <Task task={task} key={task.id}/>
                )}
            </ListStyled>
        </ColumnStyled>
    )
}

export default Column;
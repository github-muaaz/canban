import styled from "styled-components";
import Icon from "./element/icon/icon";
import Task from "./task/task";
import Span from "./element/text/span";
import {Droppable} from "react-beautiful-dnd";

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

const Column = ({column, index}) => {

    return (
        <Droppable droppableId={column.id} index={index}>
            {(provided) => (
                <ColumnStyled
                    className={'flex--column g--25'}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <div className={'flex--row align--itm--center g--12'} style={{color: column.color}}>
                        <Icon icon={'circle'}/>

                        <Span content={`${column.name.toUpperCase()} (${column.tasks.length})`} lSpace={'2.4px'}/>
                    </div>


                    <ListStyled shadow={column.tasks.length} className={'flex--column g--25'}>
                        {column.tasks.map((task, index) =>
                            <Task task={task} key={task.id} index={index}/>
                        )}
                    </ListStyled>
                    {provided.placeholder}
                </ColumnStyled>
            )}
        </Droppable>
    )
}

export default Column;
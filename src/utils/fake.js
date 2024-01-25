import {v4 as uuid} from "uuid";

let dbSubtasks = [
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d91',
        title: 'Research competitor pricing and business models',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d91',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d92',
        title: 'Outline a business model that works for our solution',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d91',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d93',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d91',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d94',
        title: 'Research competitor pricing and business models',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d92',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d95',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d92',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d96',
        title: 'Research competitor pricing and business models',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d93',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d97',
        title: 'Outline a business model that works for our solution',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d93',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d98',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d94',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d99',
        title: 'Research competitor pricing and business models',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d95',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d90',
        title: 'Research competitor pricing and business models',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d95',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d1e',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d95',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d2e',
        title: 'Research competitor pricing and business models',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d96',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d3e',
        title: 'Outline a business model that works for our solution',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d96',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d4e',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        taskId: '6837f484-fffd-47ea-8108-8797641d7d97',
        isCompleted: false,
    },
]

const dbColumns = [
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d93',
        name: 'done',
        color: '#67E2AE',
        order: 300,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d91',
        name: 'todo',
        color: '#49C4E5',
        order: 100,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d92',
        name: 'doing',
        color: '#8471F2',
        order: 200,
    },
]

const dbCommonColumns = [
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d93',
        name: 'done',
        color: '#67E2AE',
        order: 300,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d91',
        name: 'todo',
        color: '#49C4E5',
        order: 100,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d92',
        name: 'doing',
        color: '#8471F2',
        order: 200,
    },
]

let dbTasks = [
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d91',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d91',
        boardId: '1',
        title: 'Build UI for onboarding flow',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d92',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d91',
        boardId: '1',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d93',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d91',
        boardId: '1',
        title: 'Build UI',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d94',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d92',
        boardId: '1',
        title: 'Outline a business model that works for our solution',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d95',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d92',
        boardId: '1',
        title: 'Build UI for search',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d96',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d93',
        boardId: '1',
        title: 'Research competitor pricing and business models',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d97',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d91',
        boardId: '2',
        title: 'Research pricing points of various competitors and trial different business models',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d98',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d92',
        boardId: '2',
        title: 'Add account management endpoints',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d99',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d93',
        boardId: '2',
        title: 'Design settings and search pages',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d90',
        statusId: '6837f484-fffd-47ea-8108-8797641d7d91',
        boardId: '3',
        title: 'Review results of usability tests and iterate',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
    },

]

const dbBoards = [
    {
        id: "1", name: "Platform Launch",
    },
    {
        id: "2", name: "Marketing Plan",
    },
    {
        id: "3", name: "Roadmap",
    },
    {
        id: "4", name: "Roadmap 2",
    },
]

const dbBoardColumn = [
    {
        boardId: '1',
        columnId: '6837f484-fffd-47ea-8108-8797641d7d91',
    },
    {
        boardId: '1',
        columnId: '6837f484-fffd-47ea-8108-8797641d7d92',
    },
    {
        boardId: '1',
        columnId: '6837f484-fffd-47ea-8108-8797641d7d93',
    },
    {
        boardId: '2',
        columnId: '6837f484-fffd-47ea-8108-8797641d7d91',
    },
    {
        boardId: '2',
        columnId: '6837f484-fffd-47ea-8108-8797641d7d92',
    },
    {
        boardId: '2',
        columnId: '6837f484-fffd-47ea-8108-8797641d7d93',
    },
    {
        boardId: '3',
        columnId: '6837f484-fffd-47ea-8108-8797641d7d91',
    },
]

const dbColors = [
    "#67E2AE",
    "#8471F2",
    "#49C4E5",
    '#00b533',
    '#ffffff',
    '#dfe3e8',
    '#c4cdd5',
    '#002930',
    '#00b533',
    '#e2f5e9',
    '#45b36b',
    '#007b55',
    '#1890ff',
    '#0c53b7',
    '#30c062',
    '#229a16',
    '#ffc107',
    '#b78103',
    '#ff4842',
    '#b72136',
    '#002930',
]


export const getCommonCols = () => {
    console.log('backend call: getCommonCols', dbCommonColumns)
    return dbCommonColumns.sort((a, b) => a.order - b.order);
}

export const getBoards = () => {
    console.log('backend call: getBoards', dbBoards)

    return dbBoards.map(b => {
        return {
            id: b.id,
            name: b.name,
            columns: dbBoardColumn
                .filter(bc => bc.boardId === b.id)
                .map(bc => dbColumns.find(c => c.id === bc.columnId))
        }
    });
}

export const getBoardTasks = id => {
    const data = dbBoardColumn
        .filter(bc => bc.boardId === id)
        .map(bc => dbColumns.find(c => c.id === bc.columnId))
        .map(c => {
            const column = {...c}
            column.tasks = dbTasks
                .filter(t => t.statusId === c.id && t.boardId === id)
                .map(t => {
                    const task = {...t}
                    const taskSubtasks = dbSubtasks.filter(sb => sb.taskId === t.id);
                    task.subtasksLenght = taskSubtasks.length;
                    task.completedSubtasks = taskSubtasks.filter(sb => sb.isCompleted).length;
                    return task;
                })
            return column;
        });

    console.log('backend call: getBoardTasks', data)
    return [...data];
}

export const getTask = (id) => {
    const task = dbTasks.find(t => t.id === id);
    const subtask = dbSubtasks.filter(sb => sb.taskId === task.id);

    task.subtasks = subtask;
    task.completedSubtasks = subtask.filter(sb => sb.isCompleted).length;

    console.log('backend call: getTask', task)
    return {...task};
}

export const getBoardStatuses = (boardId) => {
    console.log('backend call: getBoardStatuses, input', boardId)

    const bc = dbBoardColumn.filter(bc => bc.boardId === boardId);

    const data = dbColumns.filter(c => bc.find(bc => bc.columnId === c.id));

    console.log('backend call: getBoardStatuses, output', data)
    return data.sort((a, b) => a.order - b.order);
}

export const setTaskStatus = (taskId, statusId) => {
    console.log('backend call: setTaskStatus', taskId, statusId)

    dbTasks.forEach(t => {
        if (t.id === taskId)
            t.statusId = statusId;
    })
}

export const setSubtaskStatus = (id, isCompleted) => {
    console.log('backend call: setSubtaskStatus', id, isCompleted)

    dbSubtasks.forEach(s => {
        if (s.id === id)
            s.isCompleted = isCompleted;
    })
}

export const saveTask = task => {
    console.log('backend call input: ', {...task});

    // on adding new task
    if (!task.id) {
        task.id = uuid();

        // if (!task.statusId)
            // task.statusId = getBoardInitialStatus(task.boardId);

        const subtasks = [...task.subtasks]

        subtasks.forEach(st => {
            const subtask = {
                id: st.id,
                title: st.title,
                taskId: task.id,
                isCompleted: false,
            }
            dbSubtasks.push(subtask)
        })

        delete task.subtasks;

        dbTasks.push(task)
    }

    // on editing task
    else {
        const old = dbTasks.find(t => t.id === task.id);

        old.title = task.title;
        old.statusId = task.statusId;
        old.description = task.description;

        const newDbTasks = dbTasks.filter(t => t.id !== task.id);

        dbTasks = [...newDbTasks, old];

        const newSubtasks = dbSubtasks.filter(st => st.taskId !== task.id);
        dbSubtasks = [...newSubtasks];

        const subtasks = task.subtasks;

        subtasks.forEach(st => {
            st.taskId = task.id;
            st.isCompleted = st.isCompleted || false;

            dbSubtasks.push(st);
        })
    }
}

export const saveBoard = board => {
    console.log('backend call: saveBoard, input', board);

    // on creating new board
    if (!board.id) {
        board.id = uuid();

        const cols = [...board.columns];

        console.log('cols', cols)

        cols.forEach(col => {
            // console.log('l', col)
            console.log('is new',isNewColWithOldId(col))
            if(isNewColWithOldId(col))
                col.id = uuid();
            else{
                // const oldCol = isOldColWithNewId(col);

                // if(oldCol)
                //     col.id = oldCol.id;
            }
        })

        for (let i = 0; i < cols.length; i++) {
            const col = cols[i];

            if (!col.order) {
                if (cols.length === 1)
                    col.order = 100;
                else if (i === 0) {
                    if (cols[i + 1]?.order)
                        col.order = cols[i + 1].order / 2;
                    else
                        col.order = 100;
                } else if (i >= cols.length-1)
                    col.order = cols[i - 1].order * 2;
                else {
                    if (cols[i + 1].order)
                        col.order = (cols[i - 1].order + cols[i + 1].order) / 2;
                    else
                        col.order = cols[i - 1].order * 2;
                }
            }

            if(!col.color) {
                col.color = dbColors[Math.round(Math.random() * (dbColors.length - 1))];
            }
        }

        cols.forEach(col => {
            const boardColumn = {
                boardId: board.id,
                columnId: col.id,
            }

            dbBoardColumn.push(boardColumn)
        })

        // cols.filter(col => !dbColumnContains(col.id))
        //     .forEach(col => dbColumns.push(col));

        dbBoards.push(board);
    }


    console.log('columns', dbColumns)
}

const isNewColWithOldId = col => {
    return dbCommonColumns.find(c => {
        // console.log('c', c)
        // console.log('col', col)

        return(c.id === col.id && c.name !== col.name)
    })
}

const isOldColWithNewId = col => {
    return dbCommonColumns.find(c => c.id !== col.id && c.name === col.name);
}

const dbColumnContains = colId => {
    return dbColumns.find(col => col.id === colId)
}

const getBoardInitialStatus = (boardId) => {
    const bc = dbBoardColumn.filter(bc => bc.boardId === boardId);

    return dbColumns.filter(c => bc.find(bc => bc.columnId === c.id))
        .sort((c1, c2) => c1.order - c2.order)
        .find(c => c)
        ?.id;
}


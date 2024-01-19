const subtasks = [
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

const columns = [
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
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d93',
        name: 'done',
        color: '#67E2AE',
        order: 300,
    },
]

const tasks = [
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

const boards = [
    {
        id: "1", title: "Platform Launch",
    },
    {
        id: "2", title: "Marketing Plan",
    },
    {
        id: "3", title: "Roadmap",
    },
    {
        id: "4", title: "Roadmap 2",
    },
]

const boardColumn = [
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

const colors = [
    "#67E2AE",
    "#8471F2",
    "#49C4E5"
]


export const getBoards = () => {
    console.log('backend call: getBoards', boards)
    return boards;
}

export const getBoardTasks = id => {
    const data = boardColumn
        .filter(bc => bc.boardId === id)
        .map(bc => columns.find(c => c.id === bc.columnId))
        .map(c => {
            const column = {...c}
            column.tasks = tasks
                .filter(t => t.statusId === c.id && t.boardId === id)
                .map(t => {
                    const task = {...t}
                    const taskSubtasks = subtasks.filter(sb => sb.taskId === t.id);
                    task.subtasksLenght = taskSubtasks.length;
                    task.completedSubtasks = taskSubtasks.filter(sb => sb.isCompleted).length;
                    return task;
                })
            return column;
        });

    console.log('backend call: getBoardTasks', data)
    return data;
}

export const getTask = (id) => {
    const task = tasks.find(t => t.id === id);
    const subtask = subtasks.filter(sb => sb.taskId === task.id);

    task.subtasks = subtask;
    task.completedSubtasks = subtask.filter(sb => sb.isCompleted).length;

    console.log('backend call: getTask', task)
    return task;
}

export const getBoardStatuses = (boardId) => {
    console.log('backend call input', boardId)

    const bc = boardColumn.filter(bc => bc.boardId === boardId);

    const data = columns.filter(c => bc.find(bc => bc.columnId === c.id));

    console.log('backend call: getBoardStatuses', data)
    return data;
}

export const setTaskStatus = (taskId, statusId) => {
    console.log('backend call: setTaskStatus', taskId, statusId)

    tasks.forEach(t => {
        if(t.id === taskId)
            t.statusId = statusId;
    })
}

export const setSubtaskStatus = (id, isCompleted) => {
    console.log('backend call: setSubtaskStatus', id, isCompleted)

    subtasks.forEach(s => {
        if(s.id === id)
            s.isCompleted = isCompleted;
    })
}

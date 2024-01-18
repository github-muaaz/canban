
export const getColors = () => {
    return colors;
}
export const getBoard = id => {
    return boardItems.find(b => b.id === id);
}

export const getBoards = () => {
    return boards;
}

export const getTask = (id) => {
    return tasks.find(t => t.id === id);
}

export const getTasks = (boardId) => {
    return tasks
}

export const getStatus = (id) => {
    return statuses.find(s => s.id === id);
}

export const getStatuses = () => {
    return statuses;
}






export const checkSubtask = (taskId, subtaskId) => {
    subtasks.forEach(s => {
        if (s.id === subtaskId)
            s.isCompleted = !s.isCompleted;
    })

    return getTask(taskId);
}

export const setStatus = (taskId, statusId) =>{
    tasks.forEach(t => {
        if (t.id === taskId) {
            console.log('ok', statusId)
            t.status = getStatus(statusId);
        }
    })

    return getTask(taskId);
}

export const saveTask = task => {
    tasks.push(task);

    return {
        status: 200,
        data: boardItems,
    }
}

export const changeTaskStatus = (taskId, statusId) => {
    const task= getTask(taskId);

    task.status = getStatus(statusId);

    // return boardItems.map(b => {
    //     b.columns = b.columns.map(c => {
    //         return c;
    //     });
    //
    //     return b;
    // })

    return boardItems;
}



const colors = [
    "#67E2AE",
    "#8471F2",
    "#49C4E5"
]

const subtasks = [
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d91',
        title: 'Research competitor pricing and business models',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d92',
        title: 'Outline a business model that works for our solution',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d93',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d94',
        title: 'Research competitor pricing and business models',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d95',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d96',
        title: 'Research competitor pricing and business models',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d97',
        title: 'Outline a business model that works for our solution',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d98',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d99',
        title: 'Research competitor pricing and business models',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d90',
        title: 'Research competitor pricing and business models',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d1e',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        isCompleted: false,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d2e',
        title: 'Research competitor pricing and business models',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d3e',
        title: 'Outline a business model that works for our solution',
        isCompleted: true,
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d4e',
        title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
        isCompleted: false,
    },
]

const statuses = [
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
        id: '6837f484-fffd-47ea-8108-8797641d7d9e',
        status: statuses[0],
        title: 'Build UI for onboarding flow',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
        subtasks: [
            subtasks[0],
            subtasks[1],
            subtasks[2],
        ]
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d91',
        status: statuses[0],
        title: 'Build UI for search',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
        subtasks: [
            subtasks[3],
            subtasks[4],
        ]
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d92',
        status: statuses[0],
        title: 'Research pricing points of various competitors and trial different business models ',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
        subtasks: [
            subtasks[5],
            subtasks[6],
            subtasks[7],
        ]
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d93',
        status: statuses[1],
        title: 'Add account management endpoints',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
        subtasks: [
            subtasks[8],
        ]
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d94',
        status: statuses[1],
        title: 'Design settings and search pages',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
        subtasks: [
            subtasks[9],
            subtasks[10],
            subtasks[11],
        ]
    },
    {
        id: '6837f484-fffd-47ea-8108-8797641d7d95',
        status: statuses[2],
        title: 'Review results of usability tests and iterate',
        description: 'We know what we\'re planning to build for version one. Now we need to finalise the first pricing model we\'ll use. Keep iterating the subtasks until we have a coherent proposition.',
        subtasks: [
            subtasks[12],
            subtasks[13],
        ]
    },
]

const columns = [
    [
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d91',
            title: 'TODO',
            color: "#49C4E5",
            tasks: [
                tasks[0],
                tasks[1],
                tasks[2],
            ],
        },
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d92',
            title: 'DOING',
            color: '#8471F2',
            tasks: [
                tasks[3],
                tasks[4],
            ],
        },
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d93',
            title: 'DONE',
            color: "#67E2AE",
            tasks: [
                tasks[5],
            ],
        },
    ],
    [
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d91',
            title: 'TODO',
            color: "#49C4E5",
            tasks: [
                tasks[0],
            ],
        },
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d92',
            title: 'DOING',
            color: '#8471F2',
            tasks: [
                tasks[1],
                tasks[2],
                tasks[3],
                tasks[4],
            ],
        },
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d93',
            title: 'DONE',
            color: "#67E2AE",
            tasks: [
                tasks[5],
            ],
        },
    ],
    [
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d91',
            title: 'TODO',
            color: "#49C4E5",
            tasks: [],
        },
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d92',
            title: 'DOING',
            color: '#8471F2',
            tasks: [
                tasks[0],
                tasks[1],
            ],
        },
        {
            id: '6837f484-fffd-47ea-8108-8797641d7d93',
            title: 'DONE',
            color: "#67E2AE",
            tasks: [
                tasks[2],
                tasks[3],
                tasks[4],
                tasks[5],
            ],
        },
    ],
]

const boardItems = [
    {
        id: "1", title: "Platform Launch", columns: columns[0],
    },
    {
        id: "2", title: "Marketing Plan", columns: columns[1],
    },
    {
        id: "3", title: "Roadmap", columns: columns[2],
    },
    {
        id: "4", title: "Roadmap 2", columns: [],
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
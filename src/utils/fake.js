export const boards = [{
    id: "ashjjhdjhasasa", title: "Platform Launch"
}, {
    id: "ashjjhdjh33sasa", title: "Marketing Plan"
}, {
    id: "ashjjh22djhasasa", title: "Roadmap"
},]

export const colors = [
    "#67E2AE",
    "#8471F2",
    "#49C4E5"
]

export const boardFake = {
    columns: [
        {
            id: 1,
            title: 'TODO',
            color: "#49C4E5",
            tasks: [
                {
                    id: 1,
                    columnId: 1,
                    title: 'Build UI for onboarding flow',
                    subtasks: {
                        count: 3,
                        completed: 2
                    }
                },
                {
                    id: 4,
                    columnId: 1,
                    title: 'Build UI for search',
                    subtasks: {
                        count: 3,
                        completed: 2
                    }
                },
                {
                    id: 6,
                    columnId: 1,
                    title: 'Research pricing points of various competitors and trial different business models',
                    subtasks: {
                        count: 3,
                        completed: 2
                    }
                },

            ]
        },
        {
            id: 2,
            title: 'DOING',
            color: '#8471F2',
            tasks: [
                {
                    id: 2,
                    columnId: 2,
                    title: 'Add account management endpoints',
                    subtasks: {
                        count: 3,
                        completed: 2
                    }
                },
                {
                    id: 3,
                    columnId: 2,
                    title: 'Design settings and search pages',
                    subtasks: {
                        count: 3,
                        completed: 2
                    }
                },

            ]
        },
        {
            id: 3,
            title: 'DONE',
            color: "#67E2AE",
            tasks: [
                {
                    id: 5,
                    columnId: 3,
                    title: 'Review results of usability tests and iterate',
                    subtasks: {
                        count: 3,
                        completed: 2
                    }
                },


            ]
        },
        // {
        //     id: 4,
        //     title: 'DONE',
        //     color: "#67E2AE",
        //     tasks: [
        //         {
        //             id: 5,
        //             columnId: 3,
        //             title: 'Review results of usability tests and iterate',
        //             subtasks: {
        //                 count: 3,
        //                 completed: 2
        //             }
        //         },
        //
        //
        //     ]
        // },
    ]
}
const path = {
    employees: {
        GETS: '/employees/page/:page',
        GET: '/employees/:id',
        POST: '/employees'
    },
    attachments: {
        GETS: '/attachments/:id',
        POST: '/attachments',
        DELETE: '/attachment/:id'
    },
    schedule: {
        GETS: '',
        POST: '',
        PUT: '',
        DELETE: ''
    },
    timeoff: {
        GETS: '',
        POST: '',
        PUT: '',
        DELETE: ''
    },
    security: {
        GETS: '',
        PUT: ''
    }
}

module.exports = path;
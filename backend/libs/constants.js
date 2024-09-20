const httpStatusCode = {
    CREATED: 201,
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER: 500,
  };
  
  const channels = {
    EMPLOYEE_UPDATES_CHANNEL:'employee-updates-channel',
  }
  
  const events = {
    EMPLOYEE_UPDATES_EVENT:'employee-updates-event',
  }
  
  const pusherAction = {
    ACTION : 'employeee-registered',
  }
  
  module.exports = {
    httpStatusCode,
    channels,
    events,
    pusherAction
  };
  
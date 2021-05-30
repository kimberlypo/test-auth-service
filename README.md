# test-auth-service

test-auth-service is a Python - Django API service with React.js UI that provides a RESTful API interface for user signup and authentication.

API endpoints (Python)
* /api/login - user can be signed up with a username, password and an email
* /api/register - user can register with username, password or email
* /api/permissions
    * POST: create a new permission
    * GET: get available permissions
* /api/roles
    * POST: create a new role with certain permissions
    * GET: get available roles with role-ids
* /api/users/
    * GET: get list of users already in DB
# docker-express-mongo
# REST API WITH DOCKER CONTAINER
# --------------------------------------------------------------------------------------------
This is a test project for making REST API using Docker, NodeJS, Express and MongoDB.

# REQUIREMENTS
# --------------------------------------------------------------------------------------------
-   Node.js
-   NPM
-   Docker
-   Express

# TOOLS
# -------------------------------------------------------------------------------------------
-   Docker Desktop
-   VS Code
-   Git
-   Postman

# GETTING STARTED
# --------------------------------------------------------------------------------------------
$   git clone https://github.com/SantuQA/docker-express-mongo
$   cd <working-directory>   
$   npm install
$   npm start

# DOCKER COMPOSE
# --------------------------------------------------------------------------------------------
$   docker compose -f "docker-compose.yml" up -d --build                      //START
$   docker compose -f "docker-compose.yml" down                               //STOP
$   docker compose -f "docker-compose.yml" up -d --build                      //RESTART
$   docker ps                                                                 //SHOW RUNNING PORT

# TESTING WITH POSTMAN
# --------------------------------------------------------------------------------------------
<!-- CREATE RESOURCE -->
URL:      http://localhost:6002/api/tutorials METHOD: POST
BODY:     { "title":"Test","description":"Test description","published":"true"}
RESPONSE: { "title": "Test","description": "Test description","published": true,"createdAt": "2022-07-27T05:53:09.392Z",
            "updatedAt": "2022-07-27T05:53:09.392Z","id": "62e0d2c5ffec4c3429d0cb12"}  
<!-- GET RESOURCE -->            
URL:      http://localhost:6002/api/tutorials METHOD: GET
BODY:     NULL
RESPONSE: [{ "title": "Test","description": "Test description","published": true,
             "createdAt": "2022-07-26T08:02:17.634Z","updatedAt": "2022-07-26T08:02:17.634Z",
             "id": "62df9f895f19da9a1f603ada"}]
<!-- GET RESOURCE BY ID -->             
URL:      http://localhost:6002/api/tutorials/62df9f895f19da9a1f603ada METHOD: GET
BODY:     NULL
RESPONSE: [{ "title": "Test","description": "Test description","published": true,
             "createdAt": "2022-07-26T08:02:17.634Z","updatedAt": "2022-07-26T08:02:17.634Z",
             "id": "62df9f895f19da9a1f603ada"}]
<!-- GET RESOURCE BY USING FLAG -->   
URL:      http://localhost:6002/api/tutorials/published METHOD: GET
BODY:     NULL
RESPONSE: [{ "title": "Test","description": "Test description","published": true,
             "createdAt": "2022-07-26T08:02:17.634Z","updatedAt": "2022-07-26T08:02:17.634Z",
             "id": "62df9f895f19da9a1f603ada"}]  
<!-- DELETE RESOURCE BY ID  -->                     
URL:      http://localhost:6002/api/tutorials/62df9f895f19da9a1f603ada METHOD: DELETE
BODY:     NULL
RESPONSE: { "message": "Tutorial was deleted successfully!"} 






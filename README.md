## Basic Task 
A simple CRUD application with a relational database back‑end that implements Blockstarter 1.0

 APIs

- Projects
  -`POST /projects` creates a new Project
  - `GET /projects/:id` retrieves one Project
  - `GET /projects` retrieves all Projects
  - `PUT /projects` updates one Project
  - `DELETE /projects` deletes one Project


- Backers
  - `PUT /backers/addbalance` to add an amount X to the Backer's account balance


## Development Setup

1. Install Docker on your laptop (recommended: install the Docker Toolbox which includes useful tools like Docker Compose and Kitematic)
    - https://docs.docker.com/toolbox/overview/

- Optional but helpful: set up bash aliases
    - https://kartar.net/2014/03/useful-docker-bash-functions-and-aliases/
    - https://github.com/tcnksm/docker-alias/blob/master/zshrc

## Getting Started

- Open your command line in the _exercise3_ directory.
- Run the command `docker-compose up --build`

Alternatively, you can bring the services up in the background using detached mode with `up`, see what's going on with `ps` and remove the containers entirely (including data volumes used by mongodb) via `down --volumes`:
- `docker-compose up -d --build`
- `docker-compose ps`
- `docker-compose down --volumes`

You can then open Kitematic (refresh) and view your containers and the logs in a nice UI.

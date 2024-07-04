# Task Management Application

A simple task management application built with Vue.js 3 (Composition API) and NestJS. This application allows users to manage their tasks efficiently.

## 🔗 Link
Live Mode ----> 
[![https://taskfrontend-ivof.onrender.com/]](https://taskfrontend-ivof.onrender.com/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Best Practices](#best-practices)
## Features

- Authentication system using JWT
- Add, edit, delete, and list tasks
- Each task has a title, description, and status (e.g., "TO_DO," "IN_PROGRESS," "DONE")
- Dockerized frontend and backend applications

## Tech Stack

- **Frontend:** Vue.js 3, Tailwind CSS
- **Backend:** NestJS, PostgreSQL
- **Containerization:** Docker

## Prerequisites

- Docker and Docker Compose installed on your machine

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/zakarya3/taskManagerTest.git

2. **Ensure you have Docker and Docker Compose installed**
3. **Create a .env file in the backend directory with the following content:** (Optional)
   ```ssh
   POSTGRES_HOST=db_dev
   POSTGRES_PORT=5432
   POSTGRES_USER=taskManager
   POSTGRES_PASSWORD=taskManager2024
   POSTGRES_DB=db_taskmanager

## Running the Application
1. **Navigate to the root directory of the project. **
2. **Build and start the Docker containers: **
   ```ssh
   docker-compose up -d --build

3. Access the application:
- http://localhost:8080 
- http://localhost:3000/api

## API Documentation Endpoints 


- Get All Tasks URL: /api/tasks. GET Description: Retrieve a list of all tasks. 
- Get a Task by ID URL: /api/tasks/:id. GET Description: Retrieve a single task by its ID. 
- Create a Task URL: /api/tasks Method: POST Description: Create a new task. Request Body: json Copy code { "title": "Task title", "description": "Task description", "status": "TO_DO" } 
- Update a Task URL: /api/tasks/:id Method: PUT Description: Update an existing task. Request Body: json Copy code { "title": "Updated title", "description": "Updated description", "status": "IN_PROGRESS" } 
- Delete a Task URL: /api/tasks/:id Method: DELETE Description: Delete a task by its ID. 



## API Reference

#### Get all tasks

```http
  GET /api/tasks
```
#### Get task

```http
  GET /api/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of task to fetch |

#### Post task

```http
  POST /api/task
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. title of task |
 `description`      | `string` | **Required**. description of task |
  `status`      | `enum` | **Required**. status of task |


  #### Update task

```http
  PUT /api/task/${id}
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Optional**. title of task |
 `description`      | `string` | **Optional**. description of task |
  `status`      | `enum` | **Optional**. status of task |


#### Delete task

```http
  DELETE /api/task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of task to delete |


<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>Task Management App</h1>
<h3>I am less see myself, I am more the others rely on me.</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
" alt="Redux" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
" alt="React Router" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
" alt="Typescript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white
" alt="Firebase" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running project](#-running-readme-ai)
- [🛣 Roadmap](#-roadmap)

---


## 📍 Overview

Simple Kanban board app like Jira.

---

## 📦 Features

- Dashboard
- Kanban Board
   - Search Task
   - Add Task (Done)
   - Edit task (Done)
   - Drag & Drop Task (Done)
   - Delete Task
   - Add Sub Task (Done)
- Settings
   - Add or Edit Column Info.
   - Add or Edit Item Attributes.
- Share board to other user

---


## 📂 Repository Structure

```sh
└── TaskManagementApp/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── pages/
    │   ├── services/
    │   ├── store/
    │   ├── utils/
```

---

<details closed><summary>components</summary>

| File                       | Summary       |
| ---                        | ---           |
| AddTaskModal | Modal Dialog for Add and Edit Task |
| FormDateSelect       | Reusable DateSelect Component |
| FormExtra         | Footer part of Auth Page |
| FormHeader   | Header part of Auth Page |
| FormImageUploader      | Image Uploader Component |
| FormInput      | Reusable Form Input |
| FormSelect      | Reusable Select Component |
| FormTextArea      | Reusable TextArea Component |
| Header      | Header Component |
| ProtectedRoute      | To make our route  |
| Sidebar      | Sidebar Component  |

</details>

<details closed><summary>hooks</summary>

| File                       | Summary       |
| ---                        | ---           |
| hooks         | Custom Hooks for getting data from store |

</details>

<details closed><summary>pages</summary>

| File                      | Summary       |
| ---                       | ---           |
| Home    | Kanban Board |
| SignIn   | Sign In Page |
| SignUp | Sign Up Page |

</details>

<details closed><summary>services</summary>

| File                          | Summary       |
| ---                           | ---           |
| authService.ts | Api Service for Authentication |
| columnService.ts | Api Service for managing column data |
| fileUploadService.ts | Api Service for file upload |
| taskService | Api Service for managing tasks |
| urgencyService.ts | Api Service for urgency data |

</details>

<details closed><summary>store</summary>

| File                          | Summary       |
| ---                           | ---           |
| user | Storing user data(It is Persisted one) |
| columns | Storing column data |
| types | Storing type data |
| tasks | Storing tasks data |
| urgency | Storing urgency data |

</details>

<details closed><summary>types</summary>

| File                                 | Summary       |
| ---                                  | ---           |
| index.ts            | Types through the entire app |

</details>

<details closed><summary>utils</summary>

| File                       | Summary       |
| ---                        | ---           |
| constant.ts | Contant value in the app |
| firebase.ts | Firebase config |
| tasks.ts | Utility functions for handling task |
| yupSchema.ts | Schemas for Formik & Yup validation |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

React Router, Tailwind CSS, Redux-Toolkit, Redux Persist, Firebase...

### 🔧 Installation

1. Clone the readme-ai repository:
```sh
git clone https://github.com/BranchDev110/WR-Kanban.git
```

2. Change to the project directory:
```sh
cd TaskManagementApp
```

3. Install the dependencies:
```sh
npm install or yarn
```

### 🤖 Running the project

```sh
npm start or yarn start
```

---


## 🛣 Project Roadmap

> - [X] `ℹ️  Task 1: Configured the project along with dependencies`
> - [X] `ℹ️  Task 2: Created Sign In & Sign Up UI`
> - [X] `ℹ️  Task 3: Created Firebase Project and integrated with Front End`
> - [X] `ℹ️  Task 4: Completed Basic sign in and sign up`
> - [X] `ℹ️  Task 5: Completed Kanban Board UI with mockup data and React-Beautiful-Dnd for drag & drop.`
> - [X] `ℹ️  Task 6: Created Modal dialog for Add and Edit.`
> - [X] `ℹ️  Task 7: Integrated Firebase cloud firestore to front end instead of mockup data`
> - [X] `ℹ️  Task 8: Completed add and edit task with firebase.`
> - [X] `ℹ️  Task 9: Completed Drag and drop with firebase.`
> - [X] `ℹ️  Task 10: Created Header and Sidebar`
> - [X] `ℹ️  Task 11: Implemented dark theme.`
> - [ ] `ℹ️  Task 12: Fix some UI bugs.`

---

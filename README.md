# CSV Uploader

A Coding Ninjas Skill Test Assignment

## Table of Contents
1. [About](#about)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
5. [Directory Structure](#directory-structure)
6. [How to Run](#how-to-run)
7. [Contribution](#contribution)

## About

CSV Uploader is a web application that allows users to upload CSV files and perform various operations on the data within those files. It's built using HTML, CSS, JavaScript, and Node.js.

## Features

- **CSV Upload**: Users can upload CSV files from their local system, with the delimiter assumed to be a comma (',').

- **List of Uploaded CSVs**: The application maintains a list of all uploaded CSV files.

- **Data Display**: When a user selects a file, the data (including column headers) is displayed in a table format on the frontend.

- **Search Functionality**: A search box allows users to filter data rows based on specific criteria. It dynamically displays matching rows in the table. An empty search box shows all data.

- **Dynamic Headers**: The application handles CSV files with different column headers by dynamically generating table headers.

- **Sorting**: Users can sort data in ascending and descending order for each column on the frontend.

- **File Validation**: Both frontend and server-side validation ensure that only CSV files can be uploaded.

- **Pagination**: Data displayed in the table is paginated, with a maximum of 100 records per page.

## Tech Stack

The project is built using the following technologies:

- HTML
- CSS
- JavaScript
- Node.js
- MongoDB (notable for backend storage)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Install Node.js](https://nodejs.org/) if you haven't already.

- MongoDB: You need a running MongoDB instance. You can install it locally or use a cloud-based solution like MongoDB Atlas.

### Installation

Follow these steps to get the project up and running on your local machine:

1. Clone this project to your local machine.

   ```bash
   git clone https://github.com/yallalaraja/csv-upload.git
   ```

2. Change the directory to the project folder:

   ```bash
   cd csv-upload
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Directory Structure

The project follows the MVC (Model-View-Controller) pattern and has the following directory structure:

```
csv-upload
    |-----assets
    |       |--- css
    |       |     |-- fileviewer.css
    |       |     |-- header.css
    |       |     |-- home.css
    |       |--- JS
    |             |-- file_viewer.js
    |------ config
    |         └--- mongoose.js
    |------ controllers
    |         └--- file_controller.js
    |         |--- home_controller.js
    |------ models
    |         └--- csv.js
    |------ routes
    |         └--- index.js
    |------ uploads
    |         |--- files
    |------ views
    |         |--- file_viewer.ejs
    |         |--- home.ejs
    |         |--- layout.ejs
    |------ .gitignore
    |------ index.js
    |------ package.json
    |------ package-lock.json
    └------ README.md
```

## How to Run

To start the server, use the following command:

```bash
npm start
```

This will launch the application locally. Access it by opening your web browser and navigating to `http://localhost:3000`.

## Contribution

If you have suggestions or improvements, please fork the repository, make your changes, and submit a pull request. We appreciate your contributions!
```

This revised README now includes the directory structure of your project, providing a clear picture of the project's organization.

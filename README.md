# Learn vanilla JS 🚀

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

This repository is a NodeJS application template with auto reload implemented (using Nodemon).
The objective of this repository is to be forked by all the people who will perform the exercise on their Github spaces.

## Prerequisites

- NodeJS
- NPM

## Installation

First, fork this project, then clone your project, once this is done install the project dependencies.

```bash
$ npm i
```

## Start the server

```bash
$ npm run start
```

The server runs by default on port [3000](http://localhost:3000)

# Exercise objective

The goal is to learn the basics of web development with HTML / CSS / JS. In this exercise, you will be asked to use all three languages.

Once the server is started, you just have to modify the following files:

- `views/index.html`
- `public/js/index.js`
- `public/styles/index.css`

You don't need to edit any other files, except in the event that you create more, it's up to you to see which is best! 💁‍♂️

<p style = "color: red; font-weight: bold"> ⚠️ IT IS STRICTLY FORBIDDEN TO USE A CSS FRAMEWORK EXTERNAL TO THE PROJECT (EX: Bootstrap, JQuery, etc ...) ⚠️ </p>

## 1 - Preparation of the HTML page

### 1.1 - Header

In the header you are asked to display a horizontal `navbar` with a logo on the left (The click must redirect to this page), a navigation with the title ** Home ** and ** About ** center in relation on the screen.

### 1.2 - Body

An empty 5-column table:

| Avatar | Name | First name | Email | Actions |
| :----: | :--: | ---------- | ----- | ------- |

### 1.3 - Footer

A footer with a link in the center that on click opens a new tab to your Github page.

## 2 - Using the JS

### 2.1 - Adding data to the table

In the `public/js/index.js` file you will find a `getRandomUsers()` method which is asynchronous. It returns you a list of 100 fake users.

The objective here, as you will have understood, is to fill the table with the data collected by the `getRandomUsers()` method.

For the moment the column **Actions** is empty for each row.

### 2.2 - Delete a user

In the **Actions** column, add a `Delete` button for each row of the table.

This button allows the deletion of a user dynamically.

### 2.3 - Reloading data

Above the table (where you want it), add a button with an icon like this: 🔄.
The event clicks on this button refreshes the entire table.

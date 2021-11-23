# Venting Forum
#### By Quentin Bartholomew,  Jerathel Jean,  and Ras Au-t Amam

## Project  Summary

This project will be a forum with a theme based around venting, whether that be about programming or just life. The page will have a social media style display to give users a familiar feel.

<a href="https://compassionate-ritchie-5e01af.netlify.app/">Live link</a>

## Components

* Header

* Main

## Pages

* Index

* Show

## Route Table

| Route | Component | Description |
|-----|--------|--------|
| / | <Main /> | Homepage
| /forum | <Index /> | Displays all messages posted within the forum
| /forum/:id | <Show /> | Displays a specific message

## User Stories

A user should be greeted with a welcome message on the homepage

A user should be able to view all of the messages currently posted on the forum

A user should be able to post a new message to the forum

A user should be able to edit a message on the forum

A user should be able to delete a message on the forum

## Challenges

Our backend was acting up during the last day prior to presentations. Beyond that most things went very well, we had an issue figuring out how to have links on our page actually redirect to an external site.

## List of Technologies

* CSS

* JS/JSX/JQuery

* Express

* React

* Mongoose

## Component Tree

* App
    - Header
    - Main
        - Index
        - Show
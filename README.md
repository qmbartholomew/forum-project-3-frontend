# Venting Forum
#### By Quentin Bartholomew, Jarathel Jean, and Ras Au-t Amam

## Project Summary

This project will be a forum with a theme based around venting, whether that be about programming or just life. The page will have a social media style display to give users a familiar feel.

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

// Potential user stories beyond MVP //

A user should be able to log in

A user should only be able to delete their own messages

A user should only be able to edit their own messages

A user should be able to 'upvote' a message posted on the forum

A user should see the 'most popular' message - the message with the most upvotes

## Challenges


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
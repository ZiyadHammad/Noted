# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**NOTED** is a beautiful intuitive Planner App where users will be able to create accounts and have full CRUD functionality with their to-do lists and events._


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **NOTED** MVP is to build out three tables, one for users, one for categories and one for the to do's itself. Build out user sign in/sign up and sign out function, have full CRUD for the To-do's and Events. And also include styling and three media queries._

<br>

### Goals

- _Complete backend in one day_
- _Have full CRUD done in one day on front-end._
- _Focus on styling and making site responsive_
- _Add some cool animations._


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end user interaction and state management through manipulation of a virtual DOM._ |
|   React Router   | _Site navigation and routing for single page applications_ |
|       Rails      | _Backend model-view-controller framework for Ruby_ |
|     Axios        | _Promise-based HTTP client for the browser and node.js_ |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

- Desktop Landing

![FlowLand](https://user-images.githubusercontent.com/86253039/130718393-30f544bb-9512-49ea-8d65-5287f19cd691.png)

- Desktop User Profile

![UserPro](https://user-images.githubusercontent.com/86253039/130728485-6a7506a5-ae8a-4637-befa-31c571051936.png)


- To do and Event Page
- ![toevent](https://user-images.githubusercontent.com/86253039/130812310-907b2487-b3d9-44f1-a378-988ad503bb19.png)




#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree
> 
![ComponentTree](https://user-images.githubusercontent.com/86253039/130815317-915bb16c-0fba-4869-9f94-abeadec2aff2.png)


#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ App.jsx
|__ index.js
|__ assets/
|__ components/
      |__ Layout/
          |__ Layout.jsx
          |__ Layout.css
      |__ Nav/
          |__ Nav.jsx
          |__ Nav.css
      |__ Footer/
          |__ Footer.jsx
          |__ Footer.css
|__ screens/
      |__ Home/
          |__ Home.jsx
          |__ Home.css
      |__ UserPro/
          |__ UserPro.jsx
          |__ UserPro.css
      |__ AllTodos/
          |__ AllTodos.jsx
          |__ Alltodos.css
      |__ TodoDetail/
          |__ TodoDetail.jsx
          |__ TodoDetail.css
      |__ AllEvents/
          |__ AllEvents.jsx
          |__ AllEvents.css\
      |__ EventDetail/
          |__ EventDetail.jsx
          |__ EventDetail.css
      |__ SignIn/
          |__ SignIn.jsx
          |__ SignIn.css
      |__ SignUp/
          |__ SignUp.jsx
          |__ SignUp.css
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ articles.js
      |__ categories.js
|__ utilities/
      |__ utilities.js


```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Building Backend    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Boiler Plate for Frontend |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Building Configuration |          |     6 hrs      |     3 hrs     |     TBD     |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.


![P4Draw](https://user-images.githubusercontent.com/86253039/130725809-135746c0-71ed-4b36-8d1c-687155386725.png)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

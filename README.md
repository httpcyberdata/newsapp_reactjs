# News App ReactJS

Tutorial URL: https://www.youtube.com/watch?v=STs8FKWuBz4
Tutorial description: Create News App using React Js | News App with Different News Categories

___________

### Software versions
	NPM version: 8.19.2
	Node version: 16.17.0
    React-Router-Dom: 5.3.4
    React version: 18.2.0

//   "react-router-dom": "5.3.4",
## How to run 
1. Clone / Download
2. yarn install
3. npm run start


## Problems in the project:
1. Different react-router-dom versions. The route wouldn't load the Homepage component with the parent elements as <Router> or <Routes> so i downgraded to version 5 to where <Switch> as the parent component was available and it worked!
2. How far a typo goes! If a 3000 lines of code dummy data has a typo, like categeory than category you have to use categeory!

## How to use

### Photos of project:
![](/public//images//newsappreactjs_image.png)
![](/public//images/newsapp_gif1.png)
![](/public/images//popularpost_section.gif)
![](/public/images/newsapp_gif.gif)


## Apps used:
	- Visual Studio Code
    - Google Chrome Developer Tools
    -
## Coding styles I used:
- Imports
DO:
`import { Component } from './Component';`
DONT 
`import {Component} from './Component';`

## What I learned
Dummy Data ~ I learned what dummy data is. I always thought data was a smart thing used in innovative technologies but for a junior developer getting started, some dummy data that's not actually real helps juniors get prepared for mass real-world data. I can use the dummy data as a argument to iterate over in a function
I learned much about the react-slick library from creating many components and importing the Slider component and defining and configuring the settings over and over again as in customizng how many slides to show, the speed of the carousel,etc and not reading the entire react-slick documentation at all. I also learned how a image carousel makes the web such a pleasure to use.

I learned the two ways of returning html in React components. There's many ways of doing one thing.
Use a return statement or use ()
``{SomeArray.map((item) => { 
    return (
        <section>
        </section>
    )
})``

``{SomeArray.map((item) => (
    <section>
    </section>
))}``
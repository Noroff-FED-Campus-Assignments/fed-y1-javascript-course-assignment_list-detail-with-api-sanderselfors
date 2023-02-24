[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10190804&assignment_repo_type=AssignmentRepo)

# FED Javascript 1 - Course Assignment

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Design](_LINK_TO_FIGMA_)
- [Production deploy](_LINK_TO_WEBSITE_)
- [Deployment CI](_LINK_TO_NETLIFY_VERCEL_DASHBOARD_)
- [API Docs](https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2)

## Report

For this Course Assignment I have written a code that fetches data from an API and displays it on a webpage. The data is a list of characters from the popular TV show "Game of Thrones».

My index-page initializes two variables, "characterResults" and "searchInput", and sets up an event listener for the search bar. When the user types into the search bar, the "filterCharacters" function is called and filters the character data based on the user's input.
The "getCharacters" function fetches data from the API and displays it on the page. The data is stored in an array called "characterslist" and displayed using a forEach loop to create a character card for each character. Each card contains the character's image, name, title, and family.

My details-page displays details about a specific character when the user clicks on a character card. The code extracts the character's ID from the URL using the "URLSearchParams" function, fetches the character's data from the API using the ID, and displays it on the page.

My third page is my contact-page. It initializes variables for each input field and sets up event listeners for validation. When the user submits the form, it prevents the default action and gets the values from the name, subject, email, and address fields. The "validation" function checks if the input field meets specific requirements using regular expressions. If the input is valid, the "submitContactForm" function is called, which sends the form data to a server.

Overall, this assignment was very challenging, but I have learned a lot, and feel much more confident in Javascript. I look forward to learning more about Javascript.

## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://127.0.0.1:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [ ] End-user can see a list of items of the home page.
- [ ] When the End-user clicks on an item in the list they are navigated to the details page.
- [ ] End-user can view atleast three properties of an item in a list.
- [ ] End-user can view atleast three properties of an item on the details page.
- [ ] A error message is present when the End-user encounters a error while viewing the index page.
- [ ] A error message is present when the End-user encounters a error while viewing the details page.
- [ ] End-user can view the title of the item on the browser tab for a details page.
- [ ] End-user can view validation message when they input an incorrect name.
- [ ] End-user can view validation message when they input an incorrect subject that is less than 10 characters.
- [ ] End-user can view validation message when they input an incorrect Email address.
- [ ] End-user can view a validation message when they input an incorrect physical address that is less than 25 characters long.

## End-user success criteria (Optional - 100%)

- [ ] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [ ] End-user can sort list by;
- [ ] Name ascending order
- [ ] Name descending order
- [ ] Confirmation modal after custumer submits a successful contact form.
- [ ] End-user can auto-fill the contact form using the browser auto-fill.
- [ ] End-user can auto-fill the contact form using a password manager.
- [ ] Validation still works when End-user uses copy and pastes into input fields.
- [ ] End-user can see a postive feedback when they input correct info and pass validation.
- [ ] End-user can experience pleasant animations.
  - [ ] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [ ] End-user can view a custom favicon.
- [ ] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [ ] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [ ] Is user-friendly
  - [ ] Effective use of the pillars of design
    - [ ] Typography
    - [ ] COlour
    - [ ] Composition
    - [ ] Art Direction
    - [ ] Motion
  - [ ] Adhered to principles of design
    - [ ] Contrast
    - [ ] Balance and alignment
    - [ ] Emphasis
    - [ ] Proportion
    - [ ] Hiearchy
    - [ ] Repetition
    - [ ] Ryhthem
    - [ ] Pattern
    - [ ] Negative space
    - [ ] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [ ] All pages have a meta description.
- [ ] All pages have a valid title.
- [ ] All pages import the correct css files.
- [ ] All pages import the correct JS file.
- [ ] Details page URL includes a query param.
- [ ] My website makes a GET request to an API to get a list of results.
- [ ] My website makes a GET request to an API to get details of one result.
- [ ] Input fields have the following attributes;
- [ ] All images have an alt tag;
  - [ ] A name,
  - [ ] A placeholder,
  - [ ] A aria-describedby,
  - [ ] Required
- [ ] I have not copied Javascript code.
- [ ] I have not used a Javascript library.
- [ ] Removed all unused files.
- [ ] Named all images properly.
- [ ] Committed all my code to github.
- [ ] My repo is publically viewable.
- [ ] I've submitted/ written a report.
- [ ] I've removed all todo notes in code.
- [ ] I've removed all console logs in code.
- [ ] Code is formatted correctly.
- [ ] There are no red underlines in VSCode.
- [ ] There are no error messages in the terminal when I run the project.
- [ ] My code is indented correctly.
- [ ] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Sander Selfors (@sanderselfors)
- Monde Sineke (@S3ak)

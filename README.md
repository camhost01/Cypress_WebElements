# Cypress 
## Practice with web elements

This repository was build for manual testers who are interested in starting to study front-end automation. Is based on three different free websites designed to help manual testers in their practices.

- [rahulshetty academy](https://rahulshettyacademy.com/AutomationPractice/)
- [swags_labs](https://www.saucedemo.com/)
- [Iframe Automation demo site](https://demo.automationtesting.in/Frames.html) Single and Nested iFrame

## Requirements

- Git latest version / [Git](https://git-scm.com/download/mac)
- Visual Studio Code / [VSC](https://code.visualstudio.com/)
- Cypress  / npm install cypress --save-dev

## Installation

Create a local folder and open it from Visual Studio code in the terminal. Type:
```sh
git init
```
clone the project from repository 

```sh
git clone https://github.com/camhost01/Cypress_Practice_Elements.git
```
### Install cypress dependencies

```sh
npm install cypress --save-dev
```
Extract all files contained in Cypress_Practice_Elements folder
- .gitignore > extract 
- cypress > extract
- cypress_config.js > extract
- package-lock.json > extract and replace
- package.js > extract and replace 

Delete the folder Cypress_Practice_Elements and the folder structure looks like

<img width="345" alt="image" src="https://github.com/camhost01/Cypress_Practice_Elements/assets/39304271/7e5ba67d-60cb-409c-bf6a-f31581f7f558">

### For iframe scenario in rahulshetty academy
```sh
npm install -D cypress-iframe
```
### Open Cypress with custom comamd from package.js
```sh
npm run cy:op
```
<img width="1176" alt="image" src="https://github.com/camhost01/Cypress_Practice_Elements/assets/39304271/a43eaa25-c65a-4532-8466-4056bc673973">

### Select your browser and test scenario
<img width="1073" alt="image" src="https://github.com/camhost01/Cypress_Practice_Elements/assets/39304271/20537b65-0d9f-4317-ad01-8bf43fb8217f">

<img width="1222" alt="image" src="https://github.com/camhost01/Cypress_Practice_Elements/assets/39304271/a1bf4487-a996-4a34-bbcc-1b1719e0cb9d">

### Headless Mode
In the package.js you can check the script section and select in wich browser you want to execute the scenarios
<img width="660" alt="image" src="https://github.com/camhost01/Cypress_Practice_Elements/assets/39304271/032ffea6-3de0-46ea-8d79-a55010739964">

If you want to execute in Chrome browser type in your VSC terminal
```sh
npm run test_chrome
```

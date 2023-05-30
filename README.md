# Cypress 
## Practice with web elements

This repository was build for manual testers who are interested in starting to study front-end automation. Is based on three different free websites designed to help manual testers in their practices.

- [rahulshetty academy](https://rahulshettyacademy.com/AutomationPractice/)
- [swags_labs](https://www.saucedemo.com/)
- [Iframe Automation demo site](https://demo.automationtesting.in/Frames.html) Single and Nested iFrame
- [applitools demo](https://demo.applitools.com/index_v2.html)

## Requirements

- Git latest version / [Git](https://git-scm.com/download/mac)
- Visual Studio Code / [VSC](https://code.visualstudio.com/)
- Cypress  / npm install cypress --save-dev
- cypress visual validations / npm install cypress-image-snapshot

## Installation

Create a local folder and open it from Visual Studio code in the terminal. Type:
```sh
git init
```
clone the project from repository 
```sh
git clone https://github.com/camhost01/Cypress_Practice_Elements.git
```
move to the folder
```sh
cd Cypress_WebElements
```
### Install cypress dependencies
```sh
npm install cypress --save-dev
```
### For iframe scenario in rahulshetty academy
```sh
npm install -D cypress-iframe
```
### For visual validation scenario
```sh
npm install cypress-image-snapshot
```
### Open Cypress with custom comamd from package.js
```sh
npm run cy:op
```
<img width="1179" alt="image" src="https://github.com/camhost01/Cypress_WebElements/assets/39304271/793b6b9d-d218-4b71-bb18-d2eefd167f78">


### Select your browser and test scenario
<img width="1160" alt="image" src="https://github.com/camhost01/Cypress_WebElements/assets/39304271/9f47f7fe-dc3d-44d5-97dd-f78f4161a287">
<img width="1766" alt="image" src="https://github.com/camhost01/Cypress_WebElements/assets/39304271/c85f62bc-30ea-4c1d-bd82-82bc4fd71b09">

### Headless Mode
In the package.js you can check the script section and select in wich browser you want to execute the scenarios
<img width="778" alt="image" src="https://github.com/camhost01/Cypress_WebElements/assets/39304271/ffa1e6e7-e50c-4538-a350-558ce2e1671a">

If you want to execute in Chrome browser type in your VSC terminal
```sh
npm run test_chrome
```
### Visual validation
The scenarios was build for take a first image and then hide a element in website and take new screenshot, that scenario is design for fail in each execution

<img width="1197" alt="image" src="https://github.com/camhost01/Cypress_WebElements/assets/39304271/e67ea8a9-c76e-4dea-94b7-3e867b9e3a58">

The difference is displayed in snapshots folder

<img width="346" alt="image" src="https://github.com/camhost01/Cypress_WebElements/assets/39304271/250c6389-4e7f-45ab-b3f7-dd50dd75f4f6">


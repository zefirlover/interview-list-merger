# interview-list-merger

Smol silli [Node.js](https://nodejs.org/en) script that takes lists of interviewers and respondents and merges that into one Excel table

It was made to take two lists, keeping in mind that they might not be equal and some names will be recorded in both lists. So, the script tries to distribute the *respondents* equally among the *interviewers* and prevent the same names in the same row in different columns.

## Installing

These instructions will help you download the project onto your local machine.

1. Download and install a [**Node.js**](https://nodejs.org/en/) environment (version 20.9.0 or higher).

2. Download the repository to your local machine using the **Command Prompt** command:

```
git clone https://github.com/zefirlover/interview-list-merger.git
```

> [!NOTE]
> **PLEASE BE AWARE** that the project will be downloaded into the folder where the **Command Prompt** was opened. Be sure to start the **Command Prompt** from the folder where you want to place the repository, or navigate there using the [`cd` command](https://learn.microsoft.com/uk-ua/windows-server/administration/windows-commands/cd).

3. Navigate to the project directory and open it using **Visual Studio Code** (or any other desktop code editor capable of working with **Javascript**).

4. Open the terminal (for VSCode, use the **Ctrl + Shift + `** hotkeys or select *Terminal > New Terminal from the navigation menu*). After that, to install all the dependencies, run:

```
npm i
```

> [!NOTE]
> You can run these commands using the **Command Prompt** opened in the project folder.

## Running the script

> [!NOTE]
> Before running the script make sure you have `interviewers.json` and `respondents.json`, both written in the format:
> ```[json]
> [
>    "Name1 Surname1",
>    "Name2 Surname2",
>    "Name3 Surname3"
> ]
> ```

To run the script use the next command:

```
node lists-merger.js
```

## Build with

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - lightweight interpreted programming language with first-class functions.
- [Node.js](https://nodejs.org/en) - Javascript runtime environment for running a JS code locally or on the server.
- [ExcelJS](https://www.npmjs.com/package/exceljs/v/1.8.0) - a framework that converts JSON lists into an Excel table, and can do more operations with Excel files.
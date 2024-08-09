import ExcelJS from 'exceljs';
import { Functions } from './functions.js';
import respondents from './input-data/respondents.json' assert { type: 'json' };
import interviewers from './input-data/interviewers.json' assert { type: 'json' };

const functions = new Functions();

let updInterviewers = functions.stretchLists(respondents, interviewers);
const mergedData = functions.mergeLists(updInterviewers, respondents);

const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Data');

const headers = Object.keys(mergedData[0]);
sheet.addRow(headers);

mergedData.forEach((item) => {
    const row = [];
    headers.forEach((header) => {
        row.push(item[header]);
    });
    sheet.addRow(row);
});

sheet.columns.forEach((column) => {
    let maxLength = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
        const cellLength = cell.value ? cell.value.toString().length : 10;
        maxLength = Math.max(maxLength, cellLength);
    });
    column.width = maxLength < 10 ? 10 : maxLength;
});

functions.mergeCells(sheet, respondents)

workbook.xlsx.writeFile('data.xlsx')
    .then(() => {
        console.log('Excel file created: data.xlsx');
    })
    .catch((error) => {
        console.error('Error creating Excel file:', error);
    });
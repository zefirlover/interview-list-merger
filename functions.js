export class Functions {
  mergeCells(worksheet, valuesList) {
    const cellsList = [];
    for (let row = 2; row < valuesList.length + 3; row++) {
      cellsList.push({
        value: worksheet.getCell("A" + row).value,
        position: "A" + row,
      });
    }

    let cellData = cellsList[0];
    let positionList = [];

    cellsList.forEach(({ value, position }) => {
      if (cellData.value === value) {
        positionList.push(position);
      } else {
        worksheet.mergeCells(
          positionList[0],
          positionList[positionList.length - 1]
        );
        positionList = [position];
        cellData = { value, position };
      }
    });
  }

  stretchLists(longerList, shorterList) {
    const maxLength = Math.max(longerList.length, shorterList.length);
    const stretchedShorterList = [];

    for (let i = 0; i < maxLength; i++) {
      const shorterIndex = i % shorterList.length;
      stretchedShorterList.push(shorterList[shorterIndex]);
    }

    shorterList = stretchedShorterList;
    return shorterList;
  }

  mergeLists(interviewers, respondents) {
    let mergedArray = [];

    if (interviewers.length !== respondents.length) {
      throw console.error(
        "interviewers.length !== respondents.length: " +
          interviewers.length +
          " to " +
          respondents.length
      );
    }

    for (let i = 0; i < interviewers.length; i++) {
      let interviewer = interviewers[i];
      let respondent = respondents[i];
      
      if (interviewer === respondent) {
        respondents.push(respondents.splice(i, 1)[0]);
        respondent = respondents[i];
      }
      mergedArray.push({ interviewer: interviewer, respondent: respondent });
    }

    mergedArray.sort((a, b) => {
      const nameA = a.interviewer.toUpperCase();
      const nameB = b.interviewer.toUpperCase();
      return nameA.localeCompare(nameB);
    });

    return mergedArray;
  }
}

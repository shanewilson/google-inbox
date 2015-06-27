/* @flow */

import React from "react";
import moment from "moment";

import DateGroupContainer from "../../components/DateGroupContainer";
import ScrollListContainer from "../../components/ScrollListContainer";

class Timeline extends React.Component {
  render(): React.Element {
    var items = [
      {
        type: "biospeciman",
        transactionId: 1,
        submissionId: 1,
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "biospeciman",
        transactionId: 2,
        submissionId: 1,
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "biospeciman",
        transactionId: 3,
        submissionId: 2,
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "biospeciman",
        transactionId: 4,
        submissionId: 2,
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "file",
        transactionId: 5,
        submissionId: 3,
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "file",
        transactionId: 6,
        submissionId: 3,
        message: "Blah blah",
        date: moment().format()
      }
    ];

    return (
      <div>
        <DateGroupContainer title="Today">
          <ScrollListContainer items={ items } />
        </DateGroupContainer>
        <DateGroupContainer title="Yesterday">
          <ScrollListContainer items={ items } />
        </DateGroupContainer>
        <DateGroupContainer title="This Month">
          <ScrollListContainer items={ items } />
        </DateGroupContainer>
      </div>
    );
  }
}

export default Timeline;

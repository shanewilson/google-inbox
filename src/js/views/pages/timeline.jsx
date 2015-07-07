/* @flow */

import React from "react";
import moment from "moment";
import Raven from "raven-js";

import DateGroupContainer from "../../components/DateGroupContainer";
import ScrollListContainer from "../../containers/ScrollListContainer";

class Timeline extends React.Component {
  render(): React.Element {
    var items = [
      {
        type: "biospeciman",
        transactionId: "1",
        submissionId: "1",
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "biospeciman",
        transactionId: "2",
        submissionId: "1",
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "biospeciman",
        transactionId: "3",
        submissionId: "2",
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "biospeciman",
        transactionId: "4",
        submissionId: "2",
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "file",
        transactionId: "5",
        submissionId: "3",
        message: "Blah blah",
        date: moment().format()
      }, {
        type: "file",
        transactionId: "6",
        submissionId: "3",
        message: "Blah blah",
        date: moment().format()
      }
    ];

    return (
      <DateGroupContainer title="Blah">
        <ScrollListContainer items={ items } />
      </DateGroupContainer>
    );
  }
}

export default Timeline;

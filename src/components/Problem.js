import React from 'react';
import './Problem.css';

export default class Problem extends React.Component {
  render() {
    const {
      title,
      problem,
      note,
      source,
      example1Input,
      example1Output,
      example1Answer,
      example2Input,
      example2Output,
      example2Answer,
    } = this.props;

    const answerCorrect = (exampleOutput, answer) => {
      if (exampleOutput === answer) {
        return true;
      }
      return false;
    };

    return (
      <div className="Problem">
        <p className="Problem__title">Problem: {title}</p>
        {answerCorrect(example1Output, example1Answer) &&
          answerCorrect(example2Output, example2Answer) && (
            <p className="Problem__problem-solved">Problem Solved!</p>
          )}
        <p className="Problem__problem">{problem}</p>
        {note && <p className="Problem__note">Note: {note}</p>}
        <p className="Problem__title">Example 1:</p>
        <p>Input: {example1Input.toString()}</p>
        <p>Output: {example1Output.toString()}</p>
        <p>Answer: {example1Answer.toString()}</p>
        <p>
          {answerCorrect(example1Output, example1Answer) ? (
            <p className="Problem__answer-correct">Correct!</p>
          ) : (
            <p className="Problem__answer-incorrect">Not quite!</p>
          )}
        </p>
        <p className="Problem__title">Example 2:</p>
        <p>Input: {example2Input.toString()}</p>
        <p>Output: {example2Output.toString()}</p>
        <p>Answer: {example2Answer.toString()}</p>
        <p>
          {answerCorrect(example2Output, example2Answer) ? (
            <p className="Problem__answer-correct">Correct!</p>
          ) : (
            <p className="Problem__answer-incorrect">Not quite!</p>
          )}
        </p>
        {source && (
          <a
            className="Problem__source"
            href={source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
      </div>
    );
  }
}

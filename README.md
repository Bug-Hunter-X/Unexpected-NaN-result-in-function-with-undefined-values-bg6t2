# Unexpected NaN Result with Undefined Values in JavaScript Function

This repository demonstrates a common JavaScript issue where using `undefined` values in a function leads to unexpected `NaN` results. The `foo` function aims to add two numbers but doesn't explicitly handle `undefined` values, resulting in incorrect behavior.

## Problem

The provided `foo` function handles `null` and `NaN` values gracefully. However, if an `undefined` value is passed, the addition operation results in `NaN`, which is not always the desired outcome.  A more robust function should explicitly handle `undefined` values, possibly by treating them as 0 or throwing an error.

## Solution

The solution provides a modified `foo` function that checks for `undefined` values and handles them appropriately, either by treating them as 0 or throwing an error.  The solution addresses the unexpected NaN result by providing explicit handling for `undefined` parameters.

## How to run

1. Clone the repository.
2. Open `bug.js` to see the original code with the bug.
3. Open `bugSolution.js` to see the improved code that addresses the issue.
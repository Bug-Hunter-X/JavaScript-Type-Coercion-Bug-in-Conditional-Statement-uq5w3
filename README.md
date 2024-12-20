# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in JavaScript related to type coercion within conditional statements.  The `foo` function aims to handle `null`, negative numbers, and positive numbers differently. However, it fails to explicitly handle the case where the input is `undefined`. This leads to unexpected behavior and the return of `NaN`.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description
The original code uses loose comparison (`===`) which doesn't correctly handle the `undefined` input. This results in unexpected behavior in this specific scenario, producing `NaN` instead of a more appropriate handling like throwing an error or returning a default value.

## Solution
The solution involves explicitly checking for `undefined` in the conditional statements, providing clear handling for this edge case.
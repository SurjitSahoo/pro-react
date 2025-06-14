---
sidebar_position: 1
---

# Naming Convention

## Guidelines for Choosing Names

- Names should always be descriptive. Names such as item1, item2, a, b, x, y, i, j are not recommended.
- Appending "data" or "Data" in variable name is not recommended. Every variable holds some data.
- Function names should describe the action it does e.g. sort, merge, saveUserDetails.
- If a react component requires functions as props, and if the function will be executed on some event, it's name should start with "on", just like button element has "onClick", input elements have "onChange".
  - E.g. callback function names for a form component can be onSubmit, onClose, onCancel and so on. So that the code reads like plain english. E.g. `<Form onSubmit={saveUserPreferences} />`;
  - Here `onSubmit` is the callback of the Form component, and `saveUserPreferences` is the local function.
- Length of the name should not be a problem. All the high level names for variables, components, functions will be fairly smaller. But as we go deeper and deeper into the features, the deeper level (lower level) variables, functions, components names will usually get longer and longer, Because they're more and more specific. Of course this assumption excludes the building block components such as button, modal, inputs etc.

## Casing

### camelCase

- Use **camelCase** for File names

  - components: button.tsx
  - helpers: sortingHelpers.ts
  - styles: button.css, button.styles.css (for css modules)
  - tests: button.test.ts, sortingHelpers.test.ts (".test" is required to distinguish test code from production code, so that it's not bundled with the production build)

- Use camelCase for identifiers
  - variable names
  - function names
  - constants
  - state variables

### PascalCase

- Use **PascalCase** for
  - Classes
  - React Components
  - Types
  - Interfaces
  - TypeScript Enums
  - JavaScript objects used as Enums

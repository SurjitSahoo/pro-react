# Interactive MUI React Component Example

Below is a simple interactive React component using [Material UI (MUI)](https://mui.com/).  
You can play with a live React example below, and view the full MUI code and open it in StackBlitz.

## Live Counter Example (React only)

```jsx live
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Counter Example</h3>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## MUI Button Example

> **Note:** The following code uses MUI and cannot run in the Docusaurus live editor.  
> To try it, open it in StackBlitz below.

```jsx
// This code uses MUI and can be run in StackBlitz.
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function MuiDemo() {
  const [count, setCount] = React.useState(0);

  return (
    <Stack spacing={2} alignItems='center'>
      <Typography variant='h6'>MUI Counter Example</Typography>
      <Typography>Count: {count}</Typography>
      <Button variant='contained' onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Stack>
  );
}
```

[Open this example in StackBlitz](https://stackblitz.com/edit/react-ts-6v9w2n?file=src%2FApp.tsx)

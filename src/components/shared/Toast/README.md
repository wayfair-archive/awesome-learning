
The `Toast` component is a non modal, unobtrusive window element used to display brief, auto-expiring windows of information to a user. This toast comes in 4 levels of messaging, each reflected with a different color and icon.

## Props

The following props may be passed to configure the Toast/

| name              | type                                             | description                                      | required |
| ----------------- | ------------------------------------------------ | ------------------------------------------------ | -------- |
| **type**          | `oneOf(['info', 'success', 'warning', 'error'])` | The type of toast rendered                       |  `yes`   |
| **message**       | `text`                                           | The text rendered inside the toast               |  `yes`   |

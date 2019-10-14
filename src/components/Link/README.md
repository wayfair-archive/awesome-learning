
The `Link` component is used either to display an external link or an internal Gatsby Link component.
It uses the `LastLessonProvider` to get info on the last lesson visited which it accesses from local storage.
It uses that info to go back to the last lesson visited when clicked on.

## Props

The following props may be passed to configure the Link.

| name             | type                            | description                                      | default |
| ---------------- | ------------------------------- | ------------------------------------------------ | ------- |
| **variation**  | `oneOf(['primary, 'secondary', 'tertiary', 'tertiaryAlt', 'tertiaryAltInverse', 'pill])` | Link styling variation   | `null` |
| **path**       | `String - required`                                                                      | external or internal url |        |
| **isButton**   | `Boolean`                                                                                | If true, displays the link as a button | `false` |
| **isActive**   | `Boolean`                                                                                | If true sets the link as active        | `false`  |
| **isExternal** | `Boolean`                                                                                | If true displays an html link element to link to external pages | `false`  |

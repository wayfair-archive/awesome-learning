Displays an Icon currently from our Icon library.
The `Icon` component takes in a prop `icon` which determines which icon to display.
See usage below

## USAGE

```
  <Icon
    icon={getIcon("logo")}
    cssClasses="Header-icon Header-icon--logo"
  />
```

## Props

The following props may be passed to configure the Block.

| name           | type                            | description                                      | default |
| ---------------| ------------------------------- | ------------------------------------------------ | ------- |
| **icon**       | `oneOf([twitter,github, email, logo, menu, functions, array, async, data, testing, function, hooks, leftChevron, rightChevron])` | The icon to display                         |   |
| **cssClasses** | `String`                    | List of css classes to provide extra styling | `null`  |

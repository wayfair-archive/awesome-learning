
`ClickableCard`, as the name indicates, is a card component that can be clicked. Either the `link` or the `handleCardClick` prop must be passed in. It will display child content on the card, as well as an optional icon at the top.

## Props

The following props may be passed to configure the Block.

| name                | type                            | description                                      | default |
| ------------------- | ------------------------------- | ------------------------------------------------ | ------- |
| **link**            | `String`                        | A link to follow on clicking the card            | `null`  |
| **handleCardClick** | `Function`                      | A function to run on clicking the card           | `null`  |
| **iconName**        | `string`                        | The name of an icon to show at the top           | `null`  |

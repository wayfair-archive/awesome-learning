
The `ContentSection` uses a set of optional compositional elements to help build sections that have a title, subtitle, and content.
The ContentSection contains content in a grid format where the title and subtitle are displayed on the left
and the description is displayed on the right.

## Props

The following props may be passed to configure the Block.

| name             | type                            | description                                      | default |
| ---------------- | ------------------------------- | ------------------------------------------------ | ------- |
| **title**            | `String`                    | The title of the section                         | `null`  |
| **subTitle**         | `String`                    | The sub title of the section                     | `null`  |
| **isLight**          | `Boolean`                   | If true, displays the title in a lighter format  | `false` |
| **titleAlignment**   | `oneOf(['center', 'left'])` | Specifies the alignment of the title             | `left`  |
| **contentAlignment** | `oneOf(['center', 'left'])` | Specifies the alignment of the content           | `left`  |

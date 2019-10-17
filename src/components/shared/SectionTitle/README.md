
The `SectionTitle` component introduces a subsection of content on a page. Section titles default to an H2.

## Props

The following props may be passed to configure the Block.

| name              | type                             | description                                      | default |
| ----------------- | -------------------------------- | ------------------------------------------------ | ------- |
| **headingLevel**  | `oneOf(['h2', 'h3', 'h4'])`      | The heading level                                | `h2`    |
| **children**      | `node(s) - required`             | The child components that make up the Text block |         |
| **fontSize**      | `oneOf(['body', 'large', 'xl'])` | The font size of the text                        | `body`  |
| **textTransform** | `boolean`                        | If true, transforms the text to uppercase        | `false` |
| **mb**            | `string`                         | bottom margin                                    | `0px`   |

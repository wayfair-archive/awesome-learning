
The `Text` comoponent defines the body content.
Represented by a paragraph html element.

## Props

The following props may be passed to configure the Block.

| name         | type                             | description                                                  | default |
| -------------| ---------------------            | -------------------------------------------------------------| ------- |
| **fontSize** | `oneOf(['body', 'large', 'xl'])` | The font size of the text                                    | `body`  |
| **children** | `node(s) - required`             | The child components that make up the Text block             |         |
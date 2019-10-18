
The `Page` is a compositee component that can be used to build up a page. It consists of a `title` and `children` which can be
any number of nodes that build up the content of the page.

## Props

The following props may be passed to configure the Block.

| name         | type                 | description                                            | default |
| -------------| ---------------------| ------------------------------------------------------ | ------- |
| **title**    | `String`             | The title of the section                               | `null`  |
| **children** | `node(s) - required` | The child components that make up the rest of the page |         |
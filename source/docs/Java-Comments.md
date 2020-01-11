---
id: java-comments
title: "Java: Comments"
sidebar_label: "Java: Comments"
---

## Tools for comments

While using Microsoft's [Visual Studio Code](https://code.visualstudio.com/) you should be utilizing an extension titled [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) which is offered by [Aaron Bond](https://aaron-bond.github.io/).

## Styling

<img src="/CodeStandards/img/comments.png">
![](https://github.com/cavineers/CodeStandards/raw/master/java_assets/comments.png)

`// * 4541` - Used to highlight parts of a comment.

`// $ 4541` - Used to highlight parts of a comment.

`// ? 4541` - Used to mark any questions in the code.

`// ^ 4541` - Used to mark warnings.

`// ! 4541` - Used to mark errors, broken code or deprecated code.

`// # 4541` - Used to mark a fixed comment, but still needs to stick around.

`// todo 4541` - Used to mark blocks of code for incomplete parts.

## Configuration

The following code should be added to the `settings.json` file located in the `.vscode` folder of the root project.

```json
{
    "better-comments.multilineComments": true,
    "better-comments.tags": [
        {
            "tag": "!",
            "color": "#FF2D00",
            "strikethrough": false,
            "backgroundColor": "transparent"
        },
        {
            "tag": "?",
            "color": "#3498DB",
            "strikethrough": false,
            "backgroundColor": "transparent"
        },
        {
            "tag": "#",
            "color": "#474747",
            "strikethrough": true,
            "backgroundColor": "transparent"
        },
        {
            "tag": "todo",
            "color": "#FF8C00",
            "strikethrough": false,
            "backgroundColor": "transparent"
        },
        {
            "tag": "*",
            "color": "#98C379",
            "strikethrough": false,
            "backgroundColor": "transparent"
        },
        {
            "tag": "$",
            "color": "#558B54",
            "strikethrough": false,
            "backgroundColor": "transparent"
        },
        {
            "tag": "^",
            "color": "#EDE054",
            "strikethrough": false,
            "backgroundColor": "transparent"
        }
    ]
}
```

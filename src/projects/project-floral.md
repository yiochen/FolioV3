`Floral` is a small artistic expression using [Paper.js](http://paperjs.org/). I tried to dynamically generate some kind of floral patterns, such as the one below.

![flora](http://res.cloudinary.com/yiou-me/image/upload/v1487981737/front-end/floral-example.png)

The drawing part is easy, [Paper.js](http://paperjs.org/) makes it very simple to manipulate HTML Canvas. My plan was the following:
1. Starting from center of the canvas, create a root for the branch
2. Every frame, draw a small path.
3. Alter the direction of the path a little bit every frame so that the resulting shape is curved.
4. At some point, create a new branch from the current branch.
5. Stop when the branch is curving too much.


The difficult part is the math. In order to generate smooth shapes, I need to control the variation for path direction. I ended up using a very simple approach by giving the branch a constantly reducing angular force.

The force is always perpendicular to the path. For example, initially, the path is moving upwards, and the force is pointing to the right, it will gradually bend the path counter clockwise, until the force is reduced to negative, then it start bending the path clockwise. This results in a potentially nice "S" shape.

Because the algorithm is so simple. A lot of the time it doesn't result in a nice looking shape. However, once in a while, it will generate some amazon patterns.


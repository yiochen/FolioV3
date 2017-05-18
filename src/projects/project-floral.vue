<template>
    <section>
    
        <project-title date="11/2015" languages="JavaScript">Floral
    
            <github-ribbon link="https://github.com/yiochen/Floral"></github-ribbon>
        </project-title>
        <article>
            <p>
                <code>Floral</code> is a small artistic expression using
                <a href="http://paperjs.org/">Paper.js</a>. I tried to dynamically generate some kind of floral patterns, such as the one below.</p>
            <cloud-image name="front-end/floral-example"></cloud-image>
            <p>The drawing part is easy,
                <a href="http://paperjs.org/">Paper.js</a> makes it very simple to manipulate HTML Canvas. My plan was the following:</p>
            <ol>
                <li>Starting from center of the canvas, create a root for the branch</li>
                <li>Every frame, draw a small path.</li>
                <li>Alter the direction of the path a little bit every frame so that the resulting shape is curved.</li>
                <li>At some point, create a new branch from the current branch.</li>
                <li>Stop when the branch is curving too much.</li>
            </ol>
            <p>The difficult part is the math. In order to generate smooth shapes, I need to control the variation for path direction. I ended up using a very simple approach by giving the branch a constantly reducing angular force.</p>
            <p>The force is always perpendicular to the path. For example, initially, the path is moving upwards, and the force is pointing to the right. It will gradually bend the path counter clockwise, until the force is reduced to negative. Then it starts bending the path clockwise. This results in a potentially pretty “S” shape.</p>
            <p>Because the algorithm is so simple. A lot of the time it doesn’t result in a nice looking shape. However, once in a while, it will generate some amazing patterns.</p>
    
            <cloud-video name="front-end/floral-video"></cloud-video>
        </article>
    </section>
</template>
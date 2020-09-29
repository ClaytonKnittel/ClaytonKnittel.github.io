
const ABOUT = 0;
const PROJ = 1;
const OTHER = 2;

// by default start on about page
var field = -1;


function gen_about() {
    let $c = $('<div class="par"></div>');
    let $text = $('<div>Hi, my name is Clayton! I\'m currently a research assistant in \
    Dr. Angelina Lee\'s Parallel Computing Technology Group, working to convert the distributed, NoSQL database \
    <a href="https://github.com/aerospike/aerospike-server" target="_blank">Aerospike</a> to run in \
    <a href="http://parallel.cse.wustl.edu/software.html#" target="_blank">Cilk</a>, a performance and \
    ease-of-use focused parallel runtime library. I am also the head TA of Systems Software (CSE 361S) and \
    a co-head TA of Analysis of Algorithms (CSE 347) at Washington University in St. Louis.</div>\
    <div>I graduated in May of 2020 with my bachelors in Computer Science from WashU, with a second major in \
    physics. My focus in computer science was mainly on high performance computing and concurrency, dabbling \
    in machine learning/artificial intelligence on the side. My favorite classes were \
    <a href="https://www.cse.wustl.edu/~angelee/cse539/" target="_blank">Multicore Computing</a>, \
    <a href="https://www.cse.wustl.edu/~cdgill/courses/cse532/" target="_blank">Distributed Systems</a>, and \
    <a href="https://www.cse.wustl.edu/~angelee/cse361/" target="_blank">Systems Software</a>. \
    In physics, I took mostly theory and relativity classes, including \
    general relativity, lagrangian mechanics, real analysis, complex analysis, \
    and differential geometry (each of which was its own one- or two-part course).</div> \
    <div>My last industry work experience was as an EDG Intern at \
    <a href="https://www.mathworks.com/" target="_blank">The MathWorks</a> over the summer of 2019. I worked \
    in the <a href="https://www.mathworks.com/products/simmechanics.html" target="_blank">physical modeling</a> \
    division of Simscape, which is a multibody simulation environment for 3D mechanical simulations. \
    My first project was to build a demo of the new system under development, \
    <a href="https://www.mathworks.com/help/physmod/sm/ref/spatialcontactforce.html" target="_blank">contact forces</a>. \
    <a href="https://www.mathworks.com/help/physmod/sm/ug/using-the-contact-force-block-bumper-car.html" target="_blank">My demo</a> \
    featured a toy car rolling down a ramp with elevated rails constraining the car to the tracks. This project had \
    me working through all aspects of deployment of a feature to the main product, including iterative design \
    modifications of the model layout of the bumper car system, which had to reflect how MathWorks wants their \
    customers to design their own models.</div> \
    <div>My second project at MathWorks was to design and implement a force visualization system in the 3D \
    simulation viewer. This involved implementing a data flow path from the core physics engine to the graphics \
    engine to make force and torque values accessible to the graphics code, which required modification of both \
    components. Both the core physics engine and graphics engines were large C++ codebases, with some parts written \
    in Java, and the components I worked in had 50+ files, each being multiple thousands of lines long. By the end of \
    my time working there, I had the force/torque visualization fully functional, being able to dynamically display \
    each force/torque in any arbitrary model as a vector with properly scaled magnitude. The project was taken up \
    by my manager afterward and is currently still under development.</div>');
    $c.append($text);

    return $c;
}

function gen_proj() {
    return $("<div></div>");
}

function gen_other() {
    // talk about counting castles/project euler
    // talk about guitar/music
    return $("<div></div>");
}

const field_contents = [
    gen_about(),
    gen_proj(),
    gen_other()
];

function switch_field(new_field) {
    if (field === new_field) {
        return;
    }

    field = new_field;

    $main = $("#main");
    $main.empty();
    $main.append(field_contents[new_field]);
}

document.getElementById("about_button").addEventListener("click", () => {
    switch_field(ABOUT);
});
document.getElementById("proj_button").addEventListener("click", () => {
    switch_field(PROJ);
});
document.getElementById("other_button").addEventListener("click", () => {
    switch_field(OTHER);
});

switch_field(ABOUT);

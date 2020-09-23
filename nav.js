
const ABOUT = 0;
const PROJ = 1;
const OTHER = 2;

// by default start on about page
var field = -1;


function gen_about() {
    let $c = $('<div class="par"></div>');
    let $text = $('<div>Hi, my name is Clayton! I\'m currently a research assistant in \
    Dr. Angelina Lee\'s Parallel Computing Technology Group, working to convert the distributed, NoSQL database \
    <a href="https://github.com/aerospike/aerospike-server" target="_blank">Aerospike</a>.</div>');
    $c.append($text);

    return $c;
}

function gen_proj() {
    return $("<div></div>");
}

function gen_other() {
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

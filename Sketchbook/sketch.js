let circles = [];

function setup() {
    createCanvas(400, 400);
    // Create five circles and add them to the array
    for (let i = 0; i < 5; i++) {
        let circ = {
            x: random(width - 50),
            y: random(height - 50),
            diameter: random(20, 50),
            xSpeed: random(-2, 2),
            ySpeed: random(-2, 2),
        };
        circles.push(circ);
    }
}

function draw() {
    background(220);

    // Move and display each circ in the array
    for (let i = 0; i < circles.length; i++) {
        let circ = circles[i];

        // Update circ position
        circ.x += circ.xSpeed;
        circ.y += circ.ySpeed;

        // Check for canvas boundaries and reverse direction if needed
        if (circ.x < (circ.diameter) / 2 || circ.x > width - (circ.diameter / 2)) {
            circ.xSpeed *= -1;
            fill(random(255), random(255), random(255))
        }
        if (circ.y < (circ.diameter) / 2 || circ.y > height - (circ.diameter / 2)) {
            circ.ySpeed *= -1;
            fill(random(255), random(255), random(255))
        }

        // Display the circ
        //fill(random(255), random(255), random(255));
        ellipse(circ.x, circ.y, circ.diameter);
    }
}

let player, floor, npc1, npc2, boo, orderinfo;

function setup() {
    new Canvas(500, 600);
    world.gravity.y = 0;


    player = new Sprite();
    player.diameter = 50;
    player.rotationLock = true
    player.draw = function () {
        // an oval
        ellipse(0, 0, 50, 60);
        rect(0, -30, 70, 10)
        fill("black")
        text("Player", -17, -30, 10, 50)
        fill(255, 253, 208)
        ellipse(-30, 30, 10, 10)
    }
    npc1 = new Sprite();
    npc1.diameter = 50;
    npc1.x = 300
    npc1.y = 550
    npc1.collider = "static"
    npc1.textSize = 10
    npc1.text = "Barista"
    npc2 = new Sprite();
    npc2.x = 450
    npc2.y = 550
    npc2.diameter = 50;
    npc2.collider = "static"
    npc2.textSize = 10
    npc2.text = ("Cashier")

    floor = new Sprite();
    floor.y = height - 10;
    floor.w = width;
    floor.h = 5;
    floor.collider = 'kinematic';

    counter = new Sprite();
    counter.y = height - 100;
    counter.w = width;
    counter.h = 25;
    counter.collider = 'kinematic';

    desk = new Sprite();
    desk.y = height - 100;
    desk.x = 450
    desk.w = 100;
    desk.h = 30;
    desk.collider = 'kinematic';
    desk.text = ("Order here")

    pickup = new Sprite();
    pickup.y = height - 100;
    pickup.x = 300
    pickup.w = 100;
    pickup.h = 30;
    pickup.collider = 'kinematic';
    pickup.text = "Pickup Here"
}
dialogueText = ""
function draw() {
    clear();

    // if (player.collides(npc1)) {
    //     dialogueText = "Hi there! My name is Jill!"
    // }
    textSize(15)
    text(dialogueText, 0, 20)
    if (kb.pressing('left')) {
        player.vel.x = -1.5;
    } else if (kb.pressing('right')) {
        player.vel.x = 1.5;
    } else if (kb.pressing('up')) {
        player.vel.y = -1.5;
    } else if (kb.pressing('down')) {
        player.vel.y = 1.5;
    } else {
        player.vel.y = 0;
        player.vel.x = 0;
    }

    if (player.collides(desk)) {
        dialogueText = "Hello, what would you like to order today?\nPress 1 for Latte. Press 2 for a cold brew"
        boo = 1;
        if (kb.pressing("1")) {
            dialogueText = "Thank you for your order. Your Latte is ready for pickup.\nPlease press 1 at the pickup counter to pick up your latte."
            orderinfo = 1
        }

        if (kb.pressing("2")) {
            dialogueText = "Thank you for your order. Your Cold Brew is ready for pickup. \nPlease press 2 at the pickup counter to pick up your Cold Brew."
            orderinfo = 2
        }
    }



    if (kb.pressing("1") && boo == 1 && orderinfo == 1) {
        if (player.collides(pickup)) {
            dialogueText = "Enjoy your Latte"
            boo = 0
            // fill(255, 253, 208)
        }
    }

    if (kb.pressing("2") && boo == 1 && orderinfo == 1) {
        if (player.collides(pickup)) {
            dialogueText = "Not cool beans. Can't give you a Cold Brew when you ordered a Latte"
            boo = 0
            // fill(255, 253, 208)
        }
    }

    if (kb.pressing("2") && boo == 1 && orderinfo == 2) {
        if (player.collides(pickup)) {
            dialogueText = "Enjoy your Cold Brew"
            boo = 0
            // fill(255, 253, 208)
        }
    }

    if (kb.pressing("1") && boo == 1 && orderinfo == 2) {
        if (player.collides(pickup)) {
            dialogueText = "You're under a-roast for trying to get a Latte when you ordered Cold Brew"
            boo = 0
            // fill(255, 253, 208)
        }
    }

}

import platform from '../../assets/platform.png'
import hills from '../../assets/hills.png'
import background from '../../assets/background.png'

const canvas = document.querySelector("canvas")
const canvas2d = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.5
const velocityY = 10
const velocityX = 10
const velocityBackgroundX = velocityX * 0.666
const platformImage = createImage(platform)
const keys = {
    ArrowUp: {
        pressed: false,
        disableJump: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}

var player
var platforms
var backgroundObjects
var scrollOffset = 0

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            dx: 0,
            dy: 0
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        canvas2d.fillStyle = 'red'
        canvas2d.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.dy
        this.position.x += this.velocity.dx
        if ((this.position.y + this.height + this.velocity.dy) <= canvas.height) {
            this.velocity.dy += gravity
        }
        // else {
        //     this.velocity.dy = 0
        //     keys.ArrowUp.disableJump = false
        // }
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        canvas2d.drawImage(this.image, this.position.x, this.position.y)
    }
}

class BackgroundObjects {
    constructor({ x, y, image }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        canvas2d.drawImage(this.image, this.position.x, this.position.y)
    }
}

function createImage(imageSource) {
    const image = new Image()
    image.src = imageSource
    return image
}

function platformOffset(index) {
    switch (index) {
        case 0:
            return -1
        default:
            return Math.floor(Math.random() * 200) + 100
    }

}

function init() {
    player = new Player();
    platforms = []
    var totalOffset = 0
    for (let index = 0; index < 50; index++) {
        let offset = platformOffset(index)
        platforms.push(new Platform({ x: (((platformImage.width * index) + (offset + totalOffset))), y: 470, image: platformImage }))
        totalOffset += offset
        console.log(platforms[index].position.x)
    }
    backgroundObjects = [
        new BackgroundObjects({ x: -1, y: -1, image: createImage(background) }),
        new BackgroundObjects({ x: -1, y: -1, image: createImage(hills) })
    ]
    scrollOffset = 0
}

function animate() {
    requestAnimationFrame(animate)
    canvas2d.fillStyle = 'white'
    canvas2d.fillRect(0, 0, canvas.width, canvas.height)
    backgroundObjects.forEach(backgroundObjects => {
        backgroundObjects.draw()
    })
    platforms.forEach(platform => {
        platform.draw()
    })
    if (keys.ArrowUp.pressed && !keys.ArrowUp.disableJump) {
        player.velocity.dy = -velocityY
        keys.ArrowUp.disableJump = true
    }
    if (keys.ArrowRight.pressed && (player.position.x < canvas.width / 2)) {
        player.velocity.dx = velocityX
    } else if (keys.ArrowLeft.pressed && (player.position.x > 100)) {
        player.velocity.dx = -velocityX
    }
    else {
        player.velocity.dx = 0
        if (keys.ArrowRight.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= velocityX
                scrollOffset -= velocityX
            })
            backgroundObjects.forEach(backgorundObject => {
                backgorundObject.position.x -= velocityBackgroundX
            })
        }
        if (keys.ArrowLeft.pressed) {
            platforms.forEach(platform => {
                platform.position.x += velocityX
                scrollOffset += velocityX
            })
            backgroundObjects.forEach(backgorundObject => {
                backgorundObject.position.x += velocityBackgroundX
            })
        }
        // console.log(scrollOffset)
    }

    platforms.forEach(platform => {
        if ((player.position.y + player.height <= platform.position.y)
            && (player.position.y + player.height + player.velocity.dy >= platform.position.y)
            && (player.position.x + player.width >= platform.position.x)
            && (player.position.x <= platform.position.x + platform.width)) {
            player.velocity.dy = 0
            keys.ArrowUp.disableJump = false
        }
    })

    player.update()

    if (player.position.y > canvas.height) {
        init()
    }
}

init()
animate()

window.addEventListener('keydown', (event) => {
    var key = event.key
    // console.log(key)
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(key) > -1) {
        event.preventDefault();
    }
    switch (key) {
        case 'w':
        case 'ArrowUp':
        case 'Space':
            keys.ArrowUp.pressed = true
            break
        case 'a':
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break;
        case 's':
        case 'ArrowDown':
            break
        case 'd':
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            break;
    }
})

window.addEventListener('keyup', (event) => {
    var key = event.key
    // console.log(key)
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(key) > -1) {
        event.preventDefault();
    }
    switch (key) {
        case 'w':
        case 'ArrowUp':
        case 'Space':
            keys.ArrowUp.pressed = false
            break
        case 'a':
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 's':
        case 'ArrowDown':
            break
        case 'd':
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
    }
})
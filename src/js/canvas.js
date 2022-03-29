import platform from '../../assets/cenary/platform.png'
import hills from '../../assets/cenary/hills.png'
import background from '../../assets/cenary/background.png'

import idle from '../../assets/character/_Idle.png'
import jump from '../../assets/character/_Jump.png'
import run from '../../assets/character/_Run.png'

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
            x: 150,
            y: 100
        }
        this.velocity = {
            dx: 0,
            dy: 0
        }
        this.width = 240
        this.height = 160
        this.image = createImage(idle)
        this.frame = 0;
        this.sprites = {
            stand: {
                right: createImage(idle),
                cropWidth: 120,
                cropHeight: 80,
                animationFrames: 10
            },
            run: {
                right: createImage(run),
                cropWidth: 120,
                cropHeight: 80,
                animationFrames: 10
            },
            jump: {
                right: createImage(jump),
                cropWidth: 120,
                cropHeight: 80,
                animationFrames: 3
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidht = 120
        this.currentCropHeight = 80
        this.currentAnimationFrames = 10
    }

    draw() {
        if(this.currentSprite){

        }
        canvas2d.drawImage(this.currentSprite, 120 * this.frame, 0, 120, 80, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.frame++
        if (this.frame >= player.currentAnimationFrames) {
            this.frame = 0
        }
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
            return Math.floor( 200) + 200
    }

}

function init() {
    player = new Player();
    platforms = []
    var totalOffset = 0
    for (let index = 0; index < 20; index++) {
        let offset = platformOffset(index)
        platforms.push(new Platform({ x: (((platformImage.width * index) + (offset + totalOffset))), y: 470, image: platformImage }))
        totalOffset += offset
    }
    backgroundObjects = [
        new BackgroundObjects({ x: -1, y: -1, image: createImage(background) }),
        new BackgroundObjects({ x: -1, y: -1, image: createImage(hills) })
    ]
    scrollOffset = 0
}

function animate() {
    console.log(player.velocity.dy)
    requestAnimationFrame(animate)
    canvas2d.fillStyle = 'white'
    canvas2d.fillRect(0, 0, canvas.width, canvas.height)
    backgroundObjects.forEach(backgroundObjects => {
        backgroundObjects.draw()
    })
    platforms.forEach(platform => {
        platform.draw()
    })
    if (keys.ArrowUp.pressed && !keys.ArrowUp.disableJump && player.velocity.dy === 0.5) {
        player.velocity.dy = -velocityY
        keys.ArrowUp.disableJump = true
    }
    if (keys.ArrowRight.pressed && (player.position.x < canvas.width / 2)) {
        player.velocity.dx = velocityX
    } 
    else if (keys.ArrowLeft.pressed && (player.position.x > 100)
        || keys.ArrowLeft.pressed && scrollOffset === 0 && player.position.x > 0) {
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
        if (keys.ArrowLeft.pressed && scrollOffset > 0) {
            platforms.forEach(platform => {
                platform.position.x += velocityX
                scrollOffset += velocityX
            })
            backgroundObjects.forEach(backgorundObject => {
                backgorundObject.position.x += velocityBackgroundX
            })
        }
    }

    platforms.forEach(platform => {
        if ((player.position.y + player.height <= platform.position.y)
            && (player.position.y + player.height + player.velocity.dy >= platform.position.y)
            && ((player.position.x + player.width  / 2)  >= platform.position.x)
            && ((player.position.x + player.width  / 2)  <= platform.position.x + platform.width)) {
            player.velocity.dy = 0
            keys.ArrowUp.disableJump = false
            if (keys.ArrowRight.pressed) {
                player.currentSprite = player.sprites.run.right
                player.currentAnimationFrames = player.sprites.run.animationFrames
            } else {
                player.currentSprite = player.sprites.stand.right
                player.currentAnimationFrames = player.sprites.stand.animationFrames
            }
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
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(key) > -1) {
        event.preventDefault();
    }
    switch (key) {
        case 'w':
        case 'ArrowUp':
        case 'Space':
            player.currentSprite = player.sprites.jump.right
            player.currentAnimationFrames = player.sprites.jump.animationFrames
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
            player.currentSprite = player.sprites.run.right
            player.currentAnimationFrames = player.sprites.run.animationFrames
            break;
    }
})

window.addEventListener('keyup', (event) => {
    var key = event.key
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
            player.currentSprite = player.sprites.stand.right
            player.currentAnimationFrames = player.sprites.stand.animationFrames
            break
    }
})
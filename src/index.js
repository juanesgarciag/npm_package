const messages = [
    "Juan",
    "Yese",
    "Juanpa",
    "Santi",
    "Peque",
    "ama",
    "apa",
    "Eliza",
    "Dario"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }
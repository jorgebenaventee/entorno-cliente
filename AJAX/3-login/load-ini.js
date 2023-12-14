const configuration = {}

const configurationFile = await fetch('inicio.ini').then(res => res.text())

const lines = configurationFile.split('\n').map(line => line.trim().split('='))
lines.forEach(([key, value]) => configuration[key.toLowerCase()] = value)

export {
    configuration
}
const PiranhaMessage = require('../../PiranhaMessage')
const SetNameCallback = require('../Server/SetNameCallback')

class SetName extends PiranhaMessage {
  constructor(bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 10212
    this.version = 0
  }

  async decode() {
    this.player.name = this.readString() // cant get name for somereason lol
  }

  async process() {
    console.log(this.player.name)
    new SetNameCallback(this.client, this.player).send()
  }
}

module.exports = SetName

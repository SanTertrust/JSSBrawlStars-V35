const PiranhaMessage = require('../../PiranhaMessage')

class SetNameCallback extends PiranhaMessage {
  constructor(client, player) {
    super()
    this.id = 24111
    this.client = client
    this.player = player
    this.version = 0
  }

  async encode() {
    this.writeVInt(201)
    this.writeString("awesome name")
    this.writeVInt(0)
    this.writeVInt(1)
    this.writeVInt(-1)
    this.writeVInt(-1)
    this.writeVInt(0)
    this.writeVInt(0)
  }
}

module.exports = SetNameCallback

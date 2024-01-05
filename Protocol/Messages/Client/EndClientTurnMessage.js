const PiranhaMessage = require('../../PiranhaMessage')

class EndClientTurnMessage extends PiranhaMessage {
  constructor(bytes, client, player) {
    super(bytes)
    this.client = client
    this.player = player
    this.id = 14102
    this.version = 0
    this.commandid = 0
  }

  async decode() {
    this.readVInt()
    this.readVInt()
    this.readVInt()
    this.readVInt()
    this.commandid = this.readVInt()
  }

  async process() {
    if (this.commandid == 506) {
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.readVInt()
      this.player.brawlerid = this.readInt()
    }
  }
}

module.exports = EndClientTurnMessage

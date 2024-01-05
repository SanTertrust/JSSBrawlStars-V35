const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
  constructor(client, player, playerversion) {
    super()
    this.id = 20104
    this.client = client
    this.player = player
    this.playerversion = playerversion
    this.version = 0
  }

  async encode() {
    this.writeLong(this.player.highid, this.player.lowid)
    this.writeLong(this.player.highid, this.player.lowid)

    this.writeString(this.player.token)
    this.writeString()
    this.writeString()

    this.writeInt(this.playerversion[0]) // major
    this.writeInt(this.playerversion[2]) // build
    this.writeInt(this.playerversion[1]) // minor

    this.writeString("dev")

    this.writeInt(1)
    this.writeInt(1)
    this.writeInt(62)
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeInt(0)
    this.writeString()

    this.writeString("CA")
    this.writeString()
    this.writeInt(1)
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeVInt(0)
    this.writeString()
    this.writeVInt(1)
  }
}

module.exports = LoginOkMessage

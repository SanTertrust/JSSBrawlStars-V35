const PiranhaMessage = require('../../PiranhaMessage')
const LoginOkMessage = require('../Server/LoginOkMessage')
const OwnHomeData = require('../Server/OwnHomeData')
const helpermodule = require("../../../Utils/Helper")
const helper = new helpermodule()

class ClientLoginMessage extends PiranhaMessage {
  constructor(bytes, client, player) {
    super(bytes)
    this.client = client
    this.id = 10101
    this.version = 0
    this.player = player
  }

  async decode() {
    this.player.highid = this.readInt()
    this.player.lowid = this.readInt()
    this.player.token = this.readString()

    this.major = this.readInt()
    this.minor = this.readInt()
    this.build = this.readInt()
  }

  async process() {
    if (this.player.lowid === 0) {
      this.player.highid = 0
      this.player.lowid = 1
      this.player.token = helper.randomStringDigits()
      new LoginOkMessage(this.client, this.player, [this.major, this.minor, this.build]).send()
      new OwnHomeData(this.client, this.player).send()
    } else {
      new LoginOkMessage(this.client, this.player, [this.major, this.minor, this.build]).send()
      new OwnHomeData(this.client, this.player).send()
    }
  }
}

module.exports = ClientLoginMessage

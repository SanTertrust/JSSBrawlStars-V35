const PiranhaMessage = require('../../PiranhaMessage')

class OwnHomeData extends PiranhaMessage {
  constructor(client, player) {
    super()
    this.id = 24101
    this.client = client
    this.player = player
    this.version = 0
  }

  async encode() {
    this.writeVInt(2021091) // timestamp ( year * 1000 + day of year )
    this.writeVInt(72152)
    this.writeVInt(5000)
    this.writeVInt(5000)
    this.writeVInt(122)
    this.writeVInt(200)
    this.writeVInt(99999)

    this.writeDataReference(28, 66) // player icon
    this.writeDataReference(43, 3) // player name color

    // empty arrays
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(1000)
    this.writeVInt(26000)
    this.writeVInt(20)
    this.writeVInt(5699999)

    // empty arrays
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeBoolean(false)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(0) // shop array ( maybe (???) )

    this.writeVInt(0) // v21 array

    this.writeVInt(200)
    this.writeVInt(0)

    this.writeVInt(0)

    this.writeVInt(99999)
    this.writeVInt(0)

    this.writeDataReference(16, 0) // menu brawler (shelly)

    this.writeString("RU")
    this.writeString("yes") // content creator code (aka CCC)

    this.writeVInt(1)
    this.writeInt(0)
    this.writeInt(0)

    this.writeVInt(1) // v29 array
    this.writeVInt(0)
    this.writeDataReference(16, 0)
    this.writeVInt(0)

    this.writeVInt(1) // season array v32
    this.writeVInt(5)
    this.writeVInt(0)
    this.writeBoolean(true)
    this.writeVInt(5)
    this.writeBoolean(false)

    this.writeVInt(0) // v35 array

    this.writeBoolean(true)
    this.writeVInt(0) // quests array

    this.writeBoolean(true)
    this.writeVInt(0) // pins array

    this.writeBoolean(true) // array
    this.writeVInt(100)
    this.writeVInt(10)
    this.writeVInt(30)
    this.writeVInt(3)
    this.writeVInt(80)
    this.writeVInt(10)
    this.writeVInt(40)
    this.writeVInt(1000)
    this.writeVInt(500)
    this.writeVInt(50)
    this.writeVInt(999900)
    this.writeVInt(0)

    this.writeInt(0)


    this.writeVInt(0)

    this.writeVInt(16) // v4
    for (let x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 21, 22, 23, 24]) {
      this.writeVInt(x)
    }

    let maps = [377, 7, 26]
    this.writeVInt(maps.length) // map array
    for (let x in maps) {
      this.writeVInt(0)
      if (maps.indexOf(x) === 0) {
        this.writeVInt(7)
      } else {
        this.writeVInt(maps.indexOf(x) + 1)
      }
      this.writeVInt(0)
      this.writeVInt(75992)
      this.writeVInt(10)

      this.writeDataReference(15, x)

      this.writeVInt(3)
      this.writeVInt(0)
      this.writeString()

      this.writeVInt(0)
      this.writeVInt(0)
      this.writeVInt(0)
      this.writeVInt(0) // modifiers array

      this.writeVInt(0)
      this.writeVInt(0)

      this.writeBoolean(false)

      this.writeVInt(0)

      this.writeBoolean(false)
    }

    this.writeVInt(0) // events array (idk)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeBoolean(false)

    this.writeVInt(0) // array v18

    this.writeVInt(0) // array v21

    this.writeVInt(0) // array v24

    this.writeVInt(0) // array result


    this.writeLong(0, 1)
    this.writeLong(0, 0)

    this.writeBoolean(false)
    this.writeVInt(0)

    this.writeVInt(0)


    // avatar stuff
    this.writeVInt(0)
    this.writeVInt(1)
    this.writeVInt(0)
    this.writeVInt(1)
    this.writeVInt(0)
    this.writeVInt(1)

    this.writeString("awesome") // name
    this.writeBoolean(true) // is name was set
    this.writeInt(0)

    this.writeVInt(8) // commodity count

    this.writeVInt(400)
    for (let x = 0; x < 400; x++) {
      this.writeVInt(23)
      this.writeVInt(x)
      this.writeVInt(1)
    }
    this.writeVInt(0)
    this.writeVInt(0) // trophies for rank
    this.writeVInt(0) // upgrade points
    this.writeVInt(0)
    this.writeVInt(47)
    for (let x = 0; x < 47; x++) {
      this.writeDataReference(16, x)
      this.writeVInt(665) // power level
    }
    this.writeVInt(0)
    this.writeVInt(0)


    this.writeVInt(12345) // gems
    this.writeVInt(0) // another gems but actually free idk lol just gems ok
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(2) // tutorial step

    this.writeVInt(0) // timestamp end


  }
}

module.exports = OwnHomeData

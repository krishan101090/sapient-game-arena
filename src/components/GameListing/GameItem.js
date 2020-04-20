import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import Card from "@material-ui/core/Card"

const GameItem = props => {
  const { gameData } = props

  return (
    <Card className="box">
      <div className="boxHeader">
        <div className="title">{gameData.title}</div>
        <div>2012</div>
      </div>
      <div className="rating">Rating {gameData.score} / 10</div>
      <div className="platformType">Platform : {gameData.platform}</div>
      <div className="genre">
        Genre :{" "}
        <Chip
          avatar={<Avatar>{gameData.genre.charAt(0)}</Avatar>}
          label={gameData.genre}
        />
      </div>

      {gameData.editors_choice === "Y" && (
        <div className="editorsChoice">
          <Chip avatar={<Avatar>E</Avatar>} label="Editors Choice" />
        </div>
      )}
    </Card>
  )
}
export default GameItem

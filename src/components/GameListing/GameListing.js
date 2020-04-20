import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import InputBase from "@material-ui/core/InputBase"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import CancelIcon from "@material-ui/icons/Cancel"
import Paginator from "react-hooks-paginator"
import SortIcon from "@material-ui/icons/Sort"

import GameItem from "./GameItem"

const GameListing = () => {
  const pageLimit = 12

  const listOfGames = useSelector(state => state.gameList.data) || []
  const isLoading = useSelector(state => state.loading.isLoading)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [offset, setOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState([])
  const [searchTerm, setSearchTerm] = React.useState("")
  const [activeSort, setActiveSort] = React.useState("")
  const isMenuOpen = Boolean(anchorEl)

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  useEffect(() => {
    if (listOfGames.length > 0 && !searchTerm) {
      setCurrentData(listOfGames.slice(offset, offset + pageLimit))
    }
  }, [offset, listOfGames, searchTerm])
  const searchGame = () => {
    if (searchTerm) {
      const results = listOfGames.filter(data => data.title === searchTerm)
      setCurrentData(results.slice(offset, offset + pageLimit))
    }
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const sort = type => {
    const results = listOfGames.sort((a, b) => {
      if (type === "Asc") {
        setActiveSort("Asc")
        return a.score - b.score
      }
      setActiveSort("Desc")
      return b.score - a.score
    })
    handleMenuClose()
    setCurrentData(results.slice(offset, offset + pageLimit))
  }
  const resetSearch = () => {
    setSearchTerm("")
  }
  const renderMenuSort = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="menuSort"
      className="sortMenuList"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div>Sort By Score</div>
      <MenuItem
        onClick={() => {
          sort("Asc")
        }}
        className={activeSort === "Asc" ? "active" : ""}
      >
        Asc
      </MenuItem>
      <MenuItem
        onClick={() => {
          sort("Desc")
        }}
        className={activeSort === "Desc" ? "active" : ""}
      >
        Desc
      </MenuItem>
    </Menu>
  )
  return (
    <>
      <div className="searchAndSort">
        <div className="search">
          <InputBase
            placeholder="Search game by name"
            inputProps={{ "aria-label": "Search game by name" }}
            value={searchTerm}
            onChange={handleChange}
          />
          <IconButton type="button" aria-label="search" onClick={searchGame}>
            <SearchIcon />
          </IconButton>
          {searchTerm && (
            <IconButton type="button" aria-label="search" onClick={resetSearch}>
              <CancelIcon />
            </IconButton>
          )}
        </div>
        <div className="sort">
          <div>Sort By</div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menuSort"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <SortIcon />
          </IconButton>
          {renderMenuSort}
        </div>
      </div>
      <div className="gameListingWrap">
        {currentData &&
          currentData.map((data, index) => (
            <GameItem key={index} gameData={data} />
          ))}
      </div>
      {currentData.length > 11 && (
        <Paginator
          totalRecords={listOfGames.length}
          pageLimit={pageLimit}
          pageNeighbours={2}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentData.length === 0 && !isLoading && (
        <div className="noRecord">No Record Found</div>
      )}
    </>
  )
}

export default GameListing

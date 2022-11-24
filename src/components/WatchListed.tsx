import { Heart, HeartFill } from 'react-bootstrap-icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

export const WatchListed = () => {
  const [watchlisted, setWatchlisted] = useState(false)

  const handleWatchlist = () => {
    console.log()
    if (!watchlisted) {
      setWatchlisted(true)
    } else {
      setWatchlisted(false)
    }
  }

  return (
    <StyledCardHeader onClick={handleWatchlist}>
      {!watchlisted ? (
        <Heart color={'red'} size={20} />
      ) : (
        <HeartFill color={'red'} size={20} />
      )}
    </StyledCardHeader>
  )
}

const StyledCardHeader = styled(Card.Header)`
  position: absolute;
  right: 0;
  padding: 0.2rem;
`

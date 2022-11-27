import { Heart, HeartFill } from 'react-bootstrap-icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, addToWatchlist, removeFromWatchlist, app } from '../firebase'
import { doc, getFirestore } from 'firebase/firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { Spinner } from 'react-bootstrap'

export const WatchListed = ({ movieId }: any) => {
  const [user] = useAuthState(auth)
  const [watchlisted, setWatchlisted] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [value, loading, error] = useDocumentData(
    doc(getFirestore(app), 'watchlist', `${user?.uid}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [user, setIsLoggedIn, value, isLoggedIn])

  const handleWatchlist = (e: any) => {
    if (!watchlisted) {
      // @ts-ignore

      setWatchlisted(true)
      // @ts-ignore
      addToWatchlist(user.uid, e.currentTarget.id)
    } else {
      setWatchlisted(false)
      // @ts-ignore
      removeFromWatchlist(user.uid, e.currentTarget.id)
    }
  }

  return (
    <StyledCardHeader
      key={movieId}
      id={movieId}
      onClick={(e: MouseEvent) => {
        handleWatchlist(e)
      }}
    >
      {!isLoggedIn ? (
        <div></div>
      ) : loading || !value?.watchlist ? (
        <Spinner animation='border' size='sm' />
      ) : !loading && isLoggedIn && value?.watchlist.includes(`${movieId}`) ? (
        <HeartFill color={'red'} size={20} />
      ) : !loading && isLoggedIn && !value?.watchlist.includes(`${movieId}`) ? (
        <Heart color={'red'} size={20} />
      ) : (
        error && <div>Error: {JSON.stringify(error)}</div>
      )}
    </StyledCardHeader>
  )
}

const StyledCardHeader = styled(Card.Header)`
  position: absolute;
  right: 0;
  padding: 0.2rem;
`

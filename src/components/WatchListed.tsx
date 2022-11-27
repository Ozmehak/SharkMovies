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
  const [value, loading, error, snapshot] = useDocumentData(
    doc(getFirestore(app), 'watchlist', 'goNER44IL0ZvAUJLFyzP8ziJkOF3'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
      initialValue: [],
    }
  )

  useEffect(() => {
    window.localStorage.setItem('watchlist', JSON.stringify(value))
  }, [value])

  useEffect(() => {}, [])

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
      {loading ? (
        <Spinner animation='border' size='sm' />
      ) : value?.watchlist.includes(`${movieId}`) ? (
        <HeartFill color={'red'} size={20} />
      ) : (
        <Heart color={'red'} size={20} />
      )}
    </StyledCardHeader>
  )
}

const StyledCardHeader = styled(Card.Header)`
  position: absolute;
  right: 0;
  padding: 0.2rem;
`

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Login from '../components/Login'
import { ToggleButton } from 'react-bootstrap'

export const Cookies = () => {
  const [display, setDisplay] = useState(false)
  const [consent, setConsent] = useState(false)
  const [checked, setChecked] = useState(false)

  const handleConsent = (e) => {
    if (checked && e.currentTarget.id === 'accept') {
      localStorage.setItem('cookie', 'accepted')
      setDisplay(false)
      setConsent(true)
    } else if (checked && e.currentTarget.id === 'decline') {
      localStorage.setItem('cookie', 'declined')
      setDisplay(false)
      setConsent(false)
    } else if (!checked && e.currentTarget.id === 'accept') {
      setConsent(true)
    } else if (!checked && e.currentTarget.id === 'decline') {
      setConsent(false)
      setDisplay(false)
    }
  }
  useEffect(() => {
    if (localStorage.getItem('cookie') === 'accepted') {
      setDisplay(false)
      setConsent(true)
    } else if (localStorage.getItem('cookie') === 'declined') {
      setDisplay(false)
      setConsent(false)
    } else if (consent !== true) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }, [consent])

  return (
    <>
      {consent && <Login />}

      {display && (
        <CookieDiv>
          <CookieMessage>
            Allow the use of cookies from SharkMovies in this browser?
            <CookieMsgSmall>
              We collect cookies to deliver a better user experience! Logging in
              will not be possible if you decline. We all prefer real cookies
              but it is what it is. Enjoy!
            </CookieMsgSmall>
          </CookieMessage>
          <DeclineBtn id='decline' onClick={(e) => handleConsent(e)}>
            Decline
          </DeclineBtn>
          <AcceptBtn id='accept' onClick={(e) => handleConsent(e)}>
            Allow cookies
          </AcceptBtn>

          <ToggleButton
            type={'checkbox'}
            value={1}
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
            variant={'outline-info'}
            id={'toggle-check'}
          >
            Remember?
          </ToggleButton>
        </CookieDiv>
      )}
    </>
  )
}

const AcceptBtn = styled.button`
  background-color: #131516;
  color: darkgrey;
  :hover {
    font-weight: bold;
  }
`

const CookieMsgSmall = styled.p`
  font-size: 15px;
  margin: 15px 25px 0;
`

const CookieDiv = styled.div`
  border: 1px solid grey;
  margin: 50px 10% 0;
  padding-bottom: 20px;
  position: absolute;
  text-align: center;
  width: 80%;
  z-index: 1;
  background-color: #131516;
  color: darkgrey;

  @media (min-width: 769px) {
    margin-left: 30%;
    width: 40%;
  }
`

const CookieMessage = styled.h3`
  margin-bottom: 20px;
  padding: 5px 10px 0 10px;
`

const DeclineBtn = styled.button`
  margin-right: 25px;
  background-color: #131516;
  color: darkgrey;

  :hover {
    font-weight: bold;
  }
`

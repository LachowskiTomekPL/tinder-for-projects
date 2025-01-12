import React, { useState } from 'react'
import Button from '../Button/Button'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import './UserProfile.css'
import { useHistory } from 'react-router-dom'
import { profile } from './data'
import AccountSettings from './AccountSettings/AccountSettings'
import Settings from './Settings/Settings'
import Email from 'react-email-autocomplete'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function UserProfile() {
  const history = useHistory()
  // const [userProfileState, setUserProfileState] = useState({ profile })
  const [isName, setIsName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPhone, setIsPhone] = useState(false)
  const [isLogout, setIsLogout] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [actualPhone, setActualPhone] = useState()

  return (
    <div className="profile">
      <div className="profile__accounts">
        <span className="profile__accounts--header">ACCOUNT SETTINGS</span>
        <AccountSettings
          email={profile.email}
          phone={profile.phone}
          name={profile.name}
          setIsName={setIsName}
          setIsEmail={setIsEmail}
          setIsPhone={setIsPhone}
        />
        <Modal
          open={isName}
          onClose={() => setIsName(false)}
          center
          showCloseIcon={false}
        >
          <div className="modal">
            <span className="modal--span">Enter your name</span>
            <input
              className="modal--control"
              value={profile.name}
            ></input>
            <Button>Ok</Button>
          </div>
        </Modal>
        <Modal
          open={isEmail}
          onClose={() => setIsEmail(false)}
          center
          showCloseIcon={false}
        >
          <div className="modal">
            <span className="modal--span">Enter your email</span>
            <Email className="modal--control" placeholder={profile.email} />
            <Button>Ok</Button>
          </div>
        </Modal>
        <Modal
          open={isPhone}
          onClose={() => setIsPhone(false)}
          center
          showCloseIcon={false}
        >
          <div className="modal">
            <span className="modal--span">Enter your phone</span>
            <PhoneInput
              defaultCountry="PL"
              placeholder={profile.phone}
              value={actualPhone}
              onChange={() => setActualPhone}
            />
            <Button>Ok</Button>
          </div>
        </Modal>
      </div>

      <div className="profile--settings">
        <span className="profile__settings--header">SETTINGS</span>
        <Settings language={profile.language} />
      </div>

      <div>
        <Button
          fullWidth
          children={undefined}
          size={undefined}
          ghost={undefined}
          mobile={undefined}
          style={undefined}
          onClick={() => setIsLogout(true)}
        >
          Logout
        </Button>
        <Button
          fullWidth
          ghost
          children={undefined}
          size={undefined}
          mobile={undefined}
          style={undefined}
          onClick={() => setIsDelete(true)}
        >
          Delete account
        </Button>
      </div>

      <Modal
        open={isLogout}
        onClose={() => setIsLogout(false)}
        center
        showCloseIcon={false}
      >
        <div className="profile__modal">
          <span>Do you really want to log out?</span>
          <div className="profile__modal--buttons">
            <Button ghost>Cancel</Button>
            <Button>Log me out</Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={isDelete}
        onClose={() => setIsDelete(false)}
        center
        showCloseIcon={false}
      >
        <div className="profile__modal">
          <span>Are you sure you want to delete your account?</span>
          <div className="profile__modal--buttons">
            <Button ghost>Cancel</Button>
            <Button>Delete my account</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default UserProfile

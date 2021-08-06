import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import Header from './header';
import Photos from './photos';
// Services
import { getUserPhotosByUserId } from '../../services/firebase';

export default function UserProfile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getUserPhotos() {
      const photos = await getUserPhotosByUserId(user.userId);
      dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });
    }
    if (user.username) {
      getUserPhotos();
    }
  }, [user, user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    followers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired
  }).isRequired
};

import React from 'react'
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, image, handleName }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.name} onClick={() => handleName(fullName)}>
        {fullName}
      </h1>
      <h2 style={styles.profession}>{profession}</h2>
      <h2 style={styles.bio}>{bio}</h2>
      
      <img src={"https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/285122770_10227994126986568_5579286937167940633_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=lRPvx-8fPqoAX8KqVTT&_nc_ht=scontent.ftun1-2.fna&oh=00_AfCEG-3VnGrcBpVHTUoZqN77YuM0l6dGdt7w-pApD2tuoQ&oe=64647590"} alt="Profile" style={styles.image} />
     
    </div>
  );
};

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
  };
  const styles = {
    container: {
      backgroundColor: '#74992e',
      padding: '20px',
      borderRadius: '10px',
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    profession: {
      fontSize: '18px',
      color: 'black',
    },
    bio: {
      fontSize: '16px',
    },
    image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginTop: '10px',
  },
}
export default Profile;


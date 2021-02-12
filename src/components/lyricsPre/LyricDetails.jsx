
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// export default function ArtistAlbumDetails({ releases }) {

//   const releasesElements = releases.map(release => (
//     <li key={release.release_id}>
//       <Link to={`/releases/${release.id}`}>
//         <h2>{release.album}</h2>
//         <img
//           src={`http://coverartarchive.org/release/${release.release_id}/front`}
//           alt="release.album"/>
//       </Link>
//     </li>
//   ));

//   return (
//     <ul data-testid="releaseTest">
//       {releasesElements}
//     </ul>
//   );
// }

// ArtistAlbumDetails.propTypes = {
//   releases: PropTypes.arrayOf(PropTypes.shape({
//     release_id: PropTypes.string.isRequired,
//     album: PropTypes.string.isRequired
//   }))
// };

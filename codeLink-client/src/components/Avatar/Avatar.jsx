// Avatar.js
import PropTypes from 'prop-types';
import 'react';

function Avatar({ userName }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold">
        {/* Placeholder for avatar */}
        {userName[0].toUpperCase()}
      </div>
      <span>{userName}</span>
    </div>
  );
}
Avatar.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Avatar;

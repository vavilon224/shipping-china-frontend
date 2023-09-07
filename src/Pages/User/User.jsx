import React from 'react';
import {useParams} from "react-router-dom";

const User = () => {
  const queryParams = useParams();

  return (
    <div>
      {queryParams.id}
    </div>
  );
};

export default User;
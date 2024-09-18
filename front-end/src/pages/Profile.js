import React, { useEffect, useState } from "react";
import memberCard from "../assets/images/carte membre.png";

import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
  const [member, setMember] = useState({});
  const { memberId } = useParams();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/members/${memberId}`
      );
      setMember(response.data);
    })();
  }, [memberId]);
  return (
    <>
      <p className="text-center pb-5" >
       تهانينا! لقد اكتمل التسجيل بنجاح. شكرًا لانضمامك!
      </p>
    </>
  );
}

export default Profile;

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
      <div className="d-flex justify-content-center p-sm-5 p-3">
        <div className="col-sm-9 col col-md-6 position-relative">
          <img src={memberCard} alt="memberCard" className="w-100" />
          <img
            src={member?.avatarUrl}
            className="position-absolute w-25 rounded-circle"
            style={{ right: "11%", top: "30%" }}
          />
          <span
            className="position-absolute w-25 fontCard "
            style={{ left: "10%", top: "39%" }}
          >
            {member?.firstNameAr + " " + member?.lastNameAr}
          </span>
          <span
            className="position-absolute w-25 fontCard "
            style={{ left: "10%", top: "46%" }}
          >
            {member?.cin}
          </span>
          <span
            className="position-absolute w-25 fontCard "
            style={{ left: "10%", top: "53%" }}
          >
            {member?.dob?.slice(0, 10)}
          </span>
          <span
            className="position-absolute fontCard "
            style={{ left: "5%", top: "60%", width: "30%", lineHeight: 1 }}
          >
            {member?.UniversityPart?.nameAr}
          </span>
          <span
            className="position-absolute fontCard w-25 "
            style={{ left: "10%", top: "70%", width: "30%", lineHeight: 1 }}
          >
            {member?.Grade?.nameAr}
          </span>
        </div>
      </div>
      <p className="text-center p-3" style={{color:'red'}} >
        تنويه : هذه البطاقة الرقمية ذات صلوحية مؤقتة لغاية استلام البطاقة
        الرسمية
      </p>
    </>
  );
}

export default Profile;

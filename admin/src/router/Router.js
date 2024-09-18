import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../apps/App";
import MemberList from "../domains/members/views/MemberList";
import ViewMember from "../domains/members/views/ViewMember";
import Members from "../domains/members/Members";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../store/auth";
import LoginAdmin from "../pages/LoginAdmin";
import AuthAdmin from "../apps/AuthAdmin";
import NoPage from "../pages/NoPage";
function Router() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const Authorization = token.Authorization;
      dispatch(me(Authorization)).then((res) => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);
  return (
    <div>
      {loading && (
        <div className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 bg-white">
          Loading
        </div>
      )}
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" element={<App />}>
              <Route path="members" element={<Members />}>
                <Route index element={<MemberList />} />
                <Route path=":memberId" element={<ViewMember />} />
              </Route>
            </Route>
          ) : (
            <Route path="/" element={<AuthAdmin />}>
              <Route index element={<LoginAdmin />} />
              {/* <Route path="resetPassword" element={<ResetPassword />} /> */}
              {/* <Route path="validateCode" element={<ValidateCode />} /> */}
              {/* <Route path="newPassword" element={<NewPassword />} /> */}
            </Route>
          )}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

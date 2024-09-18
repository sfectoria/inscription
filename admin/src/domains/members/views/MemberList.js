import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function MemberList() {
  const [universities, setUniversities] = useState([]);
  const [universityParts, setUniversityParts] = useState([]);

  const [members, setMembers] = useState([]);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    (async () => {
      let token = JSON.parse(localStorage.getItem("token")).Authorization;
      const membersRes = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/members/`,
        {
          params: formData,
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setMembers(membersRes.data);
    })();
  }, [formData]);

  useEffect(() => {
    (async () => {
      const universitiesRes = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/universities`
      );
      setUniversities(universitiesRes.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (formData.universityId) {
        const universitiesPartsRes = await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}/university-parts/${formData.universityId}`
        );
        setUniversityParts(universitiesPartsRes.data);
      }
    })();
  }, [formData.universityId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: ["universityId", "universityPartId"].includes(name)
        ? +value
        : value,
    });
  };

  const columns = [
    {
      field: "cin",
      headerName: "CIN",
      width: 90,
    },
    {
      field: "firstNameAr",
      headerName: "firstNameAr",
      width: 150,
      sortable: true,
    },
    {
      field: "lastNameAr",
      headerName: "lastNameAr",
      width: 150,
      sortable: true,
    },
    {
      field: "University",
      headerName: "University",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
      valueGetter: (params) => `${params.row.University.nameAr} `,
    },
    {
      field: "UniversityPart",
      headerName: "UniversityPart",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
      valueGetter: (params) => `${params.row.UniversityPart.nameAr} `,
    },
  ];

  return (
    <div>
      <div className="d-flex">
        <select
          className="form-select "
          aria-describedby="validationServer05Feedback"
          onChange={handleChange}
          required
          name="universityId"
        >
          <option value="" className="">
            اختر الجامعة
          </option>
          {universities?.map((uni, index) => (
            <option key={index} value={uni.id}>
              {uni.nameAr}
            </option>
          ))}
        </select>
        <select
          className="form-select "
          aria-describedby="validationServer05Feedback"
          onChange={handleChange}
          name="universityPartId"
          required
        >
          <option value="" className="">
            إختر الجزء الجامعي
          </option>
          {universityParts?.map((faculty, index) => (
            <option key={index} value={faculty.id}>
              {faculty.nameAr}
            </option>
          ))}
        </select>
      </div>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={members}
          columns={columns}
          getRowId={(r) => r.cin}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    </div>
  );
}

export default MemberList;

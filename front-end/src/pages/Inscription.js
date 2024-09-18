import React, { useEffect, useState } from "react";

import { Button, Row, Container, Card, Form } from "react-bootstrap";

import photoHeader from "../assets/images/photoHeader.jpg";

import axios from "axios";
import CropEasy from "../components/CropEasy";
import { useNavigate } from "react-router-dom";

function Inscription() {
  const navigate = useNavigate();

  const [governments, setGovernments] = useState([]);
  const [educationLevels, setEducationLevels] = useState([]);
  const [grades, setGrades] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [universityParts, setUniversityParts] = useState([]);
  const [preview, setPreview] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [openCrop, setOpenCrop] = useState(false);
  const [card, setCard] = useState(null);
  const [cardPreview, setCardPreview] = useState(null);

  const [formData, setFormData] = useState({
    firstNameAr: "",
    lastNameAr: "",
    gender: "male",
    dob: "",
    email: "",
    phone: "",
    governmentId: "",
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    (async () => {
      const governmentsRes = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/governments`
      );
      setGovernments(governmentsRes.data);
    })();
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: [
        "governmentId",
        "gradeId",
        "universityId",
        "universityPartId",
        "educationLevelId",
      ].includes(name)
        ? +value
        : value,
    });
  };
  const handleChecked = (e) => {
    const { name } = e.target;
    if (name === "female") {
      setFormData({
        ...formData,
        gender: name,
      });
    } else if (name === "male") {
      setFormData({
        ...formData,
        gender: name,
      });
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(formData,"form");
      
      const member = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/members`,formData
      );
      navigate(`member/${member.data.cin}`);
    }
    setValidated(true);
  };

  console.log(formData,"form");
  

  return (
    <>
      <Container>
        <Card className="shadow ">
         
          <Card.Body>
            <div className="mb-3 mt-4">
              <h2 className="fw-bold mb-5 text-center">
                الإستمارة الوطنية للإنخراط
              </h2>

              <Form
                noValidate
                validated={validated}
                className="mb-3"
                onSubmit={handleSubmit}
              >
                <Row style={{ padding: 0 }}>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicNameAr"
                  >
                    <Form.Label>الإسم بالعربية</Form.Label>

                    <Form.Control
                      required
                      name="firstNameAr"
                      type="text"
                      placeholder="أدخل الاسم بالعربية"
                      className=""
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال الاسم بالعربية
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicNameFr"
                  >
                    <Form.Label className="text-center">
                      اللقب بالعربية
                    </Form.Label>

                    <Form.Control
                      type="text"
                      name="lastNameAr"
                      required
                      placeholder="أدخل اللقب بالعربية"
                      className=""
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال االلقب بالعربية
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group
                    controlId="kindOfStand "
                    className="d-flex flex-column  col-lg-6"
                  >
                    <Form.Label>الجنس</Form.Label>
                    <div className="d-flex  gap-5">
                      <Form.Check
                        reverse
                        name="male"
                        type="radio"
                        aria-label="radio 2"
                        label="ذكر"
                        onChange={handleChecked}
                        checked={formData.gender === "male"}
                      />
                      <Form.Check
                        reverse
                        name="female"
                        type="radio"
                        aria-label="radio 1"
                        label="أنثى"
                        onChange={handleChecked}
                        checked={formData.gender === "female"}
                      />
                    </div>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الجنس
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    controlId="kindOfStand "
                    className="d-flex flex-column  col-lg-6 "
                  >
                    <Form.Label>تاريخ الميلاد</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="تاريخ الميلاد"
                      className="text-end"
                      required
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>

                    <Form.Control.Feedback type="invalid">
                      الرجاء اختيار تاريخ ميلادك
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>البريد الإلكتروني</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder=" أدخل البريد الإلكتروني"
                      required
                      className=""
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال البريد الإلكتروني
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>رقم الهاتف</Form.Label>
                    <Form.Control
                      type="number"
                      max={99999999}
                      min={11111111}
                      placeholder="أدخل رقم الهاتف"
                      className=""
                      required
                      name="phone"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال رقم الهاتف مثال 555 555 55
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>الولاية</Form.Label>
                    <select
                      className="form-select "
                      id="validationServer04"
                      aria-describedby="validationServer04Feedback"
                      required
                      name="governmentId"
                      onChange={handleChange}
                    >
                      <option value="">إختر الولاية </option>
                      {governments?.map((governorate, index) => (
                        <option key={index} value={governorate.id}>
                          {governorate.nameFr}
                        </option>
                      ))}
                    </select>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الولاية
                    </Form.Control.Feedback>
                  </Form.Group>
                 
                </Row>

                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
                    تقديم الطلب
                  </Button>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Container>
      
    </>
  );
}

export default Inscription;

import React, { useEffect, useState } from "react";

import { Button, Row, Container, Card, Form } from "react-bootstrap";

import photoHeader from "../assets/images/photoHeader.jpg";

import axios from "axios";
import CropEasy from "../components/CropEasy";
import { useNavigate } from "react-router-dom";

function Inscription() {
  const navigate=useNavigate()

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
    cin: "",
    firstNameAr: "",
    firstNameFr: "",
    lastNameAr: "",
    lastNameFr: "",
    gender: "male",
    dob: "",
    email: "",
    address: "",
    phone: "",
    governmentId: "",
    gradeId: "",
    universityId: "",
    universityPartId: "",
    educationLevelId: "",
    speciality: "",
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    (async () => {
      const governmentsRes = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/governments`
      );
      setGovernments(governmentsRes.data);
      const educationLavelsRes = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/education-levels`
      );
      setEducationLevels(educationLavelsRes.data);
      const gradesRes = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/grades`
      );
      setGrades(gradesRes.data);
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
  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    setAvatar(file);
    setOpenCrop(true);
  };
  const handleChangeCard = (e) => {
    const file = e.target.files[0];
    setCardPreview(URL.createObjectURL(file));
    setCard(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formDataAvatar = new FormData();
      formDataAvatar.append("image", avatar);
      const avatarResponse = await axios.post(
        `${process.env.REACT_APP_SERVER_UPLOAD_ENDPOINT}/api/upload/image`,
        formDataAvatar
      );
      const formDataCard = new FormData();
      formDataCard.append("image", card);
      const cardResponse = await axios.post(
        `${process.env.REACT_APP_SERVER_UPLOAD_ENDPOINT}/api/upload/image`,
        formDataCard
      )
      const member = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/members`,
        { ...formData, avatarUrl: avatarResponse?.data?.url, studentCardUrl: cardResponse?.data?.url }
      );
      navigate(`member/${member.data.cin}`);
    }
    setValidated(true);
  };

  return (
    <>
      <Container>
        {/* <Row className="vh-100 d-flex justify-content-center align-items-center"> */}

        {/* <div className="border border-3 border-primary"></div> */}

        <Card className="shadow ">
          <img
            src={photoHeader}
            alt="HeaderPhoto"
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "0.5%",
              borderTopRightRadius: "0.5%",
            }}
            className=""
          />
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
                    className="mb-3  col-lg-6"
                    controlId="formBasicNameAr"
                  >
                    <Form.Label>الإسم بالفرنسية</Form.Label>

                    <Form.Control
                      required
                      name="firstNameFr"
                      type="text"
                      placeholder="أدخل الاسم باللغة الفرنسية"
                      className=""
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال الإسم بالفرنسية
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicNameFr"
                  >
                    <Form.Label className="text-center">
                      اللقب بالفرنسية
                    </Form.Label>

                    <Form.Control
                      type="text"
                      name="lastNameFr"
                      required
                      placeholder="أدخل اللقب باللغة الفرنسية"
                      className=""
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال اللقب بالفرنسية
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
                    <Form.Label>العنوان</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="أدخل العنوان"
                      required
                      className=""
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال العنوان
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

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>رقم بطاقة التعريف</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="أدخل رقم بطاقة التعريف"
                      className=""
                      required
                      name="cin"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال رقم بطاقة التعريف
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
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

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>الصفة الهيكلية</Form.Label>
                    <select
                      className="form-select  "
                      onChange={handleChange}
                      aria-describedby="validationServer05Feedback"
                      required
                      name="gradeId"
                    >
                      <option value="">الصفة الهيكلية</option>
                      {grades?.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.nameAr}
                        </option>
                      ))}
                    </select>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الصفة الهيكلية
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="universitySelect"
                  >
                    <Form.Label>الجامعة</Form.Label>

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
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الجامعة
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="facultySelect"
                  >
                    <Form.Label>الجزء الجامعي</Form.Label>

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
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيار الجزء الجامعي
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>المستوى الدراسي</Form.Label>
                    <select
                      className="form-select "
                      aria-describedby="validationServer05Feedback"
                      required
                      onChange={handleChange}
                      name="educationLevelId"
                    >
                      <option value="" className="">
                        إختر المستوي الدراسي
                      </option>
                      {educationLevels?.map((academicLevel, index) => (
                        <option key={index} value={academicLevel.id}>
                          {academicLevel.nameAr}
                        </option>
                      ))}
                    </select>
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إختيارالمستوي الدراسي
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>الإختصاص</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="أدخل الإختصاص"
                      required
                      className=""
                      name="speciality"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء إدخال الإختصاص
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <div className="d-flex flex-column">
                      {preview && (
                        <img
                          src={preview}
                          style={{
                            width: 80,
                            height: 80,
                            objectFit: "contain",
                            margin: 24,
                          }}
                        />
                      )}
                      <Form.Label>الصورة الشخصية</Form.Label>
                    </div>
                    <Form.Control
                      type="file"
                      accept="image/png, image/jpeg"
                      required
                      className=""
                      name="avatar"
                      onChange={handleChangeAvatar}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء رفع صورة شخصية
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3  col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <div className="d-flex flex-column">
                      {cardPreview && (
                        <img
                          src={cardPreview}
                          style={{ width: 200, margin: 24 }}
                        />
                      )}
                      <Form.Label>بطاقة طالب او شهادة ترسيم</Form.Label>
                    </div>
                    <Form.Control
                      type="file"
                      accept="image/png, image/jpeg"
                      required
                      className=""
                      name="studentCard"
                      onChange={handleChangeCard}
                    />
                    <Form.Control.Feedback>تبدو جيدة</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      الرجاء رفع بطاقة طالب او شهادة ترسيم
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
      {openCrop && (
        <div
          className="position-fixed w-100 h-100 top-0 "
          style={{ backgroundColor: "rgba(128, 128, 128, 0.496)", zIndex: 99 }}
        >
          <div className=" d-flex justify-content-center bg-light">
            <div className="col col-md-6">
              <CropEasy
                {...{ preview, setPreview, setOpenCrop, avatar, setAvatar }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Inscription;

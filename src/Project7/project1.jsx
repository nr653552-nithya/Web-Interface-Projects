
import { useState } from "react";
import "./project1.css";

// BASIC FIELDS
function BasicFields({
  formData,
  errors,
  handleChange
}) {
  return (
    <div>
      <h2>Basic Information</h2>

      <label>Username *</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <p className="error">{errors.username}</p>

      <label>Aadhaar Card Name *</label>
      <input
        type="text"
        name="aadharName"
        value={formData.aadharName}
        onChange={handleChange}
        placeholder="Enter Aadhaar name"
      />
      <p className="error">{errors.aadharName}</p>

      <label>Date of Birth *</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <p className="error">{errors.dob}</p>

      <label>Age *</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        readOnly
        placeholder="Age is calculated automatically"
      />
      <p className="error">{errors.age}</p>
    </div>
  );
}

// PASSWORD AND CONTACT FIELDS
function PersonalFields({
  formData,
  errors,
  handleChange
}) {
  return (
    <div>
      <h2>Personal Details</h2>

      <label>Password *</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <p className="error">{errors.password}</p>

      <label>Confirm Password *</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm password"
      />
      <p className="error">
        {errors.confirmPassword}
      </p>

      <label>Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <p className="error">{errors.email}</p>

      <label>Phone Number *</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter 10 digit phone number"
      />
      <p className="error">{errors.phone}</p>

      <label>Gender *</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>
      <p className="error">{errors.gender}</p>
    </div>
  );
}

// ADDRESS FIELDS
function AddressFields({
  formData,
  errors,
  handleChange
}) {
  return (
    <div>
      <h2>Address Details</h2>

      <label>Address *</label>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter address"
      ></textarea>
      <p className="error">{errors.address}</p>

      <label>City *</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter city"
      />
      <p className="error">{errors.city}</p>

      <label>Pincode *</label>
      <input
        type="text"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
        placeholder="Enter 6 digit pincode"
      />
      <p className="error">{errors.pincode}</p>
    </div>
  );
}

// FILE UPLOAD FIELDS
function UploadFields({
  formData,
  errors,
  handleChange
}) {
  return (
    <div>
      <h2>Upload Documents</h2>

      <label>Upload Photo *</label>
      <p>Maximum file size: 2 MB</p>

      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handleChange}
      />
      <p className="error">{errors.photo}</p>

      <label>Upload Document *</label>
      <p>Maximum file size: 5 MB</p>

      <input
        type="file"
        name="document"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
      />
      <p className="error">{errors.document}</p>
    </div>
  );
}

// TERMS AND BUTTONS
function FormActions({
  formData,
  errors,
  handleChange,
  handleClear
}) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />

        I accept the terms and conditions *
      </label>

      <p className="error">{errors.terms}</p>

      <button type="submit">
        Submit
      </button>

      <button
        type="button"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}

// REGISTRATION FORM
// Props are passed from Project1 to this component
function RegistrationForm({
  formData,
  errors,
  handleChange,
  handleSubmit,
  handleClear
}) {
  return (
    <form
      id="registrationForm"
      onSubmit={handleSubmit}
    >
      <h2>Registration Form</h2>

      {/* Props Drilling */}
      <BasicFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />

      <PersonalFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />

      <AddressFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />

      <UploadFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />

      <FormActions
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleClear={handleClear}
      />
    </form>
  );
}

// PARENT COMPONENT
function Project1() {
  const initialFormData = {
    username: "",
    aadharName: "",
    dob: "",
    age: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    city: "",
    pincode: "",
    photo: null,
    document: null,
    terms: false
  };

  const [formData, setFormData] = useState(
    initialFormData
  );

  const [errors, setErrors] = useState({});

  // Calculate Age
  const calculateAge = (dob) => {
    if (!dob) {
      return "";
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age =
      today.getFullYear() -
      birthDate.getFullYear();

    const monthDifference =
      today.getMonth() -
      birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (
        monthDifference === 0 &&
        today.getDate() < birthDate.getDate()
      )
    ) {
      age--;
    }

    return age;
  };

  // Handle Input Changes
  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
      files
    } = event.target;

    if (type === "file") {
      const selectedFile = files[0] || null;

      if (!selectedFile) {
        setFormData((previousData) => ({
          ...previousData,
          [name]: null
        }));

        return;
      }

      const fileSize =
        selectedFile.size / (1024 * 1024);

      if (
        name === "photo" &&
        fileSize > 2
      ) {
        alert("Photo size must be less than 2 MB!");

        event.target.value = "";

        setErrors((previousErrors) => ({
          ...previousErrors,
          photo:
            "Photo size must be less than 2 MB"
        }));

        return;
      }

      if (
        name === "photo" &&
        !selectedFile.type.startsWith("image/")
      ) {
        alert("Please upload a valid image file!");

        event.target.value = "";

        setErrors((previousErrors) => ({
          ...previousErrors,
          photo:
            "Only image files are allowed"
        }));

        return;
      }

      if (
        name === "document" &&
        fileSize > 5
      ) {
        alert(
          "Document size must be less than 5 MB!"
        );

        event.target.value = "";

        setErrors((previousErrors) => ({
          ...previousErrors,
          document:
            "Document size must be less than 5 MB"
        }));

        return;
      }

      setFormData((previousData) => ({
        ...previousData,
        [name]: selectedFile
      }));

      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: ""
      }));

      return;
    }

    if (type === "checkbox") {
      setFormData((previousData) => ({
        ...previousData,
        [name]: checked
      }));

      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: ""
      }));

      return;
    }

    if (name === "dob") {
      setFormData((previousData) => ({
        ...previousData,
        dob: value,
        age: calculateAge(value)
      }));

      setErrors((previousErrors) => ({
        ...previousErrors,
        dob: "",
        age: ""
      }));

      return;
    }

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: ""
    }));
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};

    // 1. Username
    if (formData.username.trim() === "") {
      newErrors.username =
        "Username is required";
    }

    // 2. Aadhaar Name
    if (formData.aadharName.trim() === "") {
      newErrors.aadharName =
        "Aadhaar name is required";
    } else if (
      formData.username.trim().toLowerCase() !==
      formData.aadharName.trim().toLowerCase()
    ) {
      newErrors.aadharName =
        "Aadhaar name and username must be the same";
    }

    // 3. Date of Birth
    if (formData.dob === "") {
      newErrors.dob =
        "Date of birth is required";
    }

    // 4. Age
    if (formData.age === "") {
      newErrors.age = "Age is required";
    } else if (formData.age < 18) {
      newErrors.age =
        "Age must be 18 or above";
    }

    // 5. Password
    if (formData.password === "") {
      newErrors.password =
        "Password is required";
    } else if (
      formData.password.length < 8
    ) {
      newErrors.password =
        "Password must contain at least 8 characters";
    }

    // 6. Confirm Password
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword =
        "Confirm password is required";
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    // 7. Email
    if (formData.email.trim() === "") {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter a valid email";
    }

    // 8. Phone
    if (formData.phone === "") {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^[0-9]{10}$/.test(formData.phone)
    ) {
      newErrors.phone =
        "Phone number must contain 10 digits";
    }

    // 9. Gender
    if (formData.gender === "") {
      newErrors.gender =
        "Please select gender";
    }

    // 10. Address
    if (formData.address.trim() === "") {
      newErrors.address =
        "Address is required";
    }

    // 11. City
    if (formData.city.trim() === "") {
      newErrors.city =
        "City is required";
    }

    // 12. Pincode
    if (formData.pincode === "") {
      newErrors.pincode =
        "Pincode is required";
    } else if (
      !/^[0-9]{6}$/.test(formData.pincode)
    ) {
      newErrors.pincode =
        "Pincode must contain 6 digits";
    }

    // 13. Photo
    if (!formData.photo) {
      newErrors.photo =
        "Please upload a photo";
    } else {
      const photoSize =
        formData.photo.size / (1024 * 1024);

      if (photoSize > 2) {
        newErrors.photo =
          "Photo size must be less than 2 MB";
      }
    }

    // 14. Document
    if (!formData.document) {
      newErrors.document =
        "Please upload a document";
    } else {
      const documentSize =
        formData.document.size / (1024 * 1024);

      if (documentSize > 5) {
        newErrors.document =
          "Document size must be less than 5 MB";
      }
    }

    // 15. Terms
    if (!formData.terms) {
      newErrors.terms =
        "Please accept terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      alert("Form submitted successfully!");

      console.log("Form Data:", formData);
    } else {
      alert(
        "Please correct all errors in the form"
      );
    }
  };

  // Clear Form
  const handleClear = () => {
    setFormData(initialFormData);
    setErrors({});

    document
      .getElementById("registrationForm")
      .reset();

    alert("Form cleared successfully!");
  };

  return (
    <div>
      <h1>Project 1 - Form Validation</h1>

      {/* Props passed from Parent to Child */}
      <RegistrationForm
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
    </div>
  );
}

export default Project1;
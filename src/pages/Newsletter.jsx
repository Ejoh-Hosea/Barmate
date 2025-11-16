import axios from "axios";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
const newsletterUrl = "https://my-api-dusky-beta.vercel.app/api/newsletter";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await axios.post(newsletterUrl, data);
  console.log(response);
  toast.success(response.data.msg);

  return redirect("/");
};

const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="hosea"
        />
        <label htmlFor="name" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          required
          id="lastname"
          defaultValue="ejoh"
        />
        <label htmlFor="name" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          required
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        submit
      </button>
    </Form>
  );
};
export default Newsletter;

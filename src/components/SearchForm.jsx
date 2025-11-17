import { Form, useNavigation } from "react-router-dom";

const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue="vodka"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </div>
  );
};
export default SearchForm;

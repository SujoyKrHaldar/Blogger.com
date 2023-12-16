import { Link } from "react-router-dom";
import { AuthUI, MetaTags, SignupForm } from "../../components";

function Signup() {
  return (
    <>
      <MetaTags
        title="Signup - Blogger.com"
        description="Create your account"
        conicalRoute="/signup"
      />

      <AuthUI
        title="Signup"
        objectPosition="object-top"
        FormComponent={<SignupForm />}
        imgSrc="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imgAlt="Auth Background Image"
      >
        <div className="container">
          <p>
            Already registered?{" "}
            <Link to="/login" className="font-semibold">
              Login
            </Link>
            .
          </p>
        </div>
      </AuthUI>
    </>
  );
}

export default Signup;

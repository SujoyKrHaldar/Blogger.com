import { Link } from "react-router-dom";
import { AuthUI, LoginForm, MetaTags } from "../../components";

function Login() {
  return (
    <>
      <MetaTags
        title="Login • Blogger.com"
        description="Login to your account"
        conicalRoute="/login"
      />

      <AuthUI
        title="Login"
        FormComponent={<LoginForm />}
        imgSrc="https://images.unsplash.com/photo-1594323713852-9626155bfd37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imgAlt="Auth Background Image"
      >
        <div className="container">
          <p>
            Do not have an account?{" "}
            <Link to="/signup" className="font-semibold">
              Signup
            </Link>
            .
          </p>
        </div>
      </AuthUI>
    </>
  );
}

export default Login;

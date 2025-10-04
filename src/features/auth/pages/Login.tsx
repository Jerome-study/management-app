import Typograhy from "@components/ui/Typograhy/Typograhy";
import AuthLayout from "../components/AuthLayout";
import Form from "@components/ui/Form/Form";
import FieldSet from "@components/ui/FieldSet/FieldSet";
import Input from "@components/ui/Input/Input";
import Button from "@components/ui/Button/Button";
import Google from "@components/icons/Google";

const Login = () => {
  return (
    <AuthLayout type="Login">
      <Form className="gap-5">
        <FieldSet>
          <Input placeholder="Email or username" type="text" />
        </FieldSet>
        <FieldSet>
          <Input placeholder="Password" type="password" />
        </FieldSet>
        <div>
          <Typograhy color="info" className="text-xs text-end">
            Forgot password?
          </Typograhy>
        </div>
        <Button type="submit" fontWeight={600} className="h-11">
          Sign in
        </Button>
      </Form>
      <div className="border-t my-4" />
      <Button
        disabled
        color="secondary"
        fontWeight={300}
        className="text-sm h-11"
        startIcon={<Google />}
      >
        Or sign in with Google
      </Button>
    </AuthLayout>
  );
};

export default Login;

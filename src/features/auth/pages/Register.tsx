import Typograhy from "@components/ui/Typograhy/Typograhy";
import AuthLayout from "../components/AuthLayout";
import Form from "@components/ui/Form/Form";
import FieldSet from "@components/ui/FieldSet/FieldSet";
import Input from "@components/ui/Input/Input";
import Button from "@components/ui/Button/Button";

const Register = () => {
  return (
    <AuthLayout type="Register">
      <Form className="gap-5">
        <FieldSet>
          <Input placeholder="First name" type="text" />
        </FieldSet>
        <FieldSet>
          <Input placeholder="Last name" type="text" />
        </FieldSet>
        <FieldSet>
          <Input placeholder="Username" type="text" />
        </FieldSet>
        <FieldSet>
          <Input placeholder="Password" type="password" />
        </FieldSet>
        <FieldSet>
          <Input placeholder="Confirm password" type="password" />
        </FieldSet>

        <Button type="submit" fontWeight={600}>
          Sign up
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default Register;

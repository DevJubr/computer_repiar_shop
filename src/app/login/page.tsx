import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <main className="h-dvh flex items-center flex-col gap-2">
      <h1>repair days shop</h1>
      <Button
        asChild
        variant={"ghost"}
        className="p-2 bg-amber-50
      "
      >
        <LoginLink className="text-black">Login</LoginLink>
      </Button>
    </main>
  );
};

export default Login;

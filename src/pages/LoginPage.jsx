
import { Link, Button,Form,Checkbox,TextInput } from "@carbon/react";

const LoginPage = () => {

const formHeader = "Login"

return (
    <>
        <div id="login-page"  className="flex bg-gray-900 items-center justify-center min-h-screen">
            <Form id="login-form" className="bg-white" aria-label="sample form">
                <h2 id='login-form-header'> {formHeader}</h2>
                <div id='login-form-prompt-1'>
                    <p > Don&apos;t have an account?</p>
                    <Link id="login-form-prompt-1-link" href=""> Contact the administrator</Link>
                </div>
                    <TextInput className="" id="test2" labelText="OmniCoreID" placeholder="username@domain.com" />
                    <Checkbox defaultChecked id="test3" labelText="Remember me"/>
                <div id="buttons-row">
                <Button type="submit" id="test5" className="bg-white text-blue-600">
                        Login with Softlayer
                    </Button>
                    <Button type="submit" id="test4" className="some-class">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    </>
)
}

export default LoginPage
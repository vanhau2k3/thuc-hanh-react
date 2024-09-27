import {useState} from 'react';
function Login(){
    const [inputs, setInputs] = useState({});
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }
    const [isCheck, setCheck] = useState(false);
    const handleChecked = () => {
        setCheck(!isCheck)
    }
    const handleSubmit = () => {
        console.log("Du lieu:"+inputs);
    }


    return(
        <form>
            <label>Nhap ten:<input type="text" name="username" value={inputs.username || ""} onChange={handleChange} /></label><br/>
            <label>Nhap mat khau:<input type="text" name="pass" value={inputs.pass || ""} onChange={handleChange}/></label><br/>
            <label>Admin?:<input type="checkbox" checked={isCheck} onChange={handleChecked}/></label><br/>
            <button>Dang nhap</button>
        </form>
    )
}
export default Login;
import Button from "../button";
import Information from "../information";
import Menu from "../menu";

function App1() {
    const userInfo = 'Tran Van Hau'
   
    return ( 
        <>
        <Information user={userInfo}/>
        <Menu />
        <Button />
        </>
        
     );
}

export default App1;
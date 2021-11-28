
const InlineStyle = () => {

    let renk = "blue";

    return (
        <div 
            style ={{
                fontSize:"3rem", 
                color:"red",                  
                border:"1px solid red",
                backgroundColor:"pink"

            }}
        >
            Bugün <span style={{color:renk}}>hava</span> serin
        </div>
    );
};

export default InlineStyle; 
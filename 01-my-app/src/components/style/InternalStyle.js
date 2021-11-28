
const InternalStyle = () => {

    const styleParagraph = {

        color:"orange",
        fontSize:"2rem"
    };

    const styleSon = {

        color:"blue"
    };

    return (<div style={styleParagraph}>Şöyle somut şeyler <span style={styleSon}> görsek</span></div>

    );

};

export default InternalStyle;
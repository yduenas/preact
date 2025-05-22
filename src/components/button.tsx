interface ButtonProps{
    label: string;
    cssClass? :string;
    handleClick?: ()=> void;
    children?: React.ReactNode;
}
function Button({label,cssClass = 'btn',handleClick} : ButtonProps){
    // const handleClick = () =>{
    //     console.log('Click');
    // }
    // console.log(props,'propiedades');
    // return <button onClick={()=>{ alert(label); }} className={cssClass}>{label}</button>
    return <button onClick={handleClick} className={cssClass}>{label}</button>
}
export default Button
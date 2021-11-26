import success from '../../assets/img/success.svg'
import './CheckBox.scss'

interface CheckBoxInterface{
    isChecked:boolean
    setIsChecked:(value:boolean)=>void
}
const CheckBox = (props:CheckBoxInterface) => {
const {isChecked, setIsChecked} = props

    return (
        <div className={`wrapper-check-box ${isChecked?'checked':'unchecked'}`} onClick={()=>setIsChecked(!isChecked)}>
            {isChecked && <img src={success} alt="success"/>}
        </div>
    );
};

export default CheckBox;
export default function Mycard(props){

    let {name, dob, phone, address} = props.obj
    return(
        <div>
        <p>name : {name}</p>
        <p>dob : {dob}</p>
        <p>phone : {phone}</p>
        <p>address : {address}</p>
        </div>

    )
}
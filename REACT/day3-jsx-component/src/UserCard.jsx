const UserCard = (props) => {
    console.log("Age : ", props.age);
    console.log("state :", props.address.state);



    return (
        <div>
            <h2>Age : {props.age}</h2>
            <h2>State : {props.address.state}</h2>
        </div>
    )

}
export default UserCard;
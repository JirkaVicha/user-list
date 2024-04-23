
const User = ({ oneUser }) => {
  return (
    <>
    <div className="nickname">
      <h3>User: {oneUser.login.username}</h3>
    </div>
      
    <div className="user-card-body">
      <div className="left-side">
        <h3>
          {oneUser.name.title} {oneUser.name.first} {oneUser.name.last}
        </h3>
        <p className="email">Email:</p> 
        <p>{oneUser.email}</p>
        <hr />
        <h4>User for {oneUser.registered.age} years</h4>
        <p>Age: {oneUser.dob.age}</p>
        <p>Nationality: {oneUser.nat}</p>
        <p>Phone: {oneUser.phone}</p>
    </div>
      
      <div className="right-side">
        <img src={oneUser.picture.medium} />
        <p className="address">Address:</p>
        <p>{oneUser.location.street.number} {oneUser.location.street.name}</p>
        <p>{oneUser.location.city}</p> 
        <p>{oneUser.location.postcode} - {oneUser.location.country}</p>
      </div>
    </div>
    

    </>
  )
}

export default User
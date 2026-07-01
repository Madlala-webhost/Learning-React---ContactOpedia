function Contact(props) {
    
  //if you want to update the state of a function, you cannot do that from the child component. You have to update where the state is defined (i.e., contactIndex)
  console.log(props);
  return (
    <div
      className="d-flex p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 pt-2">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
          style={{ borderRadius: "50%", width: "80%" }}
        />
      </div>
      <div className="col-6 text-warning pt-0">
        <span className="h4">{props.contact.name}</span>
        <br />
        <div className="text-white-50">
          {props.contact.email}
          <br />
          {props.contact.phone}
        </div>
      </div>
      <div className="ms-auto d-flex">
        <div className="pt-2">
          <button
            onClick={() => props.favoriteClick(props.contact)} //A function can be used to handle the button clicked data
            className={`btn btn-sm m-1 ${
              props.contact.isFavorite ? `btn-warning` : `btn-outline-warning`
            }`}
          >
            {" "}
            {/*We added a javascript object on the button so that it can be unique based on isFavorite */}
            <i className="bi bi-star-fill"></i>
          </button>
        </div>
        <div className="pt-2">
          <button className="btn btn-info btn-sm m-1" onClick={() => props.updateClick(props.contact)} >{/**We are now sending the data to the updateClick function as an object. props.contact  */}
            {/*Why is it props.contact? Because we need to send the entire contact object to the updateClick function so that it knows which contact to update. why specifically the word contact? Because the function expects an object representing the contact   */}
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
        <div className="pt-2">
          <button onClick={()=> props.deleteClick(props.contact.id)} className="btn btn-danger btn-sm m-1"> {/**We are now sending the data to the deleteClick function */}
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

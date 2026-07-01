import { useState, useEffect } from "react";
function AddContact(props) {
  //here you will recieve and send the handleAddContact data
  const [messages, setMessages] = useState({
    errorMessage: "",
    successMessage: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    //useEffect to prefill the form when isUpdating is true
    if (props.isUpdating && props.selectedContact) {
      // Check if selectedContact is not null
      setFormData({
        name: props.selectedContact.name,
        email: props.selectedContact.email,
        phone: props.selectedContact.phone,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [props.isUpdating, props.selectedContact]);
  //controlled form inputs-allows yu to monitor and update form data in real-time as the user interacts with the form elements.
  function handleFormInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  }
  function handleAddContactForm(formData) {
    // e.preventDefault(); //prevents the console from resetting the data if we use onSubmit instead of action on the form
    // const formData = new FormData(e.target);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      newsletter: formData.get("subscribe") === "on",
      contactMethod: formData.get("contactMethod"),
      interests: formData.getAll("interests[]"),
    };

    try {
      console.log(contactData);
      let response= undefined

      if (props.isUpdating && props.selectedContact) {
        //update
        response = props.handleUpdateContact({
          ...contactData,
          id: props.selectedContact.id, //we need to send the id of the contact to be updated so that we can find it in the contact list and update it. why use the selectedContact.id? Because the selectedContact is the contact that we want to update and it has the id of the contact that we want to update. so we are sending the id of the contact to be updated along with the new data to the handleUpdateContact function in the contactIndex component so that it can find the contact in the contact list and update it with the new data.
          isFavorite: props.selectedContact.isFavorite,
        });
      } else {
        //add new
        response = props.handleAddContact(contactData); //we are sending the contactData object to the handleAddContact function in the contactIndex component so that it can be added to the contact list
      }

      if (response.status == "success") {
        setMessages({
          errorMessage: undefined,
          successMessage: response.message,
        });
        if (!props.isUpdating) {
          setFormData({
            name: "",
            email: "",
            phone: "",
          });
        }
      } else {
        setMessages({
          errorMessage: response.message,
          successMessage: undefined,
        });
      }
    } catch (error) {
      console.error("Error adding contact", error);
    }
    console.log(contactData);
  }
  return (
    <div className="border col-12 text-white p-2">
      <form action={handleAddContactForm}> 
        <div className="row p-2">
          <div className="col-12 text-white-50 text-center h5">
            {props.isUpdating ? "Update Contact" : "Add Contact"}
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              placeholder="Name..."
              name="name"
              value={formData.name}
              onChange={handleFormInputChange}  /*Why are we not taking the value from the formData state? Because we are using controlled components, the value of the input is always taken from the state, and any changes to the input are handled by the onChange event, which updates the state. */
              className="form-control form-control-sm"
             
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              placeholder="Email..."
              name="email"
              value={formData.email}
              onChange={handleFormInputChange}  /*Why are we not taking the value from the formData state? Because we are using controlled components, the value of the input is always taken from the state, and any changes to the input are handled by the onChange event, which updates the state. */
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              placeholder="Phone number..."
              name="phone"
              value={formData.phone}
              onChange={handleFormInputChange}
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 p-1">
            <label>
              <input type="checkbox" name="subscribe" />
              {" Subscribe to our newsletter"}
            </label>
          </div>
          <div className="col-12 p-1">
            Contact Method:
            <label>
              <input
                type="Radio"
                name="contactMethod"
                value="sms"
                defaultChecked
                readOnly
              />
              SMS
              <label />
              <input
                type="Radio"
                name="contactMethod"
                value="email"
                readOnly
              />{" "}
              email
              <label />
              <input
                type="Radio"
                name="contactMethod"
                value="phone"
                readOnly
              />{" "}
              phone
            </label>
          </div>
          <div className="col-12 p-1">
            Interests (select any):
            <label>
              <input type="checkbox" name="interests[]" value="music" />
              music
              <label />
              <input type="checkbox" name="interests[]" value="movies" /> movies
              <label />
              <input type="checkbox" name="interests[]" value="books" /> books
            </label>
          </div>
          {messages.successMessage && (
            <div className="col-12 text-center text-success">
              {messages.successMessage}
            </div>
          )}
          {messages.errorMessage && (
            <div className="col-12 text-center text-danger">
              {messages.errorMessage}
            </div>
          )}
          <div className={`${props.isUpdating ? "col-6" : "col-12"} `}>
            <button className="btn btn-primary btn-sm form-control">
              {props.isUpdating ? "Update" : "Create Contact"}
            </button>
          </div>
          {props.isUpdating && (
            <div className="col-6">
              <button
                className="btn btn-danger btn-sm form-control"
                onClick={() => props.resetUpdate(props.contact)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddContact;

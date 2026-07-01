import getRandomUser from "../../utility/api";
function AddRandomContact(props) {
  const getRandomContact = async () => {
    const data = await getRandomUser();
    if (data && data.results && data.results.length > 0) {
      const user = data.results[0];
      const formattedUser = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
      };
      console.log(formattedUser);
      props.handleAddRandomContact(formattedUser);
    }
  };
  return (
    <div className="col-6">
      <button
        className="btn btn-success form-control btn-sm"
        onClick={getRandomContact}
      >
        Add Random Contact
      </button>
    </div>
  );
}
export default AddRandomContact;

const Contact = () => {
    return (
      <div className="text-center">
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <form>
          <input type="text" className="p-2 m-2 border border-black rounded-lg" placeholder="name" />
          <input type="text" className="p-2 m-2 border border-black rounded-lg" placeholder="message" />
          <button className="p-2 m-2 border border-black rounded-lg bg-gray-200">Submit</button>
        </form>
      </div>
    );
};
export default Contact;
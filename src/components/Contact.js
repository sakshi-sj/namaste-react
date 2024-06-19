const Contact = () => {
    return (
        <div>
            <h1>Contact Us page</h1>
            <h2 className="font-bold text-3xl p-4 m-4">Call Us </h2>
            <form>
               <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
               <input  type="text" className="border border-black p-2 m-2" placeholder="message"/>
               <button className="border border-black p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact;
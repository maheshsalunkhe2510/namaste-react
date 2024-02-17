const ContactUs = () => {
    return (
        <div className="">
            <h1 className="fount bold text-2xl p-4 m-4">contact Us</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2" placeholder="name" />
                <input type="text" className="border border-black m-2 p-2 " placeholder="message" />
                <button className="border border-black p-2 m-2 bg-slate-400 rounded-lg">Submit</button>
            </form>
        </div>)
}

export default ContactUs;
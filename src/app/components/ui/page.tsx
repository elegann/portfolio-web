const page  = () => {
  return <section>
     <div className="cantact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className="cantact-left">
            <div className="cantact-left-title">
                <h2>Contact Me</h2>
                <hr />
            </div>
            <input type="hidden" name="access_key" value="3e853f8b-41b3-4feb-a2a7-795011710444"></input>
            <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required></input>
            <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required></input>
            <textarea name="Messege" placeholder="Your Messege" className="contact-inputs" required ></textarea>
            <button type="submit">Submit <img src="ABZ" alt=""></img></button>
        </form>
    </div>
  </section>
} 
export default page
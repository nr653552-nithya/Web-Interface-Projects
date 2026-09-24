
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setSubmitted(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (
            formData.name === "" ||
            formData.email === "" ||
            formData.subject === "" ||
            formData.message === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        alert("Your message has been submitted successfully!");

        setSubmitted(true);
    }

    function handleClear() {
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });

        setSubmitted(false);
    }

    return (
        <div>
            <header>
                <h1>Contact Me 📩</h1>

                <h2>Let's Connect Together!</h2>

                <p>
                    Thank you for visiting my portfolio.
                    If you have any questions, suggestions
                    or project ideas, you can contact me
                    using the form below.
                </p>

                <p>
                    I would be happy to communicate with you
                    and learn new things through collaboration.
                </p>
            </header>

            <hr />

            <section>
                <h2>Contact Information 📞</h2>

                <h3>My Name</h3>

                <p>
                    Nithya R
                </p>

                <h3>Email Address</h3>

                <p>
                    You can contact me through my email address.
                </p>

                <h3>Location</h3>

                <p>
                    Chennai, Tamil Nadu, India
                </p>

                <h3>Education</h3>

                <p>
                    B.E. Computer Science and Engineering Student
                </p>
            </section>

            <hr />

            <section>
                <h2>Available For 💼</h2>

                <ul>
                    <li>Academic project discussions</li>
                    <li>Student collaborations</li>
                    <li>Web development projects</li>
                    <li>React project discussions</li>
                    <li>Technical learning activities</li>
                    <li>Knowledge sharing</li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>Send Me a Message ✉️</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">
                            Name <span>*</span>
                        </label>

                        <br />

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="email">
                            Email <span>*</span>
                        </label>

                        <br />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="phone">
                            Phone Number
                        </label>

                        <br />

                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="subject">
                            Subject <span>*</span>
                        </label>

                        <br />

                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Enter message subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <br />

                    <div>
                        <label htmlFor="message">
                            Message <span>*</span>
                        </label>

                        <br />

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here"
                            rows="6"
                            cols="40"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <br />

                    <div>
                        <button type="submit">
                            Submit Message
                        </button>

                        {" "}

                        <button
                            type="button"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </form>

                {submitted && (
                    <p>
                        Thank you! Your message was submitted.
                    </p>
                )}
            </section>

            <hr />

            <section>
                <h2>Connect With Me 🌐</h2>

                <p>
                    You can use the following platforms
                    to connect and learn more about me.
                </p>

                <ul>
                    <li>GitHub - My coding projects</li>
                    <li>LinkedIn - My professional profile</li>
                    <li>Email - For communication</li>
                </ul>

                <p>
                    GitHub:
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Visit GitHub
                    </a>
                </p>

                <p>
                    LinkedIn:
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Visit LinkedIn
                    </a>
                </p>
            </section>

            <hr />

            <section>
                <h2>Why Contact Me?</h2>

                <p>
                    Contacting and communicating with others
                    helps me improve my knowledge and confidence.
                    I am interested in discussing technical
                    projects and learning opportunities.
                </p>

                <p>
                    I welcome useful feedback, suggestions
                    and ideas that help me improve my skills.
                </p>
            </section>

            <hr />

            <footer>
                <h3>Thank You for Contacting Me! 😊</h3>

                <p>
                    I appreciate your time and interest
                    in visiting my portfolio.
                </p>

                <p>
                    © 2026 Nithya R | My Portfolio
                </p>
            </footer>
        </div>
    );
}

export default Contact;
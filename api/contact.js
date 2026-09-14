const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const {
            fullName,
            phone,
            email,
            eventType,
            eventDate,
            guests,
            venue,
            message,
        } = req.body;

        await resend.emails.send({
            from: "Pineapple <onboarding@resend.dev>",
            to: "pineappleevents08@gmail.com",

            subject: `New Event Enquiry from ${fullName}`,

            html: `
        <h2>New Event Enquiry</h2>

        <p><b>Name:</b> ${fullName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Event:</b> ${eventType}</p>
        <p><b>Date:</b> ${eventDate}</p>
        <p><b>Guests:</b> ${guests}</p>
        <p><b>Venue:</b> ${venue}</p>

        <hr>

        <p>${message}</p>
      `,
        });

        return res.status(200).json({
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
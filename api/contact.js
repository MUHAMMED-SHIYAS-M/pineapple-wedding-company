export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed",
        });
    }

    try {
        const {
            name,
            phone,
            email,
            eventType,
            eventDate,
            guests,
            venue,
            message,
        } = req.body || {};

        if (!name || !phone || !email || !eventType || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields.",
            });
        }

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error("RESEND_API_KEY is missing");

            return res.status(500).json({
                success: false,
                message: "Email service is not configured.",
            });
        }

        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Pineapple Wedding Company <onboarding@resend.dev>",
                to: ["pineappleevents08@gmail.com"],
                subject: `New Event Enquiry from ${name}`,
                html: `
          <h2>New Event Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Event Date:</strong> ${eventDate || "Not specified"}</p>
          <p><strong>Guests:</strong> ${guests || "Not specified"}</p>
          <p><strong>Venue:</strong> ${venue || "Not specified"}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            }),
        });

        const resendData = await resendResponse.json();

        if (!resendResponse.ok) {
            console.error("Resend error:", resendData);

            return res.status(500).json({
                success: false,
                message: "Resend rejected the email.",
                error: resendData.message || "Unknown Resend error",
            });
        }

        console.log("Email sent successfully:", resendData);

        return res.status(200).json({
            success: true,
            message: "Enquiry sent successfully",
        });

    } catch (error) {
        console.error("Contact API error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send enquiry",
            error: error.message,
        });
    }
}
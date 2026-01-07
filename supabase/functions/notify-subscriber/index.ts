import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    if (!email || !email.includes("@")) {
      console.error("Invalid email provided:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("New subscriber:", email);

    // Send notification to Hosea
    const notificationResponse = await resend.emails.send({
      from: "Hostech <onboarding@resend.dev>",
      to: ["hoseamuriira20@gmail.com"],
      subject: "New Subscriber on Hostech!",
      html: `
        <h1>🎉 New Subscriber Alert!</h1>
        <p>Someone just subscribed to your website!</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        <hr />
        <p style="color: #666;">This notification was sent from your Hostech website.</p>
      `,
    });

    console.log("Notification sent to Hosea:", notificationResponse);

    // Send confirmation to subscriber
    const confirmationResponse = await resend.emails.send({
      from: "Hostech <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Hostech!",
      html: `
        <h1>Thank you for subscribing!</h1>
        <p>Hi there! 👋</p>
        <p>Thank you for subscribing to Hostech. You'll now receive updates on:</p>
        <ul>
          <li>New blog posts and articles</li>
          <li>Tech projects and updates</li>
          <li>Business insights and tips</li>
        </ul>
        <p>Stay tuned for exciting content!</p>
        <p>Best regards,<br>Hosea Muriira</p>
      `,
    });

    console.log("Confirmation sent to subscriber:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in notify-subscriber function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

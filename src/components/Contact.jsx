import { useRef, useState } from "react";

const WEB3_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "2cd6199e-409c-476b-9712-da0611bb191d"; // your public key

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(formRef.current);
      formData.append("access_key", ACCESS_KEY);
      formData.append("subject", "New message from portfolio");

      const res = await fetch(WEB3_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        formRef.current.reset();
      } else {
        setStatus("error");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="text-white/70 mt-2">Emails go straight to my inbox via Web3Forms.</p>
        <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
          <input
            name="name" // 👈 required field name
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-acid"
            required
          />
          <input
            name="email" // 👈 required field name
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-acid"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-acid"
            required
          />
          {/* Honeypot field (anti-spam) */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <button
            disabled={status === "sending"}
            className="px-5 py-3 rounded-xl bg-acid/90 text-ink font-semibold shadow-glow hover:bg-acid disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-emerald-300">Thanks! Your message has been sent..</p>
          )}
          {status === "error" && (
            <p className="text-rose-300">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

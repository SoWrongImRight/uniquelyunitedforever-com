
function ContactPage() {
  return (
    <div className="contact-container" style={{ maxWidth: 650, margin: '0 auto', padding: '2rem 1rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#b76e79', letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase', fontSize: '1.3rem' }}>Contact</h2>
      </header>
      <section style={{ marginBottom: '1.5rem' }}>
        <p>I am hoping to have the opportunity of joining you both in the covenant of marriage. I've officiated many weddings of the young, the aged, the famous, the modest and the wealthy... as you, all were beginning their journey down that narrow path called marriage.</p>
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <p>Regardless of your choice in an officiant, I wish you both much success and unlimited patience with each other. May you experience the true meaning of love with each step of your journey. Blessings on you both.</p>
      </section>
      <section style={{ marginBottom: '2rem', fontWeight: 600, fontSize: '1.1rem' }}>
        <p>Now... let's make your special day happen.</p>
      </section>
      {/* Contact info or form can be added here */}
    </div>
  );
}

export default ContactPage;

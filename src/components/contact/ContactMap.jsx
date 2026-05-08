// src/components/contact/ContactMap.jsx

export default function ContactMap() {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden">
      <iframe
        title="Carte"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3707843589267!2d-0.6778420236379075!3d44.82758167107082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d9e123456789%3A0xabcdef123456789!2s12%20Av.%20Pierre%20Mend%C3%A8s%20France%2C%2033700%20M%C3%A9rignac!5e0!3m2!1sfr!2sfr!4v1735577600000!5m2!1sfr!2sfr"
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block"
      />
    </div>
  );
}
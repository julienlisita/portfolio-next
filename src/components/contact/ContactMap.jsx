// src/components/contact/ContactMap.jsx

export default function ContactMap() {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden">
      <iframe
        title="Carte"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.8112437251268!2d-0.594822425611723!3d44.84985567107044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552807e3efef0f%3A0xe78aa25fbdc4a8f7!2s63%20Rue%20Ernest%20Renan%2C%2033000%20Bordeaux!5e1!3m2!1sfr!2sfr!4v1789407639507!5m2!1sfr!2sfr"
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
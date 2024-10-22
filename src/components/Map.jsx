function Map() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110502.77781313457!2d31.175890817825216!3d30.05946265418852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1729635382041!5m2!1sen!2seg"
        width="400"
        height="300"
        className="min-w-full min-h-full"
        // style="border:0;"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
      ></iframe>
    </div>
  );
}

export default Map;

import React, { useEffect, useRef } from "react";


const feedbacks = [
  {
    img: "https://i.pravatar.cc/100?img=1",
    name: "Ronald Richards",
    text: "Excepteur sint occaecat cupidatat non proident..."
  },
  {
    img: "https://i.pravatar.cc/100?img=2",
    name: "Wade Warren",
    text: "Cillum dolore eu fugiat nulla pariatur..."
  },
  {
    img: "https://i.pravatar.cc/100?img=3",
    name: "Jacob Jones",
    text: "Esse cillum dolore eu fugiat nulla pariatur..."
  },
  {
    img: "https://i.pravatar.cc/100?img=4",
    name: "Jane Cooper",
    text: "Duis aute irure dolor in reprehenderit..."
  }
];

const AboutUs = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("show");
          } else {
            el.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2, // Kartaning 20% ko‘rinsa yetarli
      }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about-container">
      <div className="cards">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img src={item.img} alt={item.name} className="avatar" />
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

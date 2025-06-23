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
    <div>

      <div className="container">
        <div className='teachers'>
          <h1 className='teache'>O'qituvchilar</h1>
        </div>
        <div className="cards">
          <div className="card">
            <img src="https://i.pravatar.cc/100?img=1" alt="person" className="avatar" />
            <h3>Ronald Richards</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
          </div>

          <div className="card">
            <img src="https://i.pravatar.cc/100?img=2" alt="person" className="avatar" />
            <h3>Wade Warren</h3>
            <p>
              Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse.
            </p>
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
          </div>

          <div className="card">
            <img src="https://i.pravatar.cc/100?img=3" alt="person" className="avatar" />
            <h3>Jacob Jones</h3>
            <p>
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐ </div>
          </div>
          <div className="card">
            <img src="https://i.pravatar.cc/100?img=3" alt="person" className="avatar" />
            <h3>Jacob Jones</h3>
            <p>
              Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐ </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

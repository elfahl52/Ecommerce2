import React from "react";
import Slider from "react-slick";

// ⚠️ هام جداً: استيراد ملفات التنسيق الخاصة بـ slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  = () => {
  // إعدادات السلايدر
  const settings = {
    dots: true,            // إظهار النقاط في الأسفل
    infinite: true,        // تكرار السلايدر (Loop)
    speed: 600,            // سرعة الانتقال بالميلي ثانية
    slidesToShow: 1,       // عدد الشرائح المعروضة في نفس الوقت
    slidesToScroll: 1,     // عدد الشرائح التي يتم التمرير فيها
    autoplay: true,        // تشغيل تلقائي
    autoplaySpeed: 3000,   // وقت الانتظار بين كل شريحة (3 ثواني)
    cssEase: "linear",     // نوع حركة الانتقال
    pauseOnHover: true,    // إيقاف التشغيل التلقائي عند تمرير الماوس
  };
 
  // بيانات الشرائح (يمكن استبدالها بـ props)
  const slides = [
    { id: 1, image: "https://picsum.photos/800/400?random=1", title: "الشريحة الأولى" },
    { id: 2, image: "https://picsum.photos/800/400?random=2", title: "الشريحة الثانية" },
    { id: 3, image: "https://picsum.photos/800/400?random=3", title: "الشريحة الثالثة" },
  ];

  return (
    <div className="slider-container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            {/* يمكنك وضع أي محتوى هنا، صور، نصوص، أو مكونات */}
            <div style={{ position: "relative", textAlign: "center" }}>
              <img 
                src={slide.image} 
                alt={slide.title} 
                style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" }} 
              />
              <h3 style={{ 
                position: "absolute", 
                bottom: "20px", 
                left: "50%", 
                transform: "translateX(-50%)", 
                color: "white", 
                background: "rgba(0,0,0,0.5)", 
                padding: "5px 15px", 
                borderRadius: "8px" 
              }}>
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ;
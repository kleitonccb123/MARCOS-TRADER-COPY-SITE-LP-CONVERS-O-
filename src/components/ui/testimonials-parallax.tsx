"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const TestimonialsParallax = ({
  testimonials,
}: {
  testimonials: {
    title: string;
    content: string;
    image: string;
  }[];
}) => {
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 10);
  const thirdRow = testimonials.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[200vh] md:h-[300vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-10 md:mb-20">
          {firstRow.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              translate={translateX}
              key={testimonial.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 md:mb-20 space-x-4 md:space-x-20">
          {secondRow.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              translate={translateXReverse}
              key={testimonial.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20">
          {thirdRow.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              translate={translateX}
              key={testimonial.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-3xl md:text-7xl font-bold text-text-primary text-center">
        Depoimentos Reais <br /> dos Nossos Alunos
      </h1>
      <p className="max-w-2xl text-sm md:text-xl mt-4 md:mt-8 text-text-muted mx-auto text-center">
        Veja os resultados incríveis que nossos alunos estão conquistando com o 
        Copy PricePro. Cada imagem representa uma história real de sucesso.
      </p>
    </div>
  );
};

export const TestimonialCard = ({
  testimonial,
  translate,
}: {
  testimonial: {
    title: string;
    content: string;
    image: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={testimonial.title}
      className="group/testimonial relative shrink-0"
    >
      <div className="block group-hover/testimonial:shadow-2xl">
        <img
          src={testimonial.image}
          className="rounded-lg shadow-lg max-w-none object-contain"
          alt={testimonial.title}
          style={{ 
            width: 'auto', 
            height: 'auto',
            maxHeight: '400px',
            maxWidth: '280px'
          }}
        />
      </div>
      <div className="absolute inset-0 opacity-0 group-hover/testimonial:opacity-90 bg-background/95 pointer-events-none rounded-lg transition-opacity duration-300"></div>
      <div className="absolute inset-4 opacity-0 group-hover/testimonial:opacity-100 text-text-primary transition-opacity duration-300 flex flex-col justify-center">
        <h2 className="font-bold text-lg mb-2">{testimonial.title}</h2>
        <p className="text-sm leading-relaxed">{testimonial.content}</p>
      </div>
    </motion.div>
  );
};
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    number: '01',
    name: 'Dr. Nitin Jani',
    role: 'SOCIAL WORKER / CEO',
    img:'./khajur-1.jpg'
  },
  {
    number: '02',
    name: 'Dr. Tarun Jani',
    role: 'CO-FOUNDER',
    img:'./khajur-2.jpg'
  },
  {
    number: '03',
    name: 'Mahesh Dada',
    role: 'SOCIAL WORKER',
    img:'./khajur-3.jpg'
  },
  {
    number: '04',
    name: 'Dr. Vishal Bhatt',
    role: 'PRESIDENT',
    img:'./khajur-4.jpg'
  },
  {
    number: '05',
    name: 'Dr. Agrawal',
    role: 'SOCIAL ACTIVE WORKER',
    img:'./khajur-5.jpg'
  },
];

const Page4 = () => {
  const listRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const listItems = listRef.current
      ? Array.from(listRef.current.querySelectorAll('.listelem'))
      : [];
    const handlers = [];

    listItems.forEach((el) => {
      const picture = el.querySelector('.picture');
      if (!picture) return;

      const mouseMoveHandler = (e) => {
        gsap.to(picture, {
          opacity: 1,
          x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
          ease: 'power4.out',
          duration: 0.4,
        });
      };

      const mouseLeaveHandler = () => {
        gsap.to(picture, {
          opacity: 0,
          x: 0,
          ease: 'power4.out',
          duration: 0.8,
        });
      };

      el.addEventListener('mousemove', mouseMoveHandler);
      el.addEventListener('mouseleave', mouseLeaveHandler);

      handlers.push({ el, mouseMoveHandler, mouseLeaveHandler });
    });

    // --- Scroll Animation for Paragraph ---
    const el = paraRef.current;
    let originalText = '';
    if (el) {
      originalText = el.textContent || '';
      let clutter = '';
      originalText.split('').forEach((e) => {
        clutter += e === ' care of'|| e ==='offering'|| e ==='into a' || e === 'oil;' || e === 'purity,' ? `<span><br></span>` : `<span>${e}</span>`;
      });
      el.innerHTML = clutter;

      const spans = el.querySelectorAll('span');
      gsap.set(spans, { opacity: 0.1 });

      gsap.to(spans, {
        scrollTrigger: {
          trigger: el,
          start: 'top 50%',
          end: 'bottom 80%',
          scrub: 2,
        },
        opacity: 1,
        ease: 'power4.out',
        stagger: {
          amount: 0.4,
        },
      });
    }

    return () => {
      handlers.forEach(({ el, mouseMoveHandler, mouseLeaveHandler }) => {
        el.removeEventListener('mousemove', mouseMoveHandler);
        el.removeEventListener('mouseleave', mouseLeaveHandler);
      });
      if (el && originalText) {
        el.textContent = originalText;
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="teamsection text-black py-20 bg-[#FEE685]">
        <h1 className="text-center font-medium text-8xl tracking-tight text-white">Our Team</h1>
        <div className="list w-full px-10 mt-16 text-white" ref={listRef}>
          {teamMembers.map((member,index) => (
            <div
              className="listelem w-full py-10 border-b-2 border-black relative"
              key={member.number}
            >
              <div className="relative flex items-center justify-between z-[3]">
                <div className="left flex gap-10 items-center">
                  <h3 className="text-5xl font-medium opacity-50">{member.number}</h3>
                  <h1 className="text-5xl font-medium">{member.name}</h1>
                </div>
                <h3 className="text-3xl">{member.role}</h3>
              </div>
              <div className="picture pointer-events-none opacity-0 w-60 h-60 overflow-hidden rounded-full bg-red-400 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img className="w-full h-full object-cover" src={member.img} alt="" />
              </div>
              <div
                className="bluelayer w-full h-full bg-blue-500 absolute z-[2] bottom-0 left-0"
                ref={el => member.bluelayerRef = el}
                onMouseEnter={e => {
                  if (member.bluelayerRef) {
                    gsap.to(member.bluelayerRef, {
                      height: "10%",
                      top: 0,
                      bottom: "auto",
                      opacity: 0.5,
                      duration: 0.5,
                      ease: "power2.out"
                    });
                  }
                }}
                onMouseLeave={e => {
                  if (member.bluelayerRef) {
                    gsap.to(member.bluelayerRef, {
                      height: 0,
                      top: "auto",
                      bottom: 0,
                      opacity: 0,
                      duration: 0.5,
                      ease: "power2.in"
                    });
                  }
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="para w-full h-[70vh] mt-[2rem] flex items-center justify-center bg-[#FEE685] text-white">
        <div className="text w-[70%] flex flex-col items-center justify-center">
          <h3
            ref={paraRef}
            className="textpara text-3xl font-medium text-center"
          >
            Each drop of Khajurbhai Singtel carries the warmth of Gujarati soil, the care of
            traditional methods, and the promise of health for every family. We believe in offering
            not just oil, but a legacy of trust and purity that transforms every meal into a
            celebration of health and flavor. At Khajurbhai Singtel, we’re not just selling oil;
            we’re sharing a piece of Gujarat’s heritage with you. Join us in embracing purity,
            tradition, and the love of a land that nourishes us all.
          </h3>
          <div className="pers flex flex-col items-center justify-center mt-10 gap-3">
            <div className="image w-32 h-32 overflow-hidden rounded-full bg-red-600">
              <img className='h-full w-full object-cover' src="./khajur-1.jpg" alt="" />
              </div>
            <h1 className="text-3xl font-medium">Nitin Jani</h1>
            <h3 className="text-xl">Product Manager @ Social-Worker</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;

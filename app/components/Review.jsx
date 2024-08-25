import Image from "next/image";

const testimonials = [
  {
    name: "Jason Bay",
    profileImageUrl:"/CEO.png",
    rating: 5,
    profile_image_url: "url_to_jason_image",
    testimonial:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    name: "Nany Brugman",
    profileImageUrl:"/CEO.png",
    rating: 5,
    profile_image_url: "url_to_nany_image",
    testimonial:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    name: "Alexa Nowan",
    profileImageUrl:"/CEO.png",
    rating: 5,
    profile_image_url: "url_to_alexa_image",
    testimonial:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
];

export default function Review() {
  return (
    <div className="py-[87px] px-20 bg-[#F8F8F8]">
      <div className=" max-w-[635px] mx-auto">
      <h3 className="text-lg lg:text-4x font-semibold pb-7 text-center">
        What do they
        <span className="text-primary-500"> say?</span>
      </h3>
      <p className="text-[#808080] text-center text-xs lg:text-base">
        by subscribing now you will be able to access the material easily and
        cheaply, so you will be very efficient and benefit
      </p>
      </div>
      <div className="flex justify-center gap-8 py-10 overflow-x-scroll no-scrollbar">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center min-w-[335px] lg:min-w-[413px]"
          >
            <div className="flex justify-center">
              <Image
                src={testimonial.profileImageUrl}
                alt={testimonial.name}
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
            <div className="text-yellow-500 mt-2">
              {"★".repeat(testimonial.rating)}
            </div>
            <p className="mt-4 text-gray-600 italic">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
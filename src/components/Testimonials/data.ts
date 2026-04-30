import avatar1 from "../../assets/testimonials_images/avatars/avatar1.png";
import avatar2 from "../../assets/testimonials_images/avatars/avatar2.png";
import avatar3 from "../../assets/testimonials_images/avatars/avatar3.png";
import avatar4 from "../../assets/testimonials_images/avatars/avatar4.png";

export interface Testimonial {
  id: number;
  title: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    title: "Placerat feugiat senectus",
    quote:
      "Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.",
    authorName: "Jane Doe",
    authorRole: "Senior Designer",
    authorAvatar: avatar1,
  },
  {
    id: 2,
    title: "Excellent Service",
    quote:
      "Another amazing testimonial text goes here to test the slider movement and layout consistency.",
    authorName: "John Smith",
    authorRole: "Full Stack Developer",
    authorAvatar: avatar2,
  },
  {
    id: 3,
    title: "Game Changer for our Team",
    quote:
      "Implementing this solution allowed us to iterate twice as fast. The attention to detail in the UI components is truly impressive. Highly recommended for any scaling startup.",
    authorName: "Sarah Chen",
    authorRole: "Product Manager",
    authorAvatar: avatar3,
  },
  {
    id: 4,
    title: "Intuitive and Powerful",
    quote:
      "I've tried many similar platforms, but this one stands out due to its simplicity. It didn't take more than an hour to get everything integrated and running smoothly.",
    authorName: "Alex Rivera",
    authorRole: "UX Engineer",
    authorAvatar: avatar4,
  },
  {
    id: 5,
    title: "Top-tier Support",
    quote:
      "Beyond the great features, the support team is incredible. They helped me solve a complex configuration issue in minutes. You really feel like they care about your success.",
    authorName: "Maria Garcia",
    authorRole: "CTO @ TechFlow",
    authorAvatar: avatar1,
  },
];

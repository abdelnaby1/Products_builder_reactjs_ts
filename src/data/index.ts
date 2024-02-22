import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Nike Shoes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "350",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    category: {
      name: "Nike",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
  {
    id: uuid(),
    title: "Casual Men Clothes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "1500",
    colors: [],
    category: {
      name: "PC Desktop",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
  {
    id: uuid(),
    title: "Nike Shoes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "350",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#820000",
      "#13005A",
      "#1F8A70",
      "#84D2C5",
    ],
    category: {
      name: "Nike",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
  {
    id: uuid(),
    title: "Casual Men Clothes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    price: "1500",
    colors: ["#13005A","#1F8A70",],
    category: {
      name: "PC Desktop",
      imageURL:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Nike",
    imageURL:
      "https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    id: uuid(),
    name: "Furniture",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    id: uuid(),
    name: "Cars",
    imageURL:
      "https://car-images.bauersecure.com/wp-images/164826/best_electric_luxury_car_bmw_i7.jpg",
  },
  {
    id: uuid(),
    name: "Camera",
    imageURL:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
];
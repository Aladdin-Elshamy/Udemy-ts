import { IImage } from "../interfaces";

export const images: IImage[] = [
    {
        title: "banner 1",
        url: ["./images/Udemy-banner-mobile.jpg", "./images/Udemy-banner-desktop.jpg"]
    },
    {
        title: "banner 2",
        url: ["./images/Udemy-banner-mobile.jpg", "./images/Udemy-banner-desktop.jpg"]
    }

]

export const udemyCategories = [
   
    {
      
      category: "Development",
      subcategories: [
        {
          subcategory: "Web Development",
        },
        {
          subcategory: "Data Science",
        },
        {
          subcategory: "Mobile Development",
        }
      ]
    },
    {
      category: "Business",
      subcategories: [
        {
          subcategory: "Entrepreneurship",
        },
        {
          subcategory: "Communication",
        }
      ]
    },
    {
      category: "IT & Software",
      subcategories: [
        {
          subcategory: "Network & Security",
        },
        {
          subcategory: "Hardware",
        }
      ]
    },
    {
      category: "Design",
      subcategories: [
        {
          subcategory: "Graphic Design",
        },
        {
          subcategory: "User Experience",
        }
      ]
    },
    {
      category: "All Categories",
      subcategories: [
        {
          subcategory: "Development",
          topics: ["Web Development", "Data Science", "Mobile Development"]
        },
        {
          subcategory: "Business",
          topics: ["Entrepreneurship", "Communication"]
        },
        {
          subcategory: "IT & Software",
          topics: ["Network & Security", "Hardware"]
        },
        {
          subcategory: "Lifestyle",
          topics: ["Personal Development", "Finance"]
        }
      ]
    },
  ];
  
export const udemyCategoriesDesktop =[
  {
    category: "Development",
    subcategories: [
      {
        subcategory: "Web Development",
        topics: ["HTML", "CSS", "JavaScript", "React", "Angular"]
      },
      {
        subcategory: "Data Science",
        topics: ["Python", "Machine Learning", "R Programming", "Data Analysis"]
      },
      {
        subcategory: "Mobile Development",
        topics: ["iOS Development", "Android Development", "React Native", "Flutter"]
      }
    ]
  },
  {
    category: "Business",
    subcategories: [
      {
        subcategory: "Entrepreneurship",
        topics: ["Startup", "Business Strategy", "Business Plan"]
      },
      {
        subcategory: "Communication",
        topics: ["Public Speaking", "Presentation Skills", "Writing"]
      }
    ]
  },
  {
    category: "IT & Software",
    subcategories: [
      {
        subcategory: "Network & Security",
        topics: ["Cyber Security", "Ethical Hacking", "Network Fundamentals"]
      },
      {
        subcategory: "Hardware",
        topics: ["Computer Repair", "Operating Systems"]
      }
    ]
  },
  {
    category: "Design",
    subcategories: [
      {
        subcategory: "Graphic Design",
        topics: ["Photoshop", "Illustrator", "InDesign"]
      },
      {
        subcategory: "User Experience",
        topics: ["UX Design", "Wireframing", "Prototyping"]
      }
    ]
  }
]
import React from "react";
import "./Blogs.css";
import patient_1 from "../../../images/patient_1.png";
import BlogPost from "../BlogPost/BlogPost";

const theDate = new Date();
const currentDate = theDate.getDate() + ' ' + (theDate.getMonth() + 1) + ' ' +theDate.getFullYear();


const blogPost = [
  {
    name: "John China",
    image: patient_1,
    date: currentDate,
    title: "2 Times Brush A Day Keeps The Dentist Away",
    Description: "",
  },
  {
    name: "Undertaker",
    image: patient_1,
    date: currentDate,
    title: "Tooth are our valuable things",
    Description: "",
  },
  {
    name: "Roman Rainge",
    image: patient_1,
    date: currentDate,
    title: "Big Big Celebraties are visiting Dentist everyday",
    Description: "",
  },
];

const Blogs = () => {
  return (
    <section className="Blogs-section mt-5 pt-5">
      <div className="Blogs-container">
        <div className="text-center">
          <h5 style={{color:'#10CFE4'}}>Our Blogs</h5>
          <h1>From Our Blog News</h1>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {
              blogPost.map(blog => <BlogPost blog={blog}></BlogPost>)
          }
        </div>
      </div>
    </section>
  );
};

export default Blogs;

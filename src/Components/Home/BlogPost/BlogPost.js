import React from "react";

const BlogPost = ({ blog }) => {
  return (
    <div>
      <div className="col">
        <div style={{minHeight:'348px'}} className="card h-100">
          <div class="card-header bg-white border-bottom-0">
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <img src={blog.image} className="w-50" alt="" />
              </div>
              <div className="">
                <span className="d-block" style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {blog.name}
                </span>
                <small className="fw-bold">{blog.date}</small>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              inventore ea provident minima dolores? Natus perspiciatis, rem
              dolore delectus quas, nihil veritatis amet non sed quasi deleniti
              fugiat accusantium voluptas vel voluptatem doloribus numquam magni
              aliquid earum nam quos. Quod?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader";

//Custom Components

import Home from "../pages/home";
import About from "../pages/about";
import FinalExamLive from "../pages/final-exam-live";
import Course from "../pages/course";
import CourseMagister from "../pages/course-magister";

import CourseDetails from "../pages/course/course-details";
import Instructor from "../pages/instructor";
import InstructorDetails from "../pages/instructor/instructor-details";
import Event from "../pages/event";
import EventSidebar from "../pages/event/event-sidebar";
import EventDetails from "../pages/event/event-details";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog/blog-details";
import Contact from "../pages/contact";
import Error from "../pages/404";
import LoadTop from "../components/ScrollTop/LoadTop";
import CourseMagisterDetails from "../pages/course-magister/course-details";
import InstructorDetails2 from "../pages/instructor-2/instructor-details";
import InstructorDetails5 from "../pages/instructor-5/instructor-details";
import InstructorDetails7 from "../pages/instructor-7/instructor-details";
import Tuzilma from "../pages/tuzilma";
import Rahbariyat from "../pages/rahbariyat";
import InstructorDetails12 from "../pages/instructor-12/instructor-details";
import InstructorDetails77 from "../pages/instructor-77/instructor-details";
import ResearchMain from "../pages/research";
import CultureEducation from "../pages/culture-education";
import InternationalRelations from "../pages/international-relations";
import InstructorDetails6 from "../pages/instructor-6/instructor-details";
import InstructorDetails13 from "../pages/instructor-13/instructor-details";
import InstructorDetails14 from "../pages/instructor-14/instructor-details";
import InstructorDetails15 from "../pages/instructor-15/instructor-details";
import InstructorDetails16 from "../pages/instructor-16/instructor-details";
import InstructorDetails17 from "../pages/instructor-17/instructor-details";
import InstructorDetails18 from "../pages/instructor-18/instructor-details";
import InstructorDetails19 from "../pages/instructor-19/instructor-details";
import InstructorDetails20 from "../pages/instructor-20/instructor-details";
import InstructorDetails21 from "../pages/instructor-21/instructor-details";
import InstructorDetails22 from "../pages/instructor-22/instructor-details";
import InstructorDetails23 from "../pages/instructor-23/instructor-details";
import Faculties from "../pages/faculties";
import Faculties1 from "../pages/faculties-1";
import Faculties10 from "../pages/faculties-10";
import Faculties8 from "../pages/faculties-8";
import Faculties11 from "../pages/faculties-11";
import Faculties2 from "../pages/faculties-2";
import Faculties3 from "../pages/faculties-3";
import Faculties4 from "../pages/faculties-4";
import Faculties5 from "../pages/faculties-5";
import Faculties6 from "../pages/faculties-6";
import Faculties7 from "../pages/faculties-7";
import Faculties12 from "../pages/faculties-12";
import InstructorDetails38 from "../pages/instructor-38/instructor-details";
import Faculties9 from "../pages/faculties-9";
import InstructorDetails1 from "../pages/instructor-1/instructor-details";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Preloader /> : ""}
      <>
        <LoadTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/final-exams" element={<FinalExamLive />} />
          <Route path="/departments" exact element={<Course />} />
          <Route
            path="/departments-magister"
            exact
            element={<CourseMagister />}
          />

          <Route
            path="/departments-magister/:id"
            exact
            element={<CourseMagisterDetails />}
          />
          <Route path="/departments/:id" element={<CourseDetails />} />
          <Route path="/event" exact element={<Event />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event-sidebar" element={<EventSidebar />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/tuzilma" exact element={<Tuzilma />} />
          <Route path="/rahbariyat" exact element={<Rahbariyat />} />
          {/* <Route path="/universitet-kengash" exact element={<Kengash />} /> */}

          <Route path="/instructor" exact element={<Instructor />} />
          <Route path="/instructor/1" exact element={<InstructorDetails1 />} />
          <Route path="/instructor/2" exact element={<InstructorDetails2 />} />
          <Route path="/instructor/6" exact element={<InstructorDetails6 />} />
          <Route path="/instructor/5" exact element={<InstructorDetails5 />} />
          <Route path="/instructor/7" exact element={<InstructorDetails7 />} />
          <Route
            path="/instructor/12"
            exact
            element={<InstructorDetails12 />}
          />
          <Route
            path="/instructor/13"
            exact
            element={<InstructorDetails13 />}
          />
          <Route
            path="/instructor/14"
            exact
            element={<InstructorDetails14 />}
          />
          <Route
            path="/instructor/15"
            exact
            element={<InstructorDetails15 />}
          />
          <Route
            path="/instructor/16"
            exact
            element={<InstructorDetails16 />}
          />
          <Route
            path="/instructor/17"
            exact
            element={<InstructorDetails17 />}
          />
          <Route
            path="/instructor/18"
            exact
            element={<InstructorDetails18 />}
          />
          <Route
            path="/instructor/19"
            exact
            element={<InstructorDetails19 />}
          />
          <Route
            path="/instructor/20"
            exact
            element={<InstructorDetails20 />}
          />
          <Route
            path="/instructor/21"
            exact
            element={<InstructorDetails21 />}
          />
          <Route
            path="/instructor/22"
            exact
            element={<InstructorDetails22 />}
          />
          <Route
            path="/instructor/23"
            exact
            element={<InstructorDetails23 />}
          />
          <Route
            path="/instructor/38"
            exact
            element={<InstructorDetails38 />}
          />

          <Route
            path="/instructor/77"
            exact
            element={<InstructorDetails77 />}
          />

          <Route path="faculties" exact element={<Faculties />} />
          <Route path="faculties/1" exact element={<Faculties1 />} />
          <Route path="faculties/2" exact element={<Faculties2 />} />
          <Route path="faculties/3" exact element={<Faculties3 />} />
          <Route path="faculties/4" exact element={<Faculties4 />} />
          <Route path="faculties/5" exact element={<Faculties5 />} />
          <Route path="faculties/6" exact element={<Faculties6 />} />
          <Route path="faculties/7" exact element={<Faculties7 />} />
          {/* <Route path="faculties/1" exact element={<Faculties2 />} />
          <Route path="faculties/1" exact element={<Faculties3 />} /> */}

          <Route path="faculties/8" exact element={<Faculties8 />} />
          <Route path="faculties/8" exact element={<Faculties8 />} />
          <Route path="faculties/9" exact element={<Faculties9 />} />

          <Route path="faculties/10" exact element={<Faculties10 />} />
          <Route path="faculties/11" exact element={<Faculties11 />} />
          <Route path="faculties/12" exact element={<Faculties12 />} />

          <Route path="/research" exact element={<ResearchMain />} />
          <Route
            path="/international-relations"
            exact
            element={<InternationalRelations />}
          />

          <Route
            path="/culture-education"
            exact
            element={<CultureEducation />}
          />

          <Route path="/instructor/:id" exact element={<InstructorDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </div>
  );
};

export default App;


import Card from "./Card";
import React, { useState } from "react";
import Empty from "./Empty";
function Cards({ courses, category }) {



    const [likedCourses, setLikedCourses] = useState([]);


    const getCourses = () => {
        let allCourse = [];

        if (category === "All") {
            // console.log(courses );
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourse.push(course);
                })
            })
            return allCourse;
        }
        else {
            // console.log(courses[title]);
            return courses[category];
        }

    }


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">

            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }

        </div>
    )
}

export default Cards;
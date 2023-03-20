import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
function Card({ id, course, likedCourses, setLikedCourses }) {

    

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //already liked course
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like Removed");
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Like Added");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden text-white">
            <div className="relative">
                <img src={course.image.url}></img>
                <div className="w-[40px] h-[40px] absolute right-2 -bottom-4 rounded-full bg-white grid place-items-center">
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? < FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
                    </button>
                </div>
            </div>
            <div className="p-4 ">
                <p className="font-semibold text-md leading-6">{course.title}</p>
                <p className="mt-2">{course.description.length>100 ?  course.description.substring(0, 100) + "..." : course.description}</p>
            </div>
        </div>
    )
}

export default Card;
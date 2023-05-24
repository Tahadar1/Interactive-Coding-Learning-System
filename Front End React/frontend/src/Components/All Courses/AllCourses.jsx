import React, {useEffect} from 'react'

const AllCourses = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      axios
        .get("http://127.0.0.1:5000/api/v1/all_course", {
          headers: {
            "x-access-token": `${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        });
    } catch (error) {
      console.log("==>err==>", error);
    }
  }, []);
  return (
    <div>AllCourses</div>
  )
}

export default AllCourses
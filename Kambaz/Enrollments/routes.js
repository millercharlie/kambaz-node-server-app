import EnrollmentsDao from "./dao.js";

const EnrollmentsRoutes = (app, db) => {
  const dao = EnrollmentsDao(db);
  const findCoursesForEnrolledUser = async (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }
    const courses = await dao.findCoursesForUser(userId);
    res.json(courses);
  };
  const enrollUserInCourse = (req, res) => {
    const { userId } = req.params;
    const enrollment = {
      ...req.body,
      userId,
    };
    const newEnrollment = dao.enrollUserInCourse(userId, enrollment.userId);
    res.send(newEnrollment);
  };
  const unenrollUserFromCourse = (req, res) => {
    const { enrollmentId } = req.params;
    const status = dao.unenrollUserFromCourse(enrollmentId);
    res.send(status);
  };

  app.post("/api/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments/:enrollmentId", unenrollUserFromCourse);
  app.get("/api/enrollments/:userId", findCoursesForEnrolledUser);
}

export default EnrollmentsRoutes;
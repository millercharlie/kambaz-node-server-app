import EnrollmentsDao from "./dao.js";

const EnrollmentsRoutes = (app, db) => {
  const dao = EnrollmentsDao(db);
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
  const fetchEnrollments = (req, res) => {
    const status = dao.fetchEnrollments();
    res.send(status);
  };

  app.post("/api/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments/:enrollmentId", unenrollUserFromCourse);
  app.get("/api/enrollments/", fetchEnrollments);
}

export default EnrollmentsRoutes;
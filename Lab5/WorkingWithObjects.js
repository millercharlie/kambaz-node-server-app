const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};
const module = {
  id: 'module_1', name: "Module 1 Name",
  description: "Module 1 Description",
  course: "Module 1 Course",
};

export default function WorkingWithObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getModule = (req, res) => {
    res.json(module);
  };

  const getAssignmentTitle = (req, res) => {
    res.json(assignment.title);
  };
  const getModuleName = (req, res) => {
    res.json(module.name);
  };
  const getModuleDescription = (req, res) => {
    res.json(module.description);
  };
  const getAssignmentScore = (req, res) => {
    res.json(assignment.score);
  };
  const getAssignmentCompleted = (req, res) => {
    res.json(assignment.completed);
  };

  const setAssignmentTitle = (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  };
  const setAssignmentScore = (req, res) => {
    const { newScore } = req.params;
    assignment.score = parseInt(newScore);
    res.json(assignment);
  };
  const setAssignmentCompleted = (req, res) => {
    const { newCompleted } = req.params;
    assignment.completed = newCompleted;
    res.json(assignment);
  };
  const setModuleName = (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  };
  const setModuleDescription = (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  };

  app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
  app.get("/lab5/assignment/title", getAssignmentTitle);
  app.get("/lab5/assignment/score/:newScore", setAssignmentScore);
  app.get("/lab5/assignment/score", getAssignmentScore);
  app.get("/lab5/assignment/completed/:newCompleted", setAssignmentCompleted);
  app.get("/lab5/assignment/completed", getAssignmentCompleted);
  app.get("/lab5/assignment", getAssignment);
  app.get("/lab5/module", getModule);
  app.get("/lab5/module/name", getModuleName);
  app.get("/lab5/module/name/:newName", setModuleName);
  app.get("/lab5/module/description", getModuleDescription);
  app.get("/lab5/module/description/:newDescription", setModuleDescription);
};

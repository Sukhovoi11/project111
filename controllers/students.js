let students = [];
let nextId = 1;

const addStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    const newStudent = {
        id: nextId,
        fullName,
        code,
        fieldOfStudies
    };
    students.push(newStudent);
    nextId++;
    res.redirect('/success');
};

const getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', { title: 'Success' });
};

const getStudentsListPage = (req, res) => {
    res.render('List', { title: 'Students List', students });
};

module.exports = {
    addStudent,
    getAddingNewStudentSuccessPage,
    getStudentsListPage
};
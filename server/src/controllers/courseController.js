const Course = require('../models/modelCourse');

const getCourse = async (req, res) => {
    try {
        const courses = await Course.find({}).sort({ createdAt: -1 });
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getsingCourse = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }
    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCourse = async (req, res) => {
    const { courseName, courseId, duration, description } = req.body;
    try {
        const newCourse = await Course.create({ courseName, courseId, duration, description });
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createCourse,
    getsingCourse,
    getCourse
};

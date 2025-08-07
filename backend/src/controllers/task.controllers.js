import Task from "../model/task.model.js";

// GET all tasks for the logged-in user
export async function getalltasks(req, res) {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.status(200).json(tasks);
  } catch (error) {
    console.log("Error in getalltasks", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// CREATE task for logged-in user
export async function createalltasks(req, res) {
  try {
    const { title, content } = req.body;

    const newTask = new Task({
      title,
      content,
      user: req.user._id, // Link task to the logged-in user
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.log("Error in createalltasks", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// DELETE a task (only if it belongs to logged-in user)
export async function updatealltasks(req, res) {
  try {
    const deletedTask = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deletedTask)
      return res.status(404).json({ message: "Task not found or unauthorized" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("Error in updatealltasks", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// UPDATE a task (only if it belongs to logged-in user)
export async function deletealltasks(req, res) {
  try {
    const { title, content } = req.body;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, content },
      { new: true }
    );

    if (!updatedTask)
      return res.status(404).json({ message: "Task not found or unauthorized" });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log("Error in deletealltasks", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// GET a specific task (only if it belongs to logged-in user)
export async function gettasksbyid(req, res) {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task)
      return res.status(404).json({ message: "Task not found or unauthorized" });

    res.status(200).json(task);
  } catch (error) {
    console.log("Error in gettasksbyid", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

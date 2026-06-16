import Note from "../models/Note.js";

export async function getAllNotes(_,res){
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({message: "failed to fetch notes"});
    }
}

export async function getNoteById(req,res){
    try {
        const {id} = req.params;
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({message: "note not found"});
        }

        res.status(200).json(note);
    } catch (error) {
        console.error("Error fetching note:", error);
        res.status(500).json({message: "failed to fetch note"});
    }
}

export async function createNote(req,res){
    try {
        const {title, content} = req.body;
        const note = await Note.create({title, content});

        await note.save();
        res.status(201).json({message: "note created successfully", note});
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({message: "failed to create note"});
    }
}

export async function updateNote(req,res){
    try {
        const {id} = req.params;
        const {title, content} = req.body;

        const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true});

        if (!note) {
            return res.status(404).json({message: "note not found"});
        }

        res.status(200).json({message: "note updated successfully", note});
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({message: "failed to update note"});
    }
}

export async function deleteNote(req, res) {
    try {
        const { id } = req.params;

        const note = await Note.findByIdAndDelete(id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({
            message: "Failed to delete note"
        });
    }
}
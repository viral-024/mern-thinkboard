import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { toast } from "react-hot-toast";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";

const NoteCard = ({ note, setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault(); //get rid of the default behavior of the link

    if(!window.confirm("Are you sure you want to delete this note?")) return;
     
    try{
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch(error) {
      console.log("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="
        card
        bg-base-100
        border-t-4
        border-primary
        rounded-xl
        hover:shadow-xl
        hover:shadow-primary/10
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">
          {note.title}
        </h3>

        <p className="text-base-content/70 line-clamp-3">
          {note.content}
        </p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-xs hover:bg-primary/10">
              <PenSquareIcon className="size-4" />
            </button>

            <button className="btn btn-ghost btn-xs text-error hover:bg-error/10" onClick={(e) => handleDelete(e,note._id)}>
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
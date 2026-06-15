import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils";

const NoteCard = ({ note }) => {
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

            <button className="btn btn-ghost btn-xs text-error hover:bg-error/10">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
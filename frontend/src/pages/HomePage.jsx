import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import api from '../lib/axios';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import { Notebook } from 'lucide-react';
import NoteCard from '../components/NoteCard';

const HomePage = () => {
  const [isRatelimited, setIsRatelimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try{
        const response = await api.get("/notes");
        console.log(response.data);
        setNotes(response.data);
        setIsRatelimited(false);
      }
      catch(error){
        console.error("Error fetching notes:", error);
        if(error.response && error.response.status === 429){
          setIsRatelimited(true);
        }
        else{
          toast.error("An error occurred while fetching notes. Please try again later.");
        }
      }
      finally{
        setLoading(false);
      }
    };
    fetchNotes();
  }, [])


  return( 
      <div className="min-h-screen">
        <Navbar />

        {isRatelimited && <RateLimitedUI />}

        <div className="max-w-7xl mx-auto p-4 mt-4">
          {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
          {notes.length > 0 && !isRatelimited && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
}

export default HomePage;

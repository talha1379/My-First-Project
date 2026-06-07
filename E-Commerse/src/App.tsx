import { useEffect } from "react";
import { supabase } from "./supabase";

export default function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("test").select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    testConnection();
  }, []);

  return (
    <div>
      <h1>Supabase Connected 🚀</h1>
    </div>
  );
}

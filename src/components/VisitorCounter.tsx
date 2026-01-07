import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const { count, error } = await supabase
          .from("visitors")
          .select("*", { count: "exact", head: true });

        if (error) {
          console.error("Error fetching visitor count:", error);
          return;
        }

        setCount(count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Users className="w-4 h-4" />
      <span>{count.toLocaleString()} visitors</span>
    </div>
  );
};

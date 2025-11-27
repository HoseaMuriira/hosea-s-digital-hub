import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useVisitorTracking = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const userAgent = navigator.userAgent;
        
        await supabase
          .from("visitors")
          .insert([{ user_agent: userAgent }]);
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    trackVisitor();
  }, []);
};

import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const SubscribeButton = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // First, save to subscribers table
      const { error: dbError } = await supabase
        .from("subscribers")
        .insert([{ email }]);

      if (dbError) {
        if (dbError.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed!",
          });
          setIsOpen(false);
          setEmail("");
          return;
        }
        throw dbError;
      }

      // Then, send notification email
      const { error: fnError } = await supabase.functions.invoke(
        "notify-subscriber",
        {
          body: { email },
        }
      );

      if (fnError) {
        console.error("Error sending notification:", fnError);
        // Still show success since they're subscribed
      }

      toast({
        title: "Subscribed! 🎉",
        description: "Thank you for subscribing! Check your email for confirmation.",
      });

      setIsOpen(false);
      setEmail("");
    } catch (error: any) {
      console.error("Subscription error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-elegant z-50"
          size="icon"
          aria-label="Subscribe for updates"
        >
          <Bell className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Subscribe for Updates</DialogTitle>
          <DialogDescription>
            Get notified about new blog posts, projects, and insights from Hosea.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

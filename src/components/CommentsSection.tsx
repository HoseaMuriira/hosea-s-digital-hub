import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface Comment {
  id: string;
  username: string;
  comment: string;
  created_at: string;
}

export const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading comments:", error);
    } else {
      setComments(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !comment.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("comments")
      .insert([{ username: username.trim(), comment: comment.trim() }]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to post comment",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Comment posted successfully!",
      });
      setUsername("");
      setComment("");
      loadComments();
    }

    setLoading(false);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Comments</h2>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Leave a Comment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                maxLength={100}
              />
              <Textarea
                placeholder="Your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                maxLength={500}
                rows={4}
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Posting..." : "Post Comment"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {comments.map((c) => (
            <Card key={c.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <strong className="text-foreground">{c.username}</strong>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(c.created_at), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-foreground/90">{c.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {comments.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

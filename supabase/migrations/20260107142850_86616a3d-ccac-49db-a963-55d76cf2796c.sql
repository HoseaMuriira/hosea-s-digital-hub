-- Create subscribers table
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Anyone can subscribe (insert)
CREATE POLICY "Anyone can subscribe"
  ON public.subscribers
  FOR INSERT
  WITH CHECK (true);

-- Only admins can view subscribers
CREATE POLICY "Admins can view subscribers"
  ON public.subscribers
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete subscribers
CREATE POLICY "Admins can delete subscribers"
  ON public.subscribers
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));
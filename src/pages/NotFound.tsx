import { AlertCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-critical/10">
              <AlertCircle className="h-10 w-10 text-critical" />
            </div>
            
            <h1 className="mb-2 text-6xl font-bold">404</h1>
            <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
            
            <p className="mb-8 text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;

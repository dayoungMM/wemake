import type { Route } from "../../+types/routes";
import type { MetaFunction } from "react-router";

import { Button } from "~/common/components/ui/button";

export function loader({ request }: Route.LoaderArgs) {
  return {
    message: "Welcome to WeMake!"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "WeMake - Home" },
    { name: "description", content: "Welcome to WeMake - Your Creative Space" }
  ];
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold tracking-tight">{loaderData.message}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Get started by exploring our features
        </p>
        <Button className="mt-8" size="lg">
          Get Started
        </Button>
      </section>
    </main>
  );
} 
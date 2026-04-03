import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Plug } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ExtensionCardProps {
  title: string;
  description: string;
  downloads: string;
  type: string;
  href: string;
  platform: string;
  highlight: string;
  image?: string;
  className?: string;
}

export function ExtensionCard({
  title,
  description,
  downloads,
  type,
  href,
  platform,
  highlight,
  image,
  className,
}: ExtensionCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.01] h-full",
        className
      )}
    >
      <Link href={href} className="block">
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-md bg-foreground/10 text-foreground">
              <Plug className="size-4" />
            </div>
            <CardTitle className="text-base">{title}</CardTitle>
          </div>
          <Badge className="text-[10px] px-2 py-0.5" variant="secondary">
            {downloads}
          </Badge>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          <Badge className="px-1 py-0 text-[10px]" variant="secondary">
            {type}
          </Badge>
          <Badge className="px-1 py-0 text-[10px]" variant="outline">
            {highlight}
          </Badge>
        </div>
        <p className="mt-2 text-pretty font-sans text-xs text-muted-foreground">
          {description}
        </p>
      </CardHeader>
      <CardContent className="mt-auto px-2">
        <p className="text-xs text-muted-foreground">
          Published on {platform}
        </p>
      </CardContent>
      <CardFooter className="px-2 pb-3">
        <Link href={href} target="_blank" rel="noreferrer">
          <Button size="sm" variant="outline" className="gap-2">
            <ExternalLink className="size-3" />
            Open VSX
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

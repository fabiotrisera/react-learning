import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function HoverCardProvider({
  bodyChildren,
  hoverCardContentChildren
}: {
    bodyChildren: React.ReactNode,
  hoverCardContentChildren: React.ReactNode
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {bodyChildren}
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
         {hoverCardContentChildren}
      </HoverCardContent>
    </HoverCard>
  )
}

import type { PropsWithChildren, ReactNode } from 'react'

interface PlannerSectionPanelProps extends PropsWithChildren {
  title: ReactNode
  open: boolean
  onToggle: (open: boolean) => void
  className?: string
  bodyClassName?: string
}

export function PlannerSectionPanel({
  title,
  open,
  onToggle,
  className,
  bodyClassName,
  children
}: PlannerSectionPanelProps) {
  return (
    <details
      className={['panel', 'planner-panel', className].filter(Boolean).join(' ')}
      onToggle={(event) => onToggle(event.currentTarget.open)}
      open={open}
    >
      <summary>{title}</summary>
      <div className={bodyClassName ?? 'planner-panel__body'}>{children}</div>
    </details>
  )
}

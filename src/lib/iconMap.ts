import {
  LayoutTemplate,
  Server,
  Smartphone,
  Database,
  GitBranch,
  Code2,
  ServerCog,
  PlugZap,
  DatabaseZap,
  Palette,
  type LucideIcon,
} from 'lucide-react'

/**
 * Maps icon-name strings (used in lib/data.ts) to Lucide components.
 * Keeps data files framework-agnostic while components stay typed.
 */
export const iconMap: Record<string, LucideIcon> = {
  'layout-template': LayoutTemplate,
  server: Server,
  smartphone: Smartphone,
  database: Database,
  'git-branch': GitBranch,
  'code-2': Code2,
  'server-cog': ServerCog,
  'plug-zap': PlugZap,
  'database-zap': DatabaseZap,
  palette: Palette,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2
}

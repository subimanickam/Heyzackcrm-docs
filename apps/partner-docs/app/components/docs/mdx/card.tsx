import Link from 'next/link'
import Image from 'next/image'
import {
  Award,
  BarChart3,
  Box,
  Calendar,
  CalendarPlus,
  ChartLine,
  CircleCheck,
  CircleX,
  DollarSign,
  Funnel,
  Gauge,
  HardHat,
  History,
  IdCard,
  Phone,
  Rocket,
  Trophy,
  User,
  Users,
  Wrench,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  icon?: string
  image?: string
  href?: string
  children?: React.ReactNode
}

function normalizeDocsHref(href?: string): string {
  if (!href) return ''
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('/docs')) return href
  if (href.startsWith('/')) return `/docs${href}`
  return href
}

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-5 h-5" />,
  'chart-line': <ChartLine className="w-5 h-5" />,
  'chart-bar': <BarChart3 className="w-5 h-5" />,
  funnel: <Funnel className="w-5 h-5" />,
  'screwdriver-wrench': <Wrench className="w-5 h-5" />,
  'hard-hat': <HardHat className="w-5 h-5" />,
  box: <Box className="w-5 h-5" />,
  'dollar-sign': <DollarSign className="w-5 h-5" />,
  trophy: <Trophy className="w-5 h-5" />,
  gauge: <Gauge className="w-5 h-5" />,
  'calendar-plus': <CalendarPlus className="w-5 h-5" />,
  'circle-check': <CircleCheck className="w-5 h-5" />,
  'circle-xmark': <CircleX className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  user: <User className="w-5 h-5" />,
  calendar: <Calendar className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
  'address-card': <IdCard className="w-5 h-5" />,
  'clock-rotate-left': <History className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />,
  award: <Award className="w-5 h-5" />,
}

export function Card({ title, icon, image, href, children }: CardProps) {
  const IconComponent = icon ? iconMap[icon] : null

  const content = (
    <div
      className={cn(
        'group block h-full p-6 rounded-xl bg-gray-100 dark:bg-gray-800/50',
        'hover:bg-gray-200/80 dark:hover:bg-gray-800 transition-all duration-200',
        href && 'cursor-pointer'
      )}
    >
      {image ? (
        <div className="mb-3 w-6 h-6 relative">
          <Image
            src={image}
            alt=""
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ) : IconComponent && (
        <div className="mb-3 text-[var(--accent)]">
          {IconComponent}
        </div>
      )}
      <h3 className="font-semibold text-foreground mb-2">
        {title}
      </h3>
      {children && (
        <div className="text-sm text-muted-foreground leading-relaxed [&>p]:m-0">
          {children}
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link href={normalizeDocsHref(href)} className="block h-full">{content}</Link>
  }

  return content
}

interface CardGroupProps {
  cols?: number
  children: React.ReactNode
}

export function CardGroup({ cols = 2, children }: CardGroupProps) {
  return (
    <div
      className={cn(
        'grid gap-4 my-6 auto-rows-fr',
        cols === 1 && 'grid-cols-1',
        cols === 2 && 'grid-cols-1 sm:grid-cols-2',
        cols === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        cols === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      )}
    >
      {children}
    </div>
  )
}

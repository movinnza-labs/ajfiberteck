import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export default function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn('aj-container', className)}>{children}</Tag>;
}

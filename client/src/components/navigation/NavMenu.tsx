import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Home, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigationMenuItems = [
  { title: 'Home', href: '#', icon: Home, isActive: true },
  { title: 'Admin', href: '#blog', icon: Rss },
];
export default function NavigationMenuWithActiveItem() {
  return (
    <NavigationMenu className="md:block hidden">
      <NavigationMenuList className="space-x-8">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={cn(
                'relative group inline-flex h-9 w-max items-center justify-center px-0.5 py-2 text-sm font-medium',
                'before:absolute before:bottom-0 before:inset-x-0 before:h-[2px] before:bg-primary before:scale-x-0 before:transition-transform',
                'hover:before:scale-x-100 hover:text-accent-foreground',
                'focus:before:scale-x-100 focus:text-accent-foreground focus:outline-none',
                'disabled:pointer-events-none disabled:opacity-50',
                'data-[active]:before:scale-x-100 data-[state=open]:before:scale-x-100',
              )}
              asChild
              active={item.isActive}
            >
              <Link to={item.href}>
                <item.icon className="h-5 w-5 mr-1" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

import * as React from "react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "erelative ez-10 eflex emax-w-max eflex-1 eitems-center ejustify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "egroup eflex eflex-1 elist-none eitems-center ejustify-center espace-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "egroup einline-flex eh-9 ew-max eitems-center ejustify-center erounded-md ebg-white epx-4 epy-2 etext-sm efont-medium etransition-colors hover:ebg-slate-100 hover:etext-slate-900 focus:ebg-slate-100 focus:etext-slate-900 focus:eoutline-none disabled:epointer-events-none disabled:eopacity-50 data-[active]:ebg-slate-100/50 data-[state=open]:ebg-slate-100/50 dark:ebg-slate-950 dark:hover:ebg-slate-800 dark:hover:etext-slate-50 dark:focus:ebg-slate-800 dark:focus:etext-slate-50 dark:data-[active]:ebg-slate-800/50 dark:data-[state=open]:ebg-slate-800/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "egroup", className)}
    {...props}
  >
    {children}{""}
    <ChevronDownIcon
      className="erelative etop-[1px] eml-1 eh-3 ew-3 etransition eduration-300 group-data-[state=open]:erotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "eleft-0 etop-0 ew-full data-[motion^=from-]:eanimate-in data-[motion^=to-]:eanimate-out data-[motion^=from-]:efade-in data-[motion^=to-]:efade-out data-[motion=from-end]:eslide-in-from-right-52 data-[motion=from-start]:eslide-in-from-left-52 data-[motion=to-end]:eslide-out-to-right-52 data-[motion=to-start]:eslide-out-to-left-52 md:eabsolute md:ew-auto",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("eabsolute eleft-0 etop-full eflex ejustify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "eorigin-top-center erelative emt-1.5 eh-[var(--radix-navigation-menu-viewport-height)] ew-full eoverflow-hidden erounded-md eborder eborder-slate-200 ebg-white etext-slate-950 eshadow data-[state=open]:eanimate-in data-[state=closed]:eanimate-out data-[state=closed]:ezoom-out-95 data-[state=open]:ezoom-in-90 md:ew-[var(--radix-navigation-menu-viewport-width)] dark:eborder-slate-800 dark:ebg-slate-950 dark:etext-slate-50",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "etop-full ez-[1] eflex eh-1.5 eitems-end ejustify-center eoverflow-hidden data-[state=visible]:eanimate-in data-[state=hidden]:eanimate-out data-[state=hidden]:efade-out data-[state=visible]:efade-in",
      className
    )}
    {...props}
  >
    <div className="erelative etop-[60%] eh-2 ew-2 erotate-45 erounded-tl-sm ebg-slate-200 eshadow-md dark:ebg-slate-800" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

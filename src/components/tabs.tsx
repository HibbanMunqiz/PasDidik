'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses: Record<Size, string> = {
  xs: 'py-1 px-2 text-xs',
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
  xl: 'py-4 px-8 text-xl',
};

const typeClassName = {
  box: {
    indicator: '', // Box-style indicator (full height, with a border)
    button: 'bg-muted text-foreground border border-border rounded-md shadow-sm', // Text color for active button
  },
  underline: {
    indicator: 'h-0.5 bg-primary', // Underline-style indicator (thin and bottom-aligned)
    button: 'text-primary', // White text color for active button
  },
};

interface TabsContextType {
  value: string;
  onChange: (value: string) => void;
  registerTab: (value: string, ref: React.RefObject<HTMLButtonElement>) => void;
  size: Size;
  indicatorRef: React.RefObject<HTMLDivElement | null>;
  typeClassName: any; // Type class name for the indicator
}

const TabsContext = React.createContext<TabsContextType>({
  value: '',
  onChange: () => {},
  registerTab: () => {},
  size: 'sm',
  indicatorRef: React.createRef<HTMLDivElement>(),
  typeClassName: typeClassName.underline, // Default to 'underline' type
});

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onTabClick?: (value: string) => void;
  size?: Size;
  }

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className,
      defaultValue,
      value,
      onValueChange,
      onTabClick,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = React.useState(
      value || defaultValue || ''
    );
    const [tabRefs, setTabRefs] = React.useState<
      Record<string, React.RefObject<HTMLButtonElement>>
    >({});
    const indicatorRef = React.useRef<HTMLDivElement>(null);

    // Responsive tab type (box on mobile, underline on desktop)
    const tabType = 'box' as const; // Change this to 'underline' for underline style

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    React.useEffect(() => {
      const selectedTabRef = tabRefs[selectedValue];
      if (!selectedTabRef?.current || !indicatorRef.current) return;

      const updateIndicator = () => {
        const tabElement = selectedTabRef.current;
        const container = tabElement.offsetParent as HTMLElement;
        const tabRect = tabElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const offsetX = tabRect.left - containerRect.left;
        const offsetY = tabRect.top - containerRect.top;

        if (indicatorRef.current) {
          indicatorRef.current.style.width = `${tabRect.width}px`;
          indicatorRef.current.style.height = `${tabRect.height}px`;
          indicatorRef.current.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
        }
      };

      updateIndicator();

      const observer = new ResizeObserver(() => updateIndicator());
      if (selectedTabRef.current) {
        observer.observe(selectedTabRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [selectedValue, tabRefs]);


    const handleValueChange = React.useCallback(
      (newValue: string) => {
        setSelectedValue(newValue);
        onValueChange?.(newValue);
        onTabClick?.(newValue);
      },
      [onValueChange, onTabClick]
    );

    const registerTab = React.useCallback(
      (value: string, ref: React.RefObject<HTMLButtonElement>) => {
        setTabRefs((prev) => ({ ...prev, [value]: ref as any }));
      },
      []
    );

    return (
      <TabsContext.Provider
        value={{
          value: selectedValue,
          onChange: handleValueChange,
          registerTab,
          size,
          indicatorRef,
          typeClassName: typeClassName[tabType], // Pass the selected type class names
        }}
      >
        <div ref={ref} className={cn('w-full', className)} {...props} />
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = 'Tabs';

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { indicatorRef, typeClassName } = React.useContext(TabsContext);

    return (
      <div className="relative">
        <div
          ref={ref}
          className={cn(
            'relative flex flex-wrap items-center justify-center gap-2',
            className
          )}
          {...props}
        />
        {typeClassName.indicator && (
          <div
            ref={indicatorRef}
            className={cn(
              'z-0 absolute bottom-0 transition-all duration-300 ease-in-out',
              typeClassName.indicator
            )}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
);
TabsList.displayName = 'TabsList';

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ className, value, ...props }, ref) => {
    const {
      value: selectedValue,
      onChange,
      registerTab,
      size,
      typeClassName,
    } = React.useContext(TabsContext);
    const isSelected = selectedValue === value;
    const tabRef = React.useRef<any>(null);

    // Register the tab (we ignore the return value from useEffect)
    React.useEffect(() => {
      registerTab(value, tabRef);
    }, [value, registerTab]);

    return (
      <button
        ref={(node) => {
          tabRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role="tab"
        type="button"
        aria-selected={isSelected}
        data-state={isSelected ? 'active' : 'inactive'}
        data-value={value}
        className={cn(
          'z-1 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          sizeClasses[size],
          isSelected
            ? typeClassName.button // Use the button style based on type
            : 'text-muted-foreground hover:text-foreground',
          className
        )}
        onClick={() => onChange(value)}
        {...props}
      />
    );
  }
);
Tab.displayName = 'Tab';

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue } = React.useContext(TabsContext);
    const isSelected = selectedValue === value;

    if (!isSelected) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-state={isSelected ? 'active' : 'inactive'}
        data-value={value}
        className={cn(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        )}
        {...props}
      />
    );
  }
);
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, Tab, TabsContent };

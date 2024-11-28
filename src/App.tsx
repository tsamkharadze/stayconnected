import { ModeToggle } from '@/components/layout/components/header/mode-toggle';
import { ThemeProvider } from '@/components/theme/theme-provider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* demo of ModeToggle */}
      <div className='bg-background text-foreground'>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;

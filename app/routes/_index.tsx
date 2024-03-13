import { useDevMode } from '~/contexts/devModeContext';
import DesignerPage from './DesignerPage';

export default function Index() {
  const { devMode } = useDevMode();

  return (
    <div className="flex items-center justify-center h-screen">
      {devMode ? (
        <div className="flex flex-col w-1/2 mx-auto my-8 h-1/2 justify-center items-center text-2xl font-bold shadow-md">
          <div>Developer Layout Coming Soon!</div>
          <img
            src="/coming-soon.gif"
            alt="Survey Unavailable"
            className="w-2/3 mt-4"
          />
        </div>
      ) : (
        <DesignerPage />
      )}
    </div>
  );
}

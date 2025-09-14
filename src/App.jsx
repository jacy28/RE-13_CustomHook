import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ToggleOne from "./components/ToggleOne";
import ToggleTwo from "./components/Toggletwo";
import ThemeToggle from "./components/ThemeToggle";
import UsernameInput from "./components/UserNameInput";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import NameForm from "./components/NameForm";
import EmailForm from "./components/EmailForm";
import SearchInput from "./components/SearchInput";
import DebouncedUserSearch from "./components/DebouncedUserSearch";
import TextInputWithPrevious from "./components/TextInputWithPrevious";
import CounterWithPrevious from "./components/CounterWithPrevious";
import HoverCard from "./components/HoverCard";
import HoverBox from "./components/HoverBox";
import PageTitle from "./components/PageTitle";
import DynamicTitle from "./components/DynamicTitle";
import MessageTimeout from "./components/MessageTimeout";
import AlertTimeout from "./components/AlertTimeOut";
import CopyText from "./components/CopyText";
import CopyInput from "./components/CopyInput";
import ScreenSize from "./components/ScreenSize";
import ResponsiveBox from "./components/ResonsiveBox";
import OnlineStatus from "./components/OnlineStatus";
import StatusBanner from "./components/StatusBanner";
import ShowLocation from "./components/ShowLocation";
import LocationCard from "./components/LocationCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemeBox from "./components/ThemeBox";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Custom Hook</h1>
      <CounterOne />
      <CounterTwo />
      <ToggleOne />
      <ToggleTwo />
      <ThemeToggle />
      <UsernameInput />
      <UsersList />
      <PostsList />
      <NameForm />
      <EmailForm />
      <SearchInput />
      <DebouncedUserSearch />
      <TextInputWithPrevious />
      <CounterWithPrevious />
      <HoverCard />
      <HoverBox />
      <PageTitle />
      <DynamicTitle />
      <MessageTimeout />
      <AlertTimeout />
      <CopyInput />
      <CopyText />
      <ScreenSize />
      <ResponsiveBox />
      <OnlineStatus />
      <StatusBanner />
      <ShowLocation />
      <LocationCard />
      <ThemeSwitcher />
      <ThemeBox />
    </div>
  );
};

export default App;
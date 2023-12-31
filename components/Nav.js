import useDeviceDetect from "@/hooks/useDeviceDetect";
import Link from "next/link";
import Close from "./icons/Close";
import Menu from "./icons/Menu";

export const Nav = ({
  selectedSectionSlugs,
  setShowModal,
  getTemplate,
  onMenuClick,
  isDrawerOpen,
}) => {
  const { isMobile } = useDeviceDetect();

  const markdown = selectedSectionSlugs?.reduce((acc, section) => {
    const template = getTemplate(section);
    if (template) {
      return `${acc}${template?.markdown}`;
    } else {
      return acc;
    }
  }, ``);

  const downloadMarkdownfile = () => {
    const a = document.createElement("a");
    const blob = new Blob([markdown]);
    a.href = URL.createObjectURL(blob);
    a.download = "README.md";
    a.click();
    if (isMobile && isDrawerOpen) {
      onMenuClick();
    }
    setShowModal(true);
  };

  return (
    <nav className=" flex justify-between p-4 align-center w-full">
      <Link href="/">
        <div className="flex items-center">
          <p className="  ml-2 text-md">AutoReadme</p>
        </div>
      </Link>
      <div className="flex flex-row-reverse md:flex-row">
        <button
          className="focus:outline-none focus:ring-2 focus:ring-blue-700"
          onClick={onMenuClick}
        >
          {isDrawerOpen ? (
            <Close className="w-10 h-10 md:hidden fill-current text-blue-700" />
          ) : (
            <Menu className="w-10 h-10 md:hidden fill-current text-blue-700" />
          )}
        </button>
        <button
          type="button"
          className="flex flex-row relative items-center mr-4 md:mr-0 px-4 py-2 text-sm font-bold tracking-wide text-white border border-transparent rounded-md shadow-sm bg-blue-700 hover:opacity-90 focus:outline-none focus:ring-2  focus:ring-offset-0 focus:ring-blue-700"
          onClick={downloadMarkdownfile}
        >
          <img className="w-auto h-6 cursor-pointer" src="download.svg" />
          <span className="hidden md:inline-block ml-2">Download</span>
        </button>
      </div>
    </nav>
  );
};

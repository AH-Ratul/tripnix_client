import { LucideLoader } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <LucideLoader className="animate-spin" />
    </div>
  );
};

export default Loader;

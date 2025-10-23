import { Check, X } from "lucide-react";

type TProps = {
  included: string[];
  excluded: string[];
};

const IncludesExcludes = ({ included, excluded }: TProps) => {
  return (
    <div className="mt-9 border-t pt-5">
      <h1 className="mb-4 text-2xl font-medium">Includes/Excludes</h1>

      <div className="flex gap-10">
        <div>
          {included.map((include: any) => (
            <div
              key={include}
              className="flex flex-col my-2 text-muted-foreground "
            >
              <span className="flex items-center gap-2">
                <Check color="green" width={17} /> {include}
              </span>
            </div>
          ))}
        </div>

        <div>
          {excluded.map((exclude: any) => (
            <div
              key={exclude}
              className="flex flex-col my-2 text-muted-foreground "
            >
              <span className="flex items-center gap-2">
                <X color="red" width={17} /> {exclude}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncludesExcludes;

import { Minus } from "lucide-react";

type TProps = {
  tourPlan: string[];
};

const TourPlan = ({ tourPlan }: TProps) => {
  return (
    <div className="mt-9 border-t pt-5">
      <h1 className="mb-4 text-2xl font-medium">Tour Plan</h1>

      <div>
        {tourPlan.map((plan: any) => (
          <div key={plan} className="flex flex-col my-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Minus width={17} /> {plan}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPlan;

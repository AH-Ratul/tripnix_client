import { Dot } from "lucide-react";

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
            <p className="relative text-justify pl-10">
              <span className="absolute left-0 top-0">
                <Dot width={50} />
              </span>
              {plan}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPlan;

import { BackButton } from "@/components/BackButton";
import { getCoustomer } from "@/lib/queries/getCoustomer";

const CoustomerFormPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  try {
    const { coustomerId } = await searchParams;
    if (coustomerId) {
      const coustomer = await getCoustomer(parseInt(coustomerId));
      if (!coustomer) {
        return (
          <>
            <div>coustomer id not exist</div>
            <BackButton title="Go back" variant={"default"} />
          </>
        );
      }
      console.log(coustomer);
    } else {
      // new coustomer form
    }
  } catch (error) {
    console.log("error ocurs in coustomer form page", error);
  }
};

export default CoustomerFormPage;

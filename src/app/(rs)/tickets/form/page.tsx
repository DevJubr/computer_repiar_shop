import { BackButton } from "@/components/BackButton";
import { getCoustomer } from "@/lib/queries/getCoustomer";
import { getTicket } from "@/lib/queries/getTicket";

const TicketFornPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  try {
    const { coustomerId, ticketId } = await searchParams;

    if (!coustomerId && !ticketId) {
      return (
        <>
          <h1 className="text-5xl">NOT FOUND BOTH OF ID </h1>
        </>
      );
    }

    if (coustomerId) {
      const coustomer = await getCoustomer(parseInt(coustomerId));

      if (!coustomer) {
        return (
          <>
            <h1 className="text-5xl">NO COUSTOMER FOUND </h1>
            <BackButton title="back go" variant={"default"} />
          </>
        );
      }

      if (!coustomer.isActive) {
        return (
          <>
            <h1 className="text-5xl">NO COUSTOMER FOUND </h1>
            <BackButton title="back go" variant={"default"} />
          </>
        );
      }
      console.log(coustomer);
    }

    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }

      const coustomer = await getCoustomer(ticket.coustomerId);

      // return ticket form
      console.log("ticket: ", ticket);
      console.log("customer: ", coustomer);
    }
  } catch (error) {
    throw error;
  }
};

export default TicketFornPage;
